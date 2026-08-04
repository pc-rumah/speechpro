import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell, BottomNav, Card, PageHeader } from "@/components/AppShell";
import { bandLabel } from "@/data/ages";
import { ageInMonths, bandForMonths, computePoints, computeStreak, useSpeechPro } from "@/lib/store";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Anak — SpeechPro" },
      {
        name: "description",
        content:
          "Simpan nama dan tanggal lahir anak agar rekomendasi skrining serta latihan kata sesuai tahap usianya.",
      },
      { property: "og:title", content: "Profil Anak — SpeechPro" },
      {
        property: "og:description",
        content: "Atur profil anak untuk rekomendasi stimulasi sesuai usia.",
      },
      { property: "og:url", content: "/profil" },
    ],
    links: [{ rel: "canonical", href: "/profil" }],
  }),
  component: ProfilPage,
});

function ProfilPage() {
  const { state, ready, update, reset } = useSpeechPro();
  const [name, setName] = useState(state.profile.name);
  const [birthDate, setBirthDate] = useState(state.profile.birthDate);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (ready) {
      setName(state.profile.name);
      setBirthDate(state.profile.birthDate);
    }
  }, [ready, state.profile.name, state.profile.birthDate]);

  const months = ageInMonths(state.profile.birthDate);

  return (
    <AppShell>
      <PageHeader title="Profil" subtitle="Data Si Kecil disimpan di perangkat ini" />

      <main className="flex flex-col gap-4 px-4 pt-4 pb-6">
        <Card>
          <label className="text-sm font-extrabold text-secondary-foreground" htmlFor="name">
            Nama anak
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-2xl bg-secondary px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-ring"
          />
          <label
            className="mt-4 block text-sm font-extrabold text-secondary-foreground"
            htmlFor="birth"
          >
            Tanggal lahir
          </label>
          <input
            id="birth"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="mt-2 w-full rounded-2xl bg-secondary px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="button"
            onClick={() => {
              update({ profile: { name: name.trim() || "Si Kecil", birthDate } });
              setSaved(true);
            }}
            className="brand-gradient mt-4 w-full rounded-full py-3 text-sm font-extrabold text-primary-foreground"
          >
            Simpan Profil
          </button>
          {saved ? (
            <p className="mt-2 text-center text-xs font-bold text-success">Profil tersimpan</p>
          ) : null}
        </Card>

        <Card>
          <h2 className="text-base font-extrabold text-secondary-foreground">Ringkasan</h2>
          <ul className="mt-2 flex flex-col gap-1.5 text-xs text-muted-foreground">
            <li>
              Usia: {months === null ? "belum diisi" : `${months} bulan (${bandLabel(bandForMonths(months))})`}
            </li>
            <li>Total poin: {computePoints(state)}</li>
            <li>Streak: {computeStreak(state.logs)} hari</li>
            <li>Catatan tersimpan: {state.logs.length}</li>
            <li>Skrining tersimpan: {state.screenings.length}</li>
          </ul>
          <Link
            to="/panduan"
            className="mt-3 inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-extrabold text-primary"
          >
            Baca Panduan Orang Tua
          </Link>
        </Card>

        <button
          type="button"
          onClick={() => {
            if (window.confirm("Hapus semua data SpeechPro di perangkat ini?")) reset();
          }}
          className="rounded-full border border-destructive py-3 text-sm font-extrabold text-destructive"
        >
          Hapus Semua Data
        </button>
      </main>

      <BottomNav />
    </AppShell>
  );
}