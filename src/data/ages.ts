export type AgeBandId = "0-3" | "3-6" | "6-9" | "9-12" | "12-18" | "18-24" | "24-36";

export const ageBands: { id: AgeBandId; label: string }[] = [
  { id: "0-3", label: "0–3 Bulan" },
  { id: "3-6", label: "3–6 Bulan" },
  { id: "6-9", label: "6–9 Bulan" },
  { id: "9-12", label: "9–12 Bulan" },
  { id: "12-18", label: "12–18 Bulan" },
  { id: "18-24", label: "18–24 Bulan" },
  { id: "24-36", label: "24–36 Bulan" },
];

export function bandLabel(id: AgeBandId): string {
  return ageBands.find((b) => b.id === id)?.label ?? id;
}