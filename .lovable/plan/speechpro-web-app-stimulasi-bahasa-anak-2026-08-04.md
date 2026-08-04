# SpeechPro — Web App Stimulasi Bahasa Anak

A mobile-first web app rebuilt from the mockups in `web_requirement.pdf`. All copy stays in Indonesian, all 6 modules are included, and data is saved locally in the browser (no login).

## Look and feel

Taken directly from the mockups:
- Soft lavender/violet background wash, white rounded cards (very round corners, ~24px), gentle shadows
- Primary violet (#7C4DFF-ish), deep navy headings, accent pink, plus soft pastel tiles: mint green, peach, cream yellow, baby blue, blush pink
- Rounded friendly sans-serif (Baloo 2 / Nunito style headings, Nunito Sans body)
- Playful illustrated icons and baby/family illustrations, star and confetti accents
- Phone-width frame (max ~440px) centered on desktop with a soft page background, exactly like the mockups
- Fixed bottom tab bar: Beranda, Riwayat, Hari Ini (raised violet heart button), Pesan, Profil

## Pages

```text
/                 Beranda      logo header, child profile card, "Pengingat Hari Ini",
                               6 feature tiles, family banner, bottom tab bar
/skrining         Skrining     age selector (3,6,9,12,15,18,24,30,36 bln), KPSP
                               yes/no questions, live "Hasil Sementara", Tips,
                               "Selesai Skrining" -> result screen
/latihan          Latihan Kata Harian: age band picker (0-3 ... 24-36 bln),
                               word categories with chips + "kapan digunakan",
                               Tips Orang Tua, Manfaat, Cetak/Simpan
/catatan          Catatan Perkembangan: daily log entry (duration, new words,
                               child response, notes), saved list, Cetak/Simpan
/panduan          Panduan Orang Tua: 3 tabs — Speech Delay, Pola Asuh Suportif,
                               Pembatasan Screen Time — plus Aktivitas Positif
/evaluasi         Evaluasi Mingguan: weekly summary, language score with % ring
                               and Sangat Baik/Baik/Cukup/Perlu Perhatian bands,
                               6-aspect star rating table, recommendations,
                               vs-last-week comparison, weekly badge
/reward           Reward: point total, "Tukar Poin", 7-day streak strip,
                               badge collection (Pemula Hebat, Stimulasi Rutin,
                               Belajar Setiap Hari, Orang Tua Hebat, locked ones)
/riwayat          Riwayat: past screenings, logs and weekly evaluations
/profil           Profil: child name, birth date, age band, reset data
```

## Content

All content is transcribed from the PDF, not invented:
- KPSP screening questions per age milestone (0–36 months)
- Daily word lists per age band with categories (Keluarga, Bagian Tubuh, Benda di Sekitar, Makanan & Minuman, Kegiatan Sehari-hari, Perasaan & Ekspresi) and usage notes
- Parent tips, benefits, screen-time recommendations, and encouragement lines
- Weekly evaluation aspects and scoring bands

## How it works (technical)

- TanStack Start routes, one file per page; shared `AppShell` with phone frame + bottom tab bar
- Static content in typed data modules under `src/data/` (kpsp questions, word lists, guidance, evaluation aspects, badges)
- State in `localStorage` via a small `useLocalStorage` hook: child profile, screening answers/results, daily logs, streak, points, badges
- Points/streak/badges derived from logged stimulation days; weekly evaluation computed from logs of the last 7 days
- Design tokens (colors, radii, fonts) added to `src/styles.css`; fonts loaded via `<link>` in the root route
- Illustrations generated as app assets (baby with blocks, family, trophy, star, module icons) to match the mockup style
- "Cetak / Simpan" uses a print stylesheet so a page prints or saves as PDF cleanly
- Per-page SEO metadata via each route's `head()`
