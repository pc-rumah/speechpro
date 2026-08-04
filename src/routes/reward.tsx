import { createFileRoute } from "@tanstack/react-router";
import { AppShell, BottomNav, Card, PageHeader } from "@/components/AppShell";
import trophy from "@/assets/trophy.png";
import { badges, dayLabels, rewardGoal } from "@/data/reward";
import {
  computePoints,
  computeStreak,
  unlockedBadgeIds,
  useSpeechPro,
  weekDates,
} from "@/lib/store";

export const Route = createFileRoute("/reward")({
  head: () => ({
    meta: [
      { title: "Reward & Pencapaian — SpeechPro" },
      {
        name: "description",
        content:
          "Kumpulkan poin, jaga streak harian, dan buka badge pencapaian sebagai motivasi rutin menstimulasi bahasa anak.",
      },
      { property: "og:title", content: "Reward & Pencapaian — SpeechPro" },
      {
        property: "og:description",
        content: "Poin, streak harian, dan badge pencapaian orang tua di SpeechPro.",
      },
      { property: "og:url", content: "/reward" },
    ],
    links: [{ rel: "canonical", href: "/reward" }],
  }),
  component: RewardPage,
});

function RewardPage() {
  const { state } = useSpeechPro();
  const points = computePoints(state);
  const streak = computeStreak(state.logs);
  const unlocked = unlockedBadgeIds(points, streak, badges);
  const week = weekDates();
  const done = new Set(state.logs.map((l) => l.date));
  const progress = Math.min(100, Math.round((points / rewardGoal) * 100));

  return (
    <AppShell>
      <PageHeader
        title="Reward"
        subtitle="Motivasi untuk terus konsisten"
        illustration={<img src={trophy} alt="" className="w-full" />}
      />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        <Card>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-3xl bg-tile-cream p-3">
              <p className="text-2xl font-extrabold text-tile-cream-foreground">{points}</p>
              <p className="text-xs text-foreground">Total poin</p>
            </div>
            <div className="rounded-3xl bg-tile-peach p-3">
              <p className="text-2xl font-extrabold text-tile-peach-foreground">{streak}</p>
              <p className="text-xs text-foreground">Hari berturut-turut</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {points} / {rewardGoal} poin menuju level berikutnya
          </p>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
            <div className="brand-gradient h-full rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </Card>

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Minggu Ini</h2>
          <ul className="mt-3 grid grid-cols-7 gap-1.5 text-center">
            {week.map((date, i) => (
              <li key={date}>
                <span
                  className={`grid aspect-square place-items-center rounded-2xl text-sm font-extrabold ${
                    done.has(date)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {done.has(date) ? "★" : "·"}
                </span>
                <span className="mt-1 block text-[0.6rem] text-muted-foreground">
                  {dayLabels[i]}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Badge Pencapaian</h2>
          <ul className="mt-3 grid grid-cols-2 gap-3">
            {badges.map((b) => {
              const isOpen = unlocked.includes(b.id);
              return (
                <li
                  key={b.id}
                  className={`rounded-3xl p-3 text-center ${
                    isOpen ? "bg-tile-mint" : "bg-secondary opacity-70"
                  }`}
                >
                  <p className="text-2xl">{isOpen ? b.emoji : "🔒"}</p>
                  <p className="mt-1 text-xs font-extrabold text-secondary-foreground">{b.name}</p>
                  <p className="text-[0.65rem] text-muted-foreground">{b.requirement}</p>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card className="bg-tile-sky">
          <p className="text-xs leading-relaxed text-foreground">
            Poin bertambah 10 setiap catatan harian tersimpan dan 20 setiap skrining selesai.
          </p>
        </Card>
      </main>

      <BottomNav />
    </AppShell>
  );
}