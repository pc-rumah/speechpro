import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, BottomNav, Card, PageHeader } from "@/components/AppShell";
import { todayKey, useSpeechPro, type DailyLog } from "@/lib/store";

export const Route = createFileRoute("/catatan")({
  head: () => ({
    meta: [
      { title: "Catatan Perkembangan Harian — SpeechPro" },
      {
        name: "description",
        content:
          "Catat durasi stimulasi, kata baru, dan respons anak setiap hari untuk memantau perkembangan bahasanya.",
      },
      { property: "og:title", content: "Catatan Perkembangan Harian — SpeechPro" },
      {
        property: "og:description",
        content: "Formulir catatan stimulasi harian anak: durasi, kata baru, dan respons.",
      },
      { property: "og:url", content: "/catatan" },
    ],
    links: [{ rel: "canonical", href: "/catatan" }],
  }),
  component: CatatanPage,
});

const responses: DailyLog["response"][] = ["Kurang", "Cukup", "Baik", "Sangat Baik"];

function CatatanPage() {
  const { state, saveLog } = useSpeechPro();
  const today = todayKey();
  const existing = state.logs.find((l) => l.date === today);
  const [minutes, setMinutes] = useState(existing?.minutes ?? 15);
  const [newWords, setNewWords] = useState(existing?.newWords ?? 0);
  const [response, setResponse] = useState<DailyLog["response"]>(existing?.response ?? "Baik");
  const [note, setNote] = useState(existing?.note ?? "");
  const [saved, setSaved] = useState(false);

  return (
    <AppShell>
      <PageHeader title="Catatan Hari Ini" subtitle="Isi setelah stimulasi bersama Si Kecil" />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        <Card>
          <label className="text-sm font-extrabold text-secondary-foreground" htmlFor="minutes">
            Durasi stimulasi (menit)
          </label>
          <input
            id="minutes"
            type="number"
            min={0}
            max={240}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="mt-2 w-full rounded-2xl bg-secondary px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-ring"
          />

          <label
            className="mt-4 block text-sm font-extrabold text-secondary-foreground"
            htmlFor="words"
          >
            Jumlah kata / bunyi baru
          </label>
          <input
            id="words"
            type="number"
            min={0}
            max={100}
            value={newWords}
            onChange={(e) => setNewWords(Number(e.target.value))}
            className="mt-2 w-full rounded-2xl bg-secondary px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-ring"
          />

          <p className="mt-4 text-sm font-extrabold text-secondary-foreground">Respons anak</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {responses.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setResponse(r)}
                className={`rounded-full py-2 text-xs font-extrabold transition-colors ${
                  response === r ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <label
            className="mt-4 block text-sm font-extrabold text-secondary-foreground"
            htmlFor="note"
          >
            Catatan orang tua
          </label>
          <textarea
            id="note"
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Contoh: hari ini Si Kecil menirukan kata 'mama'."
            className="mt-2 w-full rounded-2xl bg-secondary px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />

          <button
            type="button"
            onClick={() => {
              saveLog({ date: today, minutes, newWords, response, note });
              setSaved(true);
            }}
            className="brand-gradient mt-4 w-full rounded-full py-3 text-sm font-extrabold text-primary-foreground"
          >
            Simpan Catatan (+10 poin)
          </button>
          {saved ? (
            <p className="mt-2 text-center text-xs font-bold text-success">
              Catatan hari ini tersimpan 🎉
            </p>
          ) : null}
        </Card>

        <Card className="bg-tile-sky">
          <h2 className="text-sm font-extrabold text-tile-sky-foreground">Ingat ya</h2>
          <p className="mt-1 text-xs leading-relaxed text-foreground">
            Stimulasi 10–15 menit setiap hari lebih efektif daripada sesi panjang sekali seminggu.
          </p>
        </Card>
      </main>

      <BottomNav />
    </AppShell>
  );
}