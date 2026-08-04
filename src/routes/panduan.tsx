import { createFileRoute } from "@tanstack/react-router";
import { AppShell, BottomNav, Card, PageHeader } from "@/components/AppShell";
import family from "@/assets/family.png";
import {
  guideCautions,
  guideTopics,
  guideWhyItMatters,
  positiveActivities,
} from "@/data/panduan";

export const Route = createFileRoute("/panduan")({
  head: () => ({
    meta: [
      { title: "Panduan Orang Tua — SpeechPro" },
      {
        name: "description",
        content:
          "Panduan orang tua tentang speech delay, pola asuh suportif, pembatasan screen time, dan aktivitas positif untuk anak.",
      },
      { property: "og:title", content: "Panduan Orang Tua — SpeechPro" },
      {
        property: "og:description",
        content: "Speech delay, pola asuh suportif, dan pembatasan screen time untuk anak.",
      },
      { property: "og:url", content: "/panduan" },
    ],
    links: [{ rel: "canonical", href: "/panduan" }],
  }),
  component: PanduanPage,
});

function PanduanPage() {
  return (
    <AppShell>
      <PageHeader
        title="Panduan Orang Tua"
        subtitle="Bekal penting untuk mendampingi Si Kecil"
        illustration={<img src={family} alt="" className="w-full" />}
      />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        {guideTopics.map((topic) => (
          <Card key={topic.id}>
            <h2 className="text-base font-extrabold text-secondary-foreground">{topic.title}</h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{topic.intro}</p>
            {topic.sections.map((s) => (
              <div key={s.heading} className="mt-3">
                <h3 className="text-xs font-extrabold text-primary">{s.heading}</h3>
                <ul className="mt-1 flex flex-col gap-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2 text-xs leading-relaxed text-foreground">
                      <span className="text-primary">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        ))}

        <Card className="bg-tile-mint">
          <h2 className="text-base font-extrabold text-tile-mint-foreground">Mengapa Penting?</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {guideWhyItMatters.map((w) => (
              <li key={w} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span>✅</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Aktivitas Positif</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {positiveActivities.map((a) => (
              <li key={a.title} className="rounded-3xl bg-secondary p-3">
                <p className="text-sm font-extrabold text-secondary-foreground">{a.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.description}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-tile-cream">
          <h2 className="text-base font-extrabold text-tile-cream-foreground">Hal yang Perlu Diingat</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {guideCautions.map((c) => (
              <li key={c} className="flex gap-2 text-xs leading-relaxed text-foreground">
                <span>💡</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Card>
      </main>

      <BottomNav />
    </AppShell>
  );
}