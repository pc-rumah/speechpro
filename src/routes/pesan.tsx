import { createFileRoute } from "@tanstack/react-router";
import { AppShell, BottomNav, Card, PageHeader } from "@/components/AppShell";
import { messages } from "@/data/reward";

export const Route = createFileRoute("/pesan")({
  head: () => ({
    meta: [
      { title: "Pesan & Pengingat — SpeechPro" },
      {
        name: "description",
        content:
          "Pengingat harian dan tips singkat untuk membantu orang tua konsisten menstimulasi bahasa anak setiap hari.",
      },
      { property: "og:title", content: "Pesan & Pengingat — SpeechPro" },
      {
        property: "og:description",
        content: "Pengingat harian dan tips stimulasi bahasa anak.",
      },
      { property: "og:url", content: "/pesan" },
    ],
    links: [{ rel: "canonical", href: "/pesan" }],
  }),
  component: PesanPage,
});

const tones = {
  violet: "bg-tile-violet",
  cream: "bg-tile-cream",
  mint: "bg-tile-mint",
  sky: "bg-tile-sky",
} as const;

function PesanPage() {
  return (
    <AppShell>
      <PageHeader title="Pesan" subtitle="Pengingat & tips untuk orang tua" />

      <main className="flex flex-col gap-3 px-4 pt-4 pb-6">
        {messages.map((m) => (
          <Card key={m.id} className={tones[m.tone]}>
            <h2 className="text-sm font-extrabold text-secondary-foreground">{m.title}</h2>
            <p className="mt-1 text-xs leading-relaxed text-foreground">{m.body}</p>
          </Card>
        ))}
      </main>

      <BottomNav />
    </AppShell>
  );
}