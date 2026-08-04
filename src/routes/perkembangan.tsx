import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, BottomNav, Card, PageHeader, PrintButton } from "@/components/AppShell";
import babyBlocks from "@/assets/baby-blocks.png";
import { ageBands, bandLabel, type AgeBandId } from "@/data/ages";
import { milestoneSheets } from "@/data/perkembangan";
import { ageInMonths, bandForMonths, useSpeechPro } from "@/lib/store";

export const Route = createFileRoute("/perkembangan")({
  head: () => ({
    meta: [
      { title: "Tahap Perkembangan Bahasa Anak — SpeechPro" },
      {
        name: "description",
        content:
          "Tahap perkembangan bahasa anak 0–36 bulan: kemampuan yang muncul, aspek yang dipantau, aktivitas stimulasi, dan tanda yang perlu diwaspadai.",
      },
      { property: "og:title", content: "Tahap Perkembangan Bahasa Anak — SpeechPro" },
      {
        property: "og:description",
        content: "Kemampuan bahasa per tahap usia beserta aktivitas stimulasinya.",
      },
      { property: "og:url", content: "/perkembangan" },
    ],
    links: [{ rel: "canonical", href: "/perkembangan" }],
  }),
  component: PerkembanganPage,
});

function PerkembanganPage() {
  const { state } = useSpeechPro();
  const [band, setBand] = useState<AgeBandId>(bandForMonths(ageInMonths(state.profile.birthDate)));
  const sheet = milestoneSheets[band];

  return (
    <AppShell>
      <PageHeader
        title="Tahap Perkembangan"
        subtitle={`Usia ${bandLabel(band)}`}
        illustration={<img src={babyBlocks} alt="" className="w-full" />}
      />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        <div className="no-print -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {ageBands.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBand(b.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-extrabold ${
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

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">
            Kemampuan yang Muncul
          </h2>
          <ul className="mt-2 flex flex-col gap-1.5">
            {sheet.stages.map((s) => (
              <li key={s} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span className="text-primary">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Aspek yang Dipantau</h2>
          <ul className="mt-3 grid gap-2">
            {sheet.aspects.map((a) => (
              <li key={a.title} className="rounded-3xl bg-secondary p-3">
                <p className="text-sm font-extrabold text-secondary-foreground">{a.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.description}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-tile-mint">
          <h2 className="text-base font-extrabold text-tile-mint-foreground">Aktivitas Stimulasi</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {sheet.activities.map((a) => (
              <li key={a} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span>🎈</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-tile-blush">
          <h2 className="text-base font-extrabold text-tile-blush-foreground">Perlu Diwaspadai</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {sheet.warnings.map((w) => (
              <li key={w} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span>⚠️</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </Card>

        <PrintButton label="Cetak Tahap Usia" />
      </main>

      <BottomNav />
    </AppShell>
  );
}