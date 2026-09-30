"""Seamless 24 s loop for the money-flow video (3 scenes x 8 s). Derived from the teaser soundtrack: 120 BPM (1 bar = 2 s), warm product-video style.
Synthesized from scratch (no samples), so it's royalty-free. Writes video/music.wav.
Structure follows the video: intro 0-6 s, groove 6-14, breakdown + riser 14-18, full drop 18-25, outro chord 25-28."""
import numpy as np, wave, os

SR = 44100
DUR = 24.0
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
    """Mix in with wrap-around, so tails that run past the end continue at the start (seamless loop)."""
    i = int(start * SR) % len(buf)
    for k in range(0, len(sig), len(buf) - i if i else len(buf)):
        pass
    idx = (np.arange(len(sig)) + i) % len(buf)
    np.add.at(buf, idx, sig)

# Chords (one per bar): Fmaj9, Am7, Dm9, Bbmaj9  ->  I iii vi IV in F, looping
CHORDS = [[53, 57, 60, 64, 67], [57, 60, 64, 67, 71], [50, 57, 60, 64, 65], [46, 53, 57, 60, 62]]
bar_chord = lambda b: CHORDS[b % 4]

pad = np.zeros(N); pluck = np.zeros(N); bass = np.zeros(N); drums = np.zeros(N); fx = np.zeros(N)

# ---------- steady loop: 12 bars, chords cycle 3x (one cycle per scene) ----------
for b in range(12):
    n = int(2.3 * SR); tt = np.arange(n) / SR; chord = bar_chord(b); sig = np.zeros(n)
    for m_ in chord:
        for det in (-0.08, 0.0, 0.08):
            f = note(m_ + det); sig += (2 * ((tt * f) % 1) - 1) * 0.5 + np.sin(2 * np.pi * f * tt)
    add(pad, sig * env_adsr(n, 0.35, 0.3, 0.85, 0.5, 1.9) * 0.45 / len(chord), b * 2.0)
pad = fft_filter(pad, lo=90, hi=1800)
ARP = [0, 2, 1, 3, 2, 4, 3, 2]
for b in range(12):
    chord = bar_chord(b)
    for k in range(8):
        m_ = chord[ARP[k] % len(chord)] + 12 + (12 if b % 4 == 3 else 0)
        n = int(0.6 * SR); tt = np.arange(n) / SR; f = note(m_)
        s = (np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2 * f * tt) * np.exp(-tt * 14)) * np.exp(-tt * 7)
        add(pluck, s * 0.15 * (0.8 + 0.2 * (k % 2 == 0)), b * 2.0 + k * 0.25)
for b in range(12):
    root = bar_chord(b)[0] - 12
    for st, ln in ((0, 0.9), (1.5, 0.45)):
        n = int(ln * SR); tt = np.arange(n) / SR
        add(bass, np.sin(2 * np.pi * note(root) * tt) * env_adsr(n, 0.01, 0.1, 0.8, 0.12, ln - 0.12) * 0.4, b * 2.0 + st)
def kick():
    n = int(0.35 * SR); tt = np.arange(n) / SR
    return np.sin(2 * np.pi * np.cumsum(45 + 95 * np.exp(-tt * 28)) / SR) * np.exp(-tt * 9)
def clap():
    n = int(0.22 * SR); tt = np.arange(n) / SR
    return fft_filter(rng.standard_normal(n), lo=900, hi=5000) * np.exp(-tt * 22)
def hat():
    n = int(0.05 * SR); tt = np.arange(n) / SR
    return fft_filter(rng.standard_normal(n), lo=7000) * np.exp(-tt * 70)
K, C = kick(), clap()
for b in range(12):
    for q in range(4):
        tq = b * 2.0 + q * BEAT
        if q in (0, 2): add(drums, K * 0.7, tq)
        if q in (1, 3) and b % 4 >= 2: add(drums, C * 0.25, tq)
        for e in range(2): add(drums, hat() * (0.11 if e else 0.07), tq + e * 0.25)
def swell(length, peak):
    n = int(length * SR); tt = np.arange(n) / SR
    return fft_filter(rng.standard_normal(n), lo=400, hi=6000) * (tt / length) ** 2.5 * peak
def sparkle(start, notes):
    for i, m_ in enumerate(notes):
        n = int(0.9 * SR); tt = np.arange(n) / SR
        add(fx, np.sin(2 * np.pi * note(m_) * tt) * np.exp(-tt * 4) * 0.11, start + i * 0.07)
for s0 in (0.0, 8.0, 16.0):                # each new purchase: a swell into it and a small chime as it lands
    add(fx, swell(0.9, 0.16), s0 - 0.9)
    sparkle(s0 + 0.5, [81, 84, 88])

# ---------- reverb (convolution with a decaying noise tail) ----------
def reverb(x, secs=2.2, seed=1):
    """Circular convolution: the reverb tail wraps to the start, so the loop point is seamless."""
    n = int(secs * SR); tt = np.arange(n) / SR
    ir = np.random.default_rng(seed).standard_normal(n) * np.exp(-tt * 3.2); ir[0] = 1.0
    ir = np.pad(fft_filter(ir, hi=6000), (0, len(x) - n))
    y = np.fft.irfft(np.fft.rfft(x) * np.fft.rfft(ir), len(x))
    return y / (np.max(np.abs(y)) + 1e-9) * np.max(np.abs(x))

wet_src = pad * 0.8 + pluck
revL, revR = reverb(wet_src, seed=1), reverb(wet_src, seed=2)

# stereo: pluck bounces gently L/R, pad centered-wide, drums/bass centered
pan = 0.5 + 0.25 * np.sin(2 * np.pi * t_all / 2.0)
L = pad + pluck * (1 - pan) * 1.2 + bass + drums + fx + revL * 0.35
R = pad + pluck * pan * 1.2 + bass + drums + fx + revR * 0.35

# master: fade in/out, gentle saturation, normalize to -1 dBFS
L, R = np.tanh(L * 1.2), np.tanh(R * 1.2)       # no fades: it's a loop
peak = max(np.max(np.abs(L)), np.max(np.abs(R))); L, R = L / peak * 0.89, R / peak * 0.89

out = os.path.join(os.path.dirname(__file__), "music_loop.wav")
pcm = (np.stack([L, R], axis=1) * 32767).astype(np.int16)
with wave.open(out, "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print("wrote", out)
