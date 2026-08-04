import { createFileRoute } from "@tanstack/react-router";
import { AppShell, BottomNav, Card, PageHeader, PrintButton } from "@/components/AppShell";
import { bandForScore, weeklyRecommendations } from "@/data/evaluasi";
import { useSpeechPro, weeklySummary, formatDate } from "@/lib/store";

export const Route = createFileRoute("/evaluasi")({
  head: () => ({
    meta: [
      { title: "Evaluasi Mingguan — SpeechPro" },
      {
        name: "description",
        content:
          "Ringkasan mingguan stimulasi bahasa anak: hari aktif, durasi, kata baru, respons, skor, dan rekomendasi minggu depan.",
      },
      { property: "og:title", content: "Evaluasi Mingguan — SpeechPro" },
      {
        property: "og:description",
        content: "Skor dan ringkasan stimulasi bahasa anak selama satu minggu.",
      },
      { property: "og:url", content: "/evaluasi" },
    ],
    links: [{ rel: "canonical", href: "/evaluasi" }],
  }),
  component: EvaluasiPage,
});

function EvaluasiPage() {
  const { state } = useSpeechPro();
  const s = weeklySummary(state);
  const band = bandForScore(s.score);
  const delta = s.score - s.previousScore;

  return (
    <AppShell>
      <PageHeader title="Evaluasi Mingguan" subtitle="Ringkasan minggu ini (Senin–Minggu)" />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        <Card>
          <p className="text-xs font-bold text-muted-foreground uppercase">Skor Minggu Ini</p>
          <p className="mt-1 text-4xl font-extrabold text-primary">{s.score}%</p>
          <p className="mt-1 text-sm font-extrabold" style={{ color: band?.color }}>
            {band?.label}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {delta === 0
              ? "Sama dengan minggu lalu"
              : `${delta > 0 ? "Naik" : "Turun"} ${Math.abs(delta)}% dari minggu lalu`}
          </p>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
            <div className="brand-gradient h-full rounded-full" style={{ width: `${s.score}%` }} />
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card>
            <p className="text-xs text-muted-foreground">Hari aktif</p>
            <p className="mt-1 text-lg font-extrabold text-secondary-foreground">
              {s.activeDays}/7
            </p>
          </Card>
          <Card>
            <p className="text-xs text-muted-foreground">Konsistensi</p>
            <p className="mt-1 text-lg font-extrabold text-secondary-foreground">
              {s.consistency}%
            </p>
          </Card>
          <Card>
            <p className="text-xs text-muted-foreground">Durasi</p>
            <p className="mt-1 text-sm font-extrabold text-secondary-foreground">
              {s.minutesRange}
            </p>
          </Card>
          <Card>
            <p className="text-xs text-muted-foreground">Kata baru</p>
            <p className="mt-1 text-lg font-extrabold text-secondary-foreground">{s.newWords}</p>
          </Card>
        </div>

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Catatan Minggu Ini</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Respons anak secara umum: {s.responseLabel}
          </p>
          {s.logs.length === 0 ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Belum ada catatan minggu ini. Mulai dari menu Hari Ini.
            </p>
          ) : (
            <ul className="mt-3 flex flex-col gap-2">
              {s.logs.map((l) => (
                <li
                  key={l.date}
                  className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 rounded-3xl bg-secondary p-3"
                >
                  <span className="truncate text-xs font-extrabold text-secondary-foreground">
                    {formatDate(l.date)}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {l.minutes} mnt · {l.response}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card className="bg-tile-mint">
          <h2 className="text-base font-extrabold text-tile-mint-foreground">
            Rekomendasi Minggu Depan
          </h2>
          <ul className="mt-2 flex flex-col gap-2">
            {weeklyRecommendations.map((r) => (
              <li key={r} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span>✅</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Card>

        <PrintButton label="Cetak Evaluasi" />
      </main>

      <BottomNav />
    </AppShell>
  );
}