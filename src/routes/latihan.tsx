import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, BottomNav, Card, PageHeader, PrintButton } from "@/components/AppShell";
import { ageBands, bandLabel, type AgeBandId } from "@/data/ages";
import { latihanSheets } from "@/data/latihan";
import { ageInMonths, bandForMonths, useSpeechPro } from "@/lib/store";

export const Route = createFileRoute("/latihan")({
  head: () => ({
    meta: [
      { title: "Latihan Kata Harian — SpeechPro" },
      {
        name: "description",
        content:
          "Daftar kata harian dan cara melatihnya sesuai tahap usia anak 0–36 bulan, lengkap dengan tips stimulasi dan manfaatnya.",
      },
      { property: "og:title", content: "Latihan Kata Harian — SpeechPro" },
      {
        property: "og:description",
        content: "Kosakata harian per tahap usia beserta cara melatih dan manfaatnya.",
      },
      { property: "og:url", content: "/latihan" },
    ],
    links: [{ rel: "canonical", href: "/latihan" }],
  }),
  component: LatihanPage,
});

function LatihanPage() {
  const { state } = useSpeechPro();
  const months = ageInMonths(state.profile.birthDate);
  const [band, setBand] = useState<AgeBandId>(bandForMonths(months));
  const sheet = latihanSheets[band];

  return (
    <AppShell>
      <PageHeader title="Latihan Kata Harian" subtitle={`Tahap ${bandLabel(band)}`} />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        <div className="no-print -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {ageBands.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBand(b.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-extrabold transition-colors ${
                b.id === band ? "bg-primary text-primary-foreground" : "bg-card text-primary"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        <Card>
          <p className="text-xs leading-relaxed text-muted-foreground">{sheet.intro}</p>
        </Card>

        {sheet.categories.map((cat) => (
          <Card key={cat.title}>
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary-soft text-xl">
                {cat.emoji}
              </span>
              <h2 className="min-w-0 text-base font-extrabold text-secondary-foreground">
                {cat.title}
              </h2>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {cat.words.map((w) => (
                <li
                  key={w}
                  className="rounded-full bg-tile-violet px-3 py-1.5 text-xs font-extrabold text-tile-violet-foreground"
                >
                  {w}
                </li>
              ))}
            </ul>
            <h3 className="mt-3 text-xs font-extrabold text-secondary-foreground">
              Kapan diucapkan
            </h3>
            <ul className="mt-1 flex flex-col gap-1.5">
              {cat.when.map((w) => (
                <li key={w} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}

        <Card className="bg-tile-cream">
          <h2 className="text-base font-extrabold text-tile-cream-foreground">Tips Stimulasi</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {sheet.tips.map((t) => (
              <li key={t} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span>💡</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-tile-mint">
          <h2 className="text-base font-extrabold text-tile-mint-foreground">Manfaat Latihan</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {sheet.manfaat.map((m) => (
              <li key={m} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span>✅</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <p className="text-xs leading-relaxed font-bold text-secondary-foreground">
            {sheet.closing}
          </p>
        </Card>

        <PrintButton label="Cetak Lembar Latihan" />
      </main>

      <BottomNav />
    </AppShell>
  );
}