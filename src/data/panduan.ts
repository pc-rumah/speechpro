export type GuideTopic = {
  id: string;
  title: string;
  intro: string;
  sections: { heading: string; items: string[] }[];
};

export const guideTopics: GuideTopic[] = [
  {
    id: "speech-delay",
    title: "Memahami Speech Delay",
    intro:
      "Speech delay adalah kondisi ketika anak belum mencapai kemampuan bicara dan bahasa sesuai usianya.",
    sections: [
      {
        heading: "Tanda yang Perlu Diwaspadai",
        items: [
          "Usia 18 bulan belum mengucap kata bermakna",
          "Usia 2 tahun tidak menggabungkan 2 kata",
          "Sulit memahami instruksi sederhana",
          "Minim kontak mata & respons",
        ],
      },
      {
        heading: "Yang Bisa Dilakukan",
        items: [
          "Ajak bicara setiap hari",
          "Bacakan buku bersama",
          "Batasi screen time",
          "Konsultasi ke profesional bila perlu",
        ],
      },
    ],
  },
  {
    id: "pola-asuh",
    title: "Pola Asuh Suportif",
    intro:
      "Pola asuh suportif menciptakan lingkungan yang aman, hangat, dan mendorong anak untuk tumbuh percaya diri.",
    sections: [
      {
        heading: "Prinsip Pola Asuh Suportif",
        items: [
          "Responsif: peka terhadap kebutuhan anak",
          "Hangat: tunjukkan cinta & kasih sayang",
          "Konsisten: aturan jelas & konsisten",
          "Dorong kemandirian: beri kesempatan anak mencoba",
          "Puji usaha: fokus pada proses, bukan hasil",
        ],
      },
      {
        heading: "Tips",
        items: [
          "Dengarkan anak, validasi perasaan mereka, dan berikan dukungan saat mereka berusaha.",
        ],
      },
    ],
  },
  {
    id: "screen-time",
    title: "Pembatasan Screen Time",
    intro:
      "Screen time berlebihan dapat memengaruhi perkembangan bahasa, fokus, tidur, dan kesehatan mental anak.",
    sections: [
      {
        heading: "Rekomendasi Screen Time",
        items: [
          "Usia 0–18 bulan: hindari screen time (kecuali video call).",
          "Usia 18–24 bulan: maks. 1 jam/hari dengan konten berkualitas dan dampingan orang tua.",
          "Usia 2–5 tahun: maks. 1 jam/hari.",
        ],
      },
      {
        heading: "Tips Membatasi Screen Time",
        items: [
          "Buat aturan & jadwal yang konsisten",
          "Pilih konten edukatif & sesuai usia",
          "Ganti dengan aktivitas fisik & interaksi keluarga",
        ],
      },
    ],
  },
];

export const guideWhyItMatters = [
  "Deteksi dini membantu intervensi lebih efektif.",
  "Pola asuh suportif membangun kepercayaan diri dan kecerdasan emosional.",
  "Pembatasan screen time melindungi perkembangan otak dan kesehatan anak.",
];

export const positiveActivities = [
  {
    title: "Bermain & Bergerak",
    description: "Aktivitas fisik mendukung perkembangan motorik & otak.",
  },
  {
    title: "Membaca & Bercerita",
    description: "Luangkan waktu membaca buku setiap hari.",
  },
  {
    title: "Bernyanyi & Berbicara",
    description: "Nyanyikan lagu, ajak berbicara, dan dengarkan respons anak.",
  },
  {
    title: "Bermain Peran",
    description: "Main peran sederhana untuk melatih imajinasi & bahasa.",
  },
  {
    title: "Aktivitas Kreatif",
    description: "Menggambar, mewarnai, atau bermain plastisin.",
  },
];

export const guideCautions = [
  "Setiap anak unik. Bandingkan dengan perkembangan sebelumnya, bukan dengan anak lain.",
  "Jika ada kekhawatiran, jangan ragu berkonsultasi dengan tenaga profesional.",
  "Ciptakan rutinitas harian yang seimbang: makan, tidur, bermain, belajar.",
  "Batasi screen time, tetapi tingkatkan quality time bersama anak.",
];