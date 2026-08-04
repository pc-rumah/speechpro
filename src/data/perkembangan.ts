import type { AgeBandId } from "./ages";

export type MilestoneSheet = {
  intro: string;
  stages: string[];
  aspects: { title: string; description: string }[];
  activities: string[];
  warnings: string[];
};

const fallbackAspects = [
  { title: "Meniru bunyi", description: "Meniru suara atau bunyi yang didengar." },
  { title: "Suku kata berulang", description: "Mengucapkan suku kata berulang." },
  { title: "Respons nama", description: "Menoleh atau merespons saat namanya dipanggil." },
  { title: "Paham kata sederhana", description: 'Memahami kata sederhana seperti "tidak", "dadah".' },
  { title: "Menunjuk / meraih benda", description: "Menunjuk, meraih, atau tertarik pada benda." },
  { title: "Interaksi sosial", description: "Mulai tertarik berinteraksi dengan orang lain." },
];

export const milestoneSheets: Record<AgeBandId, MilestoneSheet> = {
  "0-3": {
    intro:
      "Pada usia 0–3 bulan, Si Kecil mulai mengenali suara orang tua, menatap wajah, dan mengeluarkan suara selain menangis.",
    stages: [
      "Menatap wajah dan mengikuti gerakan",
      "Tersenyum saat diajak berbicara",
      'Mengeluarkan suara "aah", "ooh"',
      "Tenang saat mendengar suara yang dikenal",
      "Tertawa keras tanpa digelitik",
    ],
    aspects: [
      { title: "Respons suara", description: "Tenang atau menoleh saat mendengar suara." },
      { title: "Kontak mata", description: "Menatap wajah orang tua saat diajak bicara." },
      { title: "Ocehan awal", description: 'Mengeluarkan suara "aah", "ooh", atau "ba".' },
      { title: "Senyum sosial", description: "Tersenyum saat melihat wajah yang dikenal." },
      { title: "Tertawa", description: "Tertawa keras walau tidak digelitik." },
      { title: "Ikatan emosional", description: "Tenang saat digendong dan diajak berbicara." },
    ],
    activities: [
      "Ajak bicara dengan suara lembut",
      "Tirukan suara Si Kecil",
      "Nyanyikan lagu pengantar tidur",
      "Tatap mata saat menyusui",
      "Berikan sentuhan dan pelukan hangat",
    ],
    warnings: [
      "Tidak merespons suara sama sekali",
      "Tidak menatap wajah",
      "Belum bersuara selain menangis",
      "Tidak tersenyum saat diajak bicara",
    ],
  },
  "3-6": {
    intro:
      "Pada usia 3–6 bulan, Si Kecil mulai memekik gembira, menoleh ke arah suara, dan menikmati permainan suara bersama orang tua.",
    stages: [
      "Memekik atau bersuara gembira bernada tinggi",
      "Menoleh ke arah sumber suara",
      "Mengoceh dengan berbagai bunyi",
      "Tertawa saat diajak bermain",
      "Menirukan ekspresi wajah",
    ],
    aspects: fallbackAspects,
    activities: [
      "Ajak bicara dengan nada ceria",
      "Tirukan ocehan Si Kecil",
      "Gunakan mainan berbunyi",
      "Bacakan buku bergambar warna cerah",
      "Bermain ciluk-ba",
    ],
    warnings: [
      "Tidak menoleh ke arah suara",
      "Belum mengoceh",
      "Tidak tertawa atau memekik",
      "Kurang tertarik pada wajah orang",
    ],
  },
  "6-9": {
    intro:
      "Pada usia 6–9 bulan, Si Kecil mulai mengoceh dengan suku kata berulang dan merespons saat namanya dipanggil.",
    stages: [
      'Mengoceh "ba-ba", "ma-ma", "da-da"',
      "Menoleh saat namanya dipanggil",
      "Bereaksi terhadap suara pelan atau bisikan",
      "Tertarik pada benda yang ditunjuk",
      "Menikmati permainan bersama",
    ],
    aspects: fallbackAspects,
    activities: [
      "Panggil nama Si Kecil dari berbagai arah",
      "Tirukan ocehan bayi",
      "Sebutkan nama benda di sekitar",
      "Bacakan buku bergambar",
      "Bernyanyi dan bermain boneka",
    ],
    warnings: [
      "Tidak merespons suara",
      "Tidak menoleh saat dipanggil",
      "Belum mengoceh sama sekali",
      "Tidak tertarik berinteraksi",
    ],
  },
  "9-12": {
    intro:
      "Pada usia 9–12 bulan, Si Kecil mulai meniru bunyi yang didengar, mengucapkan suku kata berulang, merespons nama, dan memahami kata sederhana.",
    stages: [
      "Mengulang / menirukan bunyi yang didengar",
      "Menyebut 2–3 suku kata yang sama tanpa arti",
      "Bereaksi terhadap suara perlahan atau bisikan",
      'Mulai memahami kata sederhana seperti "tidak", "dadah", "mama"',
      'Mulai memanggil "mama" atau "dada"',
      "Menunjuk, meraih, atau tertarik pada benda di sekitarnya",
    ],
    aspects: fallbackAspects,
    activities: [
      "Ajak bicara setiap hari",
      "Tirukan ocehan bayi",
      "Sebutkan nama benda di sekitar",
      "Bacakan buku bergambar",
      "Bernyanyi dan bermain boneka",
    ],
    warnings: [
      "Tidak merespons suara",
      "Tidak menoleh saat dipanggil",
      "Belum mengoceh sama sekali",
      "Tidak tertarik berinteraksi",
    ],
  },
  "12-18": {
    intro:
      "Pada usia 12–18 bulan, Si Kecil mulai mengucapkan kata bermakna, menunjuk apa yang diinginkan, dan memahami instruksi sederhana.",
    stages: [
      'Mengucapkan "mama" dan "papa" dengan arti',
      "Mengucapkan 3 kata bermakna atau lebih",
      "Menunjuk benda yang diinginkan",
      "Memahami instruksi sederhana satu langkah",
      "Menirukan kata yang didengar",
    ],
    aspects: [
      { title: "Kata bermakna", description: "Mengucapkan kata dengan arti yang jelas." },
      { title: "Menunjuk", description: "Menunjuk benda atau gambar yang diinginkan." },
      { title: "Paham instruksi", description: "Mengikuti perintah sederhana satu langkah." },
      { title: "Meniru kata", description: "Menirukan kata yang baru didengar." },
      { title: "Kosakata bertambah", description: "Jumlah kata yang dikuasai terus bertambah." },
      { title: "Interaksi sosial", description: "Menikmati bermain bersama orang lain." },
    ],
    activities: [
      "Sebutkan nama benda sambil menunjuk",
      "Beri instruksi sederhana satu langkah",
      "Bacakan buku bergambar setiap hari",
      "Bernyanyi bersama",
      "Puji setiap usaha berbicara",
    ],
    warnings: [
      "Usia 18 bulan belum mengucap kata bermakna",
      "Tidak menunjuk benda yang diinginkan",
      "Sulit memahami instruksi sederhana",
      "Minim kontak mata & respons",
    ],
  },
  "18-24": {
    intro:
      "Pada usia 18–24 bulan, Si Kecil mulai menggabungkan dua kata dan menunjuk bagian tubuh dengan benar.",
    stages: [
      "Mengucapkan minimal 3 kata bermakna",
      "Menunjuk bagian tubuh dengan benar",
      'Menggabungkan 2 kata seperti "mau susu"',
      "Mengikuti perintah sederhana",
      "Menyebut nama benda yang dikenal",
    ],
    aspects: [
      { title: "Dua kata berangkai", description: "Menggabungkan dua kata saat berbicara." },
      { title: "Menunjuk bagian tubuh", description: "Menunjuk bagian tubuh tanpa bantuan." },
      { title: "Kosakata", description: "Menguasai semakin banyak kata bermakna." },
      { title: "Paham instruksi", description: "Mengikuti perintah sederhana." },
      { title: "Menyebut gambar", description: "Menyebut nama gambar yang diperlihatkan." },
      { title: "Interaksi sosial", description: "Bermain dan berbicara dengan orang lain." },
    ],
    activities: [
      "Perluas kata anak menjadi kalimat pendek",
      "Ajukan pertanyaan sederhana dan tunggu jawaban",
      "Minta anak menunjuk bagian tubuh",
      "Bacakan buku cerita pendek",
      "Batasi screen time, perbanyak bermain",
    ],
    warnings: [
      "Usia 2 tahun tidak menggabungkan 2 kata",
      "Belum bisa menunjuk bagian tubuh",
      "Sulit memahami instruksi sederhana",
      "Kosakata sangat terbatas",
    ],
  },
  "24-36": {
    intro:
      "Pada usia 24–36 bulan, Si Kecil mulai berbicara dengan kalimat, bercerita, dan mengikuti perintah bertahap.",
    stages: [
      "Berbicara dengan kalimat 2–3 kata",
      "Menyebut nama gambar tanpa bantuan",
      "Mengikuti 3 perintah sederhana berurutan",
      "Bertanya dengan kata tanya sederhana",
      "Menceritakan kegiatan yang baru dilakukan",
    ],
    aspects: [
      { title: "Kalimat lengkap", description: "Berbicara dengan kalimat 2–3 kata atau lebih." },
      { title: "Menyebut gambar", description: "Menyebut nama gambar tanpa bantuan." },
      { title: "Perintah bertahap", description: "Mengikuti 3 perintah sederhana berurutan." },
      { title: "Bertanya", description: "Menggunakan kata tanya seperti apa dan siapa." },
      { title: "Bercerita", description: "Menceritakan kegiatan yang baru dilakukan." },
      { title: "Interaksi sosial", description: "Bermain dan bercakap-cakap dengan teman." },
    ],
    activities: [
      "Ajak berbicara dengan kalimat lengkap",
      "Gunakan pertanyaan terbuka",
      "Bacakan buku cerita dan minta anak menceritakan ulang",
      "Beri instruksi 2–3 langkah",
      "Ajak bermain peran",
    ],
    warnings: [
      "Belum berbicara dengan 2 kata berangkai",
      "Sulit dipahami orang lain",
      "Tidak mengikuti perintah sederhana",
      "Tidak tertarik bermain dengan anak lain",
    ],
  },
};