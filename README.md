# 🌐 Portfolio Pribadi — I Komang Pradnya Wiryatama

Website portfolio statis **siap pakai** (tanpa build step) — HTML + CSS + JavaScript murni.
Seluruh konten sudah final dan berbasis data asli dari GitHub (akun `omingpradnya5-maker` & komunitas Central Saga).

## ✅ Status

| Item | Status |
|---|---|
| Semua placeholder diganti konten final | ✅ |
| Data proyek dari repository asli | ✅ |
| SEO meta + Open Graph + favicon | ✅ |
| Responsive (desktop/tablet/mobile) + aksesibilitas reduced-motion | ✅ |
| Animasi reveal, menu mobile, highlight nav aktif | ✅ |
| Siap deploy GitHub Pages / Vercel | ✅ |

## 📁 Struktur

```
portfolio/
├── index.html   # seluruh konten (hero, tentang, keahlian, proyek, kontak)
├── styles.css   # tema gelap, variabel warna, responsive
├── script.js    # menu mobile, animasi reveal, highlight nav
└── README.md
```

## 🚀 Deploy (pilih salah satu)

### Opsi A — GitHub Pages (gratis)
```bash
cd portfolio
git init -b main
git add . && git commit -m "feat: portfolio pribadi"
git remote add origin https://github.com/omingpradnya5-maker/portfolio.git
git push -u origin main
```
Lalu: repo **Settings → Pages → Source: Deploy from a branch** → `main` / `/root` → Save.
Hasil: `https://omingpradnya5-maker.github.io/portfolio/`

### Opsi B — Vercel (gratis, domain seperti referensi)
1. Push repo `portfolio` ke GitHub (perintah di atas).
2. Buka https://vercel.com/new → **Import** repo → Framework: **Other** → **Deploy**.
3. Selesai — Anda dapat `https://<nama>.vercel.app`.

## ✏️ Ingin menyesuaikan konten?

- **Warna tema:** ubah variabel di `styles.css` bagian `:root` (`--accent`, `--bg`).
- **Proyek:** edit `<article class="project-card">` pada `index.html` (bagian `#projects`).
- **Keahlian:** edit chip `<span>` pada bagian `#skills`.
- **Kontak (email/LinkedIn):** saat ini kontak mengarah ke GitHub. Tambahkan tombol
  `mailto:` / LinkedIn di bagian `#contact` sesuai kebutuhan.
- **Foto:** ganti `src` pada `.hero-avatar` (sekarang memakai foto GitHub Anda).
