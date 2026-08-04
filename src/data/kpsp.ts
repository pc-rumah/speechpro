export type KpspQuestion = {
  id: string;
  text: string;
  note?: string;
};

export type KpspStage = {
  age: number;
  label: string;
  questions: KpspQuestion[];
  tips: string[];
};

/** Pertanyaan skrining bahasa berdasarkan KPSP & Stimulasi Kemenkes RI (0–36 bulan). */
export const kpspStages: KpspStage[] = [
  {
    age: 3,
    label: "Usia 3 Bulan",
    questions: [
      {
        id: "3-1",
        text: 'Apakah bayi dapat mengeluarkan suara-suara lain (ngoceh) selain menangis, misalnya "aah", "ooh", atau "ba"?',
      },
      {
        id: "3-2",
        text: "Apakah bayi suka tertawa keras walau tidak digelitik atau diraba-raba?",
      },
    ],
    tips: [
      "Ajak bayi berbicara dan tirukan suara yang dikeluarkannya. Hal ini dapat membantu perkembangan bahasa.",
    ],
  },
  {
    age: 6,
    label: "Usia 6 Bulan",
    questions: [
      {
        id: "6-1",
        text: "Pernahkah bayi mengeluarkan suara gembira bernada tinggi atau memekik tetapi bukan menangis?",
      },
    ],
    tips: [
      "Ajak bayi berbicara dengan nada ceria dan tirukan suara yang dikeluarkannya agar kemampuan komunikasi berkembang.",
    ],
  },
  {
    age: 9,
    label: "Usia 9 Bulan",
    questions: [
      {
        id: "9-1",
        text: "Saat bayi bermain sendiri dan Anda datang diam-diam dari belakang, apakah bayi menengok ke arah suara pelan atau bisikan Anda?",
        note: "Catatan: suara keras tidak dihitung.",
      },
    ],
    tips: [
      "Panggil nama bayi dari berbagai arah dengan suara pelan untuk melatih kemampuan mendengar dan memperhatikan suara.",
    ],
  },
  {
    age: 12,
    label: "Usia 12 Bulan",
    questions: [
      {
        id: "12-1",
        text: "Sebutkan 2-3 kata sederhana kepada anak. Apakah anak mencoba menirukan kata-kata tersebut?",
      },
      {
        id: "12-2",
        text: 'Apakah anak dapat mengucapkan dua suku kata yang sama, misalnya "ma-ma", "da-da", atau "pa-pa"?',
      },
    ],
    tips: [
      'Ulangi kata-kata sederhana setiap hari seperti "mama", "papa", "bola", dan "susu".',
    ],
  },
  {
    age: 15,
    label: "Usia 15 Bulan",
    questions: [
      {
        id: "15-1",
        text: 'Apakah anak mengatakan "mama" saat memanggil ibunya atau "papa" saat memanggil ayahnya?',
      },
    ],
    tips: ["Sebutkan nama anggota keluarga secara berulang saat berinteraksi dengan anak."],
  },
  {
    age: 18,
    label: "Usia 18 Bulan",
    questions: [
      {
        id: "18-1",
        text: 'Apakah anak dapat mengucapkan dua suku kata yang sama, misalnya "ma-ma", "da-da", atau "pa-pa"?',
      },
    ],
    tips: [
      "Dorong anak untuk menirukan kata yang diucapkan dan beri pujian saat anak mencoba mengucapkannya.",
    ],
  },
  {
    age: 21,
    label: "Usia 21 Bulan",
    questions: [
      {
        id: "21-1",
        text: "Apakah anak dapat mengucapkan minimal 3 kata yang mempunyai arti (selain kata mama dan papa)?",
      },
    ],
    tips: [
      "Ucapkan kata-kata sederhana secara berulang setiap hari dan beri kesempatan anak untuk menirukannya.",
    ],
  },
  {
    age: 24,
    label: "Usia 24 Bulan",
    questions: [
      {
        id: "24-1",
        text: "Tanpa bantuan, dapatkah anak menunjuk dengan benar paling sedikit satu bagian tubuhnya (rambut, mata, hidung, mulut, atau bagian tubuh lainnya)?",
      },
      {
        id: "24-2",
        text: "Apakah anak dapat mengucapkan minimal 3 kata yang mempunyai arti (selain kata mama dan papa)?",
      },
      {
        id: "24-3",
        text: "Dapatkah anak membantu memungut mainannya sendiri atau membantu mengangkat piring jika diminta?",
      },
    ],
    tips: [
      "Ajak anak bermain sambil menyebutkan bagian tubuh, mengucapkan kata baru, dan beri kesempatan anak untuk membantu aktivitas sehari-hari.",
    ],
  },
  {
    age: 30,
    label: "Usia 30 Bulan",
    questions: [
      {
        id: "30-1",
        text: "Tanpa bantuan, dapatkah anak menunjuk dengan benar paling sedikit satu bagian tubuhnya (rambut, mata, hidung, mulut, atau bagian tubuh lainnya)?",
      },
      {
        id: "30-2",
        text: "Apakah anak dapat menyebut 2 gambar yang diperlihatkan tanpa bantuan?",
      },
      {
        id: "30-3",
        text: "Dapatkah anak membantu memungut mainannya sendiri atau membantu mengangkat piring jika diminta?",
      },
      {
        id: "30-4",
        text: 'Dapatkah anak menggunakan 2 kata saat berbicara seperti "minta minum" atau "mau tidur"?',
      },
    ],
    tips: [
      "Ajak anak berbicara setiap hari dan berikan kesempatan untuk menjawab atau menceritakan hal-hal di sekitarnya.",
    ],
  },
  {
    age: 36,
    label: "Usia 36 Bulan",
    questions: [
      {
        id: "36-1",
        text: "Apakah anak dapat menyebut 2 gambar yang diperlihatkan tanpa bantuan?",
      },
      {
        id: "36-2",
        text: 'Dapatkah anak menggunakan 2 kata berangkai saat berbicara seperti "minta minum" atau "mau tidur"?',
      },
      {
        id: "36-3",
        text: "Apakah anak dapat mengikuti 3 perintah sederhana secara berurutan?",
        note: "1) Letakkan kertas di lantai, 2) Letakkan kertas di kursi, 3) Berikan kertas kepada ibu.",
      },
    ],
    tips: [
      "Ajak anak berbicara menggunakan kalimat lengkap.",
      "Bacakan buku cerita setiap hari.",
      "Berikan instruksi sederhana 2–3 langkah dan minta anak melaksanakannya sendiri.",
    ],
  },
];

export type ScreeningVerdict = {
  title: string;
  tone: "success" | "warning" | "destructive";
  description: string;
};

export function verdictFor(yes: number, total: number): ScreeningVerdict {
  const ratio = total === 0 ? 0 : yes / total;
  if (ratio === 1) {
    return {
      title: "Sesuai Tahap Perkembangan",
      tone: "success",
      description:
        "Perkembangan bahasa anak sesuai dengan tahap usianya. Lanjutkan stimulasi bahasa setiap hari.",
    };
  }
  if (ratio >= 0.5) {
    return {
      title: "Meragukan, Perlu Stimulasi",
      tone: "warning",
      description:
        "Ada kemampuan yang belum muncul. Tingkatkan stimulasi bahasa 10–15 menit setiap hari, lalu ulangi skrining 2 minggu kemudian.",
    };
  }
  return {
    title: "Perlu Perhatian Khusus",
    tone: "destructive",
    description:
      "Sebagian besar kemampuan belum muncul. Tingkatkan stimulasi setiap hari dan konsultasikan dengan tenaga kesehatan atau profesional terdekat.",
  };
}