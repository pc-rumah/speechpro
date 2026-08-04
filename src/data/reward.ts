export type Badge = {
  id: string;
  name: string;
  requirement: string;
  emoji: string;
  /** Minimal poin atau streak untuk membuka badge. */
  minPoints?: number;
  minStreak?: number;
  comingSoon?: boolean;
};

export const badges: Badge[] = [
  { id: "pemula", name: "Pemula Hebat", requirement: "10 poin", emoji: "💬", minPoints: 10 },
  { id: "rutin", name: "Stimulasi Rutin", requirement: "7 hari berturut-turut", emoji: "⭐", minStreak: 7 },
  { id: "belajar", name: "Belajar Setiap Hari", requirement: "14 hari berturut-turut", emoji: "📖", minStreak: 14 },
  { id: "hebat", name: "Orang Tua Hebat", requirement: "30 hari berturut-turut", emoji: "👑", minStreak: 30 },
  { id: "konsisten", name: "Konsisten Luar Biasa", requirement: "Segera hadir", emoji: "🔒", comingSoon: true },
];

export const dayLabels = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export const rewardGoal = 500;

export const messages = [
  {
    id: "m1",
    title: "Pengingat Hari Ini",
    body: "Yuk, lakukan stimulasi bahasa bersama anak minimal 10–15 menit hari ini.",
    tone: "violet" as const,
  },
  {
    id: "m2",
    title: "Tips Minggu Ini",
    body: "Tirukan ocehan Si Kecil agar terjadi komunikasi dua arah, lalu beri pujian saat ia mencoba meniru.",
    tone: "cream" as const,
  },
  {
    id: "m3",
    title: "Jangan Lupa Skrining",
    body: "Lakukan skrining bahasa berdasarkan KPSP setiap kali Si Kecil memasuki tahap usia baru.",
    tone: "mint" as const,
  },
  {
    id: "m4",
    title: "Catat Perkembangan",
    body: "Tuliskan kata baru yang diucapkan Si Kecil hari ini di Catatan Perkembangan.",
    tone: "sky" as const,
  },
];