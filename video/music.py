"""Original soundtrack for the teaser: 28 s, 120 BPM (1 bar = 2 s), warm product-video style.
Synthesized from scratch (no samples), so it's royalty-free. Writes video/music.wav.
Structure follows the video: intro 0-6 s, groove 6-14, breakdown + riser 14-18, full drop 18-25, outro chord 25-28."""
import numpy as np, wave, os

SR = 44100
DUR = 28.0
N = int(SR * DUR)
t_all = np.arange(N) / SR
BEAT = 0.5          # 120 BPM
rng = np.random.default_rng(7)

def note(n):        # MIDI note -> Hz
    return 440.0 * 2 ** ((n - 69) / 12)

def env_adsr(n, a, d, s, r, sus_len):
    """Sample-length envelope: attack, decay, sustain level, release (seconds)."""
    A, D, R = int(a * SR), int(d * SR), int(r * SR)
    S = max(0, int(sus_len * SR) - A - D)
    e = np.concatenate([np.linspace(0, 1, A, endpoint=False), np.linspace(1, s, D, endpoint=False),
                        np.full(S, s), np.linspace(s, 0, R)])
    return e[:n] if len(e) >= n else np.pad(e, (0, n - len(e)))

def fft_filter(x, lo=None, hi=None):
    """Zero-phase brick-ish filter with soft edges (good enough for pads/noise)."""
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); g = np.ones_like(f)
    if hi: g *= 1 / (1 + (f / hi) ** 4)
    if lo: g *= 1 / (1 + (lo / np.maximum(f, 1)) ** 4)
    return np.fft.irfft(X * g, len(x))

def add(buf, sig, start):
    i = int(start * SR)
    if i >= len(buf): return
    j = min(len(buf), i + len(sig)); buf[i:j] += sig[: j - i]

# Chords (one per bar): Fmaj9, Am7, Dm9, Bbmaj9  ->  I iii vi IV in F, looping
CHORDS = [[53, 57, 60, 64, 67], [57, 60, 64, 67, 71], [50, 57, 60, 64, 65], [46, 53, 57, 60, 62]]
bar_chord = lambda b: CHORDS[b % 4]

pad = np.zeros(N); pluck = np.zeros(N); bass = np.zeros(N); drums = np.zeros(N); fx = np.zeros(N)

# ---------- pad: detuned soft saws, lowpassed ----------
for b in range(14):
    start, length = b * 2.0, 2.3
    n = int(length * SR); tt = np.arange(n) / SR
    chord = bar_chord(b) if b < 13 else [53, 57, 60, 64, 67, 72]
    sig = np.zeros(n)
    for m in chord:
        for det in (-0.08, 0.0, 0.08):                      # ~8 cents detune for width
            f = note(m + det)
            sig += (2 * ((tt * f) % 1) - 1) * 0.5 + np.sin(2 * np.pi * f * tt)
    level = 0.55 if b < 3 else 0.45 if b < 12 else 0.6
    sig *= env_adsr(n, 0.35, 0.3, 0.85, 0.5, 1.9) * level / len(chord)
    add(pad, sig, start)
pad = fft_filter(pad, lo=90, hi=1800)

# ---------- pluck arpeggio: bell-ish decaying sines, 8th notes ----------
ARP = [0, 2, 1, 3, 2, 4, 3, 2]
for b in range(13):
    chord = bar_chord(b)
    up = 12 if 9 <= b <= 11 else 0                          # octave up for the Solana drop
    for k in range(8):
        tstart = b * 2.0 + k * 0.25
        if 7 <= b <= 8 and k % 2: continue                  # thinner during the breakdown
        m = chord[ARP[k] % len(chord)] + 12 + up
        n = int(0.6 * SR); tt = np.arange(n) / SR; f = note(m)
        s = (np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2 * f * tt) * np.exp(-tt * 14)) * np.exp(-tt * 7)
        vel = 0.16 * (0.8 + 0.2 * (k % 2 == 0)) * (0.75 if b < 3 else 1)
        add(pluck, s * vel, tstart)

# ---------- sub bass: root notes from the groove onward ----------
for b in range(3, 13):
    if b in (7, 8): continue                                # breakdown: no bass
    root = bar_chord(b)[0] - 12
    for beat in ((0, 0.9), (1.5, 0.45)) if b < 9 else ((0, 0.45), (0.5, 0.45), (1.0, 0.45), (1.5, 0.45)):
        n = int(beat[1] * SR); tt = np.arange(n) / SR; f = note(root)
        s = np.sin(2 * np.pi * f * tt) * env_adsr(n, 0.01, 0.1, 0.8, 0.12, beat[1] - 0.12)
        add(bass, s * 0.42, b * 2.0 + beat[0])

# ---------- drums ----------
def kick():
    n = int(0.35 * SR); tt = np.arange(n) / SR
    f = 45 + 95 * np.exp(-tt * 28)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 9)
def clap():
    n = int(0.22 * SR); tt = np.arange(n) / SR
    return fft_filter(rng.standard_normal(n), lo=900, hi=5000) * np.exp(-tt * 22)
def hat(length=0.05):
    n = int(length * SR); tt = np.arange(n) / SR
    return fft_filter(rng.standard_normal(n), lo=7000) * np.exp(-tt * 70)

K, C = kick(), clap()
for b in range(3, 13):
    for q in range(4):
        tq = b * 2.0 + q * BEAT
        if b in (7, 8):                                     # breakdown: only a heartbeat kick on 1
            if q == 0: add(drums, K * 0.5, tq)
            continue
        if b < 9:                                           # groove: soft kick on 1 & 3, shaker
            if q in (0, 2): add(drums, K * 0.7, tq)
        else:                                               # drop: four on the floor + claps
            add(drums, K * 0.85, tq)
            if q in (1, 3): add(drums, C * 0.35, tq)
        for e in range(2): add(drums, hat() * (0.12 if e else 0.08), tq + e * 0.25)

# ---------- transitions: swell into scenes, riser, impacts, sparkle ----------
def swell(length, peak):
    n = int(length * SR); tt = np.arange(n) / SR
    noise = fft_filter(rng.standard_normal(n), lo=400, hi=6000)
    return noise * (tt / length) ** 2.5 * peak
def impact():
    n = int(1.6 * SR); tt = np.arange(n) / SR
    boom = np.sin(2 * np.pi * np.cumsum(38 + 60 * np.exp(-tt * 6)) / SR) * np.exp(-tt * 2.6)
    air = fft_filter(rng.standard_normal(n), lo=2000) * np.exp(-tt * 3.5) * 0.25
    return boom + air
def sparkle(start, notes):
    for i, m in enumerate(notes):
        n = int(0.9 * SR); tt = np.arange(n) / SR; f = note(m)
        add(fx, np.sin(2 * np.pi * f * tt) * np.exp(-tt * 4) * 0.12, start + i * 0.07)

add(fx, swell(1.0, 0.18), 4.7)             # into the money tree (5.7 s)
add(fx, swell(3.6, 0.35), 14.4)            # riser through the breakdown into the drop
riser_n = int(3.6 * SR); rt = np.arange(riser_n) / SR
add(fx, np.sin(2 * np.pi * np.cumsum(200 + 900 * (rt / 3.6) ** 2) / SR) * (rt / 3.6) ** 2 * 0.06, 14.4)
add(fx, impact() * 0.55, 18.0)             # Solana drop
add(fx, swell(0.8, 0.15), 21.1)            # into "what if you invested it instead?"
sparkle(24.35, [84, 88, 91, 96])           # the +95% landing
add(fx, swell(0.9, 0.18), 24.4)            # into the end card
add(fx, impact() * 0.35, 25.3)

# ---------- reverb (convolution with a decaying noise tail) ----------
def reverb(x, secs=2.2, seed=1):
    n = int(secs * SR); tt = np.arange(n) / SR
    ir = np.random.default_rng(seed).standard_normal(n) * np.exp(-tt * 3.2); ir[0] = 1.0
    ir = fft_filter(ir, hi=6000); L = len(x) + n
    y = np.fft.irfft(np.fft.rfft(x, L) * np.fft.rfft(ir, L), L)[: len(x)]
    return y / (np.max(np.abs(y)) + 1e-9) * np.max(np.abs(x))

wet_src = pad * 0.8 + pluck
revL, revR = reverb(wet_src, seed=1), reverb(wet_src, seed=2)

# stereo: pluck bounces gently L/R, pad centered-wide, drums/bass centered
pan = 0.5 + 0.25 * np.sin(2 * np.pi * t_all / 2.0)
L = pad + pluck * (1 - pan) * 1.2 + bass + drums + fx + revL * 0.35
R = pad + pluck * pan * 1.2 + bass + drums + fx + revR * 0.35

# master: fade in/out, gentle saturation, normalize to -1 dBFS
fade = np.ones(N); fi, fo = int(0.25 * SR), int(2.2 * SR)
fade[:fi] = np.linspace(0, 1, fi); fade[-fo:] = np.linspace(1, 0, fo) ** 1.5
L, R = np.tanh(L * fade * 1.2), np.tanh(R * fade * 1.2)
peak = max(np.max(np.abs(L)), np.max(np.abs(R))); L, R = L / peak * 0.89, R / peak * 0.89

out = os.path.join(os.path.dirname(__file__), "music.wav")
pcm = (np.stack([L, R], axis=1) * 32767).astype(np.int16)
with wave.open(out, "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print("wrote", out)
