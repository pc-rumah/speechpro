export type EvaluationAspect = {
  id: string;
  title: string;
  description: string;
};

export const evaluationAspects: EvaluationAspect[] = [
  {
    id: "suku-kata",
    title: "Mengucapkan suku kata berulang",
    description: "Mulai mengoceh seperti ma-ma, ba-ba, da-da.",
  },
  {
    id: "respons-nama",
    title: "Merespons nama",
    description: "Menoleh atau bereaksi saat namanya dipanggil.",
  },
  {
    id: "paham-kata",
    title: "Memahami kata sederhana",
    description: "Mulai memahami kata seperti 'tidak', 'dadah', atau 'mama'.",
  },
  {
    id: "menunjuk",
    title: "Menunjuk / meraih benda",
    description: "Menunjuk, meraih, atau tertarik pada benda yang diperlihatkan.",
  },
  {
    id: "meniru-suara",
    title: "Meniru suara",
    description: "Menirukan bunyi sederhana dari orang tua.",
  },
  {
    id: "respons-bicara",
    title: "Merespons saat diajak bicara",
    description: "Tersenyum, menatap, atau bersuara saat diajak bicara.",
  },
];

export const scoreBands = [
  { label: "Sangat Baik", range: "80–100%", min: 80, color: "var(--success)" },
  { label: "Baik", range: "60–79%", min: 60, color: "var(--primary)" },
  { label: "Cukup", range: "40–59%", min: 40, color: "var(--warning)" },
  { label: "Perlu Perhatian", range: "<40%", min: 0, color: "var(--destructive)" },
];

export function bandForScore(score: number) {
  return scoreBands.find((b) => score >= b.min) ?? scoreBands[scoreBands.length - 1];
}

export function ratingLabel(stars: number): string {
  if (stars >= 5) return "Konsisten";
  if (stars >= 4) return "Sering muncul";
  if (stars >= 3) return "Mulai muncul";
  if (stars >= 2) return "Jarang muncul";
  return "Belum muncul";
}

export const weeklyRecommendations = [
  "Ajak anak berbicara setiap hari",
  "Panggil nama anak dengan jelas",
  "Gunakan kata sederhana seperti mama, papa, dadah",
  "Tirukan ocehan anak",
  "Perlihatkan benda sambil menyebut namanya",
  "Berikan pujian dan senyuman",
];