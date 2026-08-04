import { createFileRoute } from "@tanstack/react-router";
import { AppShell, BottomNav, Card, PageHeader } from "@/components/AppShell";
import { formatDate, useSpeechPro } from "@/lib/store";

export const Route = createFileRoute("/riwayat")({
  head: () => ({
    meta: [
      { title: "Riwayat Stimulasi & Skrining — SpeechPro" },
      {
        name: "description",
        content:
          "Lihat riwayat catatan stimulasi harian dan hasil skrining bahasa anak yang sudah pernah diisi.",
      },
      { property: "og:title", content: "Riwayat Stimulasi & Skrining — SpeechPro" },
      {
        property: "og:description",
        content: "Riwayat catatan harian dan hasil skrining bahasa anak.",
      },
      { property: "og:url", content: "/riwayat" },
    ],
    links: [{ rel: "canonical", href: "/riwayat" }],
  }),
  component: RiwayatPage,
});

function RiwayatPage() {
  const { state } = useSpeechPro();

  return (
    <AppShell>
      <PageHeader title="Riwayat" subtitle="Catatan harian & hasil skrining" />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Catatan Harian</h2>
          {state.logs.length === 0 ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Belum ada catatan. Mulai dari menu Hari Ini.
            </p>
          ) : (
            <ul className="mt-3 flex flex-col gap-2">
              {state.logs.map((l) => (
                <li key={l.date} className="rounded-3xl bg-secondary p-3">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
                    <p className="truncate text-sm font-extrabold text-secondary-foreground">
                      {formatDate(l.date)}
                    </p>
                    <span className="shrink-0 rounded-full bg-card px-2 py-0.5 text-[0.65rem] font-extrabold text-primary">
                      {l.response}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {l.minutes} menit · {l.newWords} kata baru
                  </p>
                  {l.note ? <p className="mt-1 text-xs text-foreground">{l.note}</p> : null}
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Hasil Skrining</h2>
          {state.screenings.length === 0 ? (
            <p className="mt-2 text-xs text-muted-foreground">Belum ada skrining yang diisi.</p>
          ) : (
            <ul className="mt-3 flex flex-col gap-2">
              {state.screenings.map((s) => (
                <li
                  key={s.id}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-3xl bg-secondary p-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold text-secondary-foreground">
                      Usia {s.age} bulan
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(s.date)} · {s.yes}/{s.total} jawaban Ya
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-card px-2 py-1 text-[0.65rem] font-extrabold text-primary">
                    {s.verdict}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </main>

      <BottomNav />
    </AppShell>
  );
}