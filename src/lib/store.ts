import { useCallback, useEffect, useState } from "react";
import { ageBands, type AgeBandId } from "@/data/ages";

export type ChildProfile = {
  name: string;
  birthDate: string; // YYYY-MM-DD
};

export type DailyLog = {
  date: string; // YYYY-MM-DD
  minutes: number;
  newWords: number;
  response: "Kurang" | "Cukup" | "Baik" | "Sangat Baik";
  note: string;
};

export type ScreeningResult = {
  id: string;
  date: string;
  age: number;
  yes: number;
  total: number;
  verdict: string;
};

export type SpeechProState = {
  profile: ChildProfile;
  logs: DailyLog[];
  screenings: ScreeningResult[];
  parentNote: string;
};

const STORAGE_KEY = "speechpro.state.v1";
const EVENT = "speechpro:change";

export const defaultState: SpeechProState = {
  profile: { name: "Si Kecil", birthDate: "" },
  logs: [],
  screenings: [],
  parentNote: "",
};

function read(): SpeechProState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...(JSON.parse(raw) as Partial<SpeechProState>) };
  } catch {
    return defaultState;
  }
}

function write(state: SpeechProState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event(EVENT));
}

/** Reads app state from localStorage after hydration and keeps every page in sync. */
export function useSpeechPro() {
  const [state, setState] = useState<SpeechProState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(read());
    setReady(true);
    const sync = () => setState(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback((patch: Partial<SpeechProState>) => {
    const next = { ...read(), ...patch };
    write(next);
    setState(next);
  }, []);

  const saveLog = useCallback((log: DailyLog) => {
    const current = read();
    const logs = [log, ...current.logs.filter((l) => l.date !== log.date)].sort((a, b) =>
      a.date < b.date ? 1 : -1,
    );
    const next = { ...current, logs };
    write(next);
    setState(next);
  }, []);

  const saveScreening = useCallback((result: ScreeningResult) => {
    const current = read();
    const next = { ...current, screenings: [result, ...current.screenings].slice(0, 50) };
    write(next);
    setState(next);
  }, []);

  const reset = useCallback(() => {
    write(defaultState);
    setState(defaultState);
  }, []);

  return { state, ready, update, saveLog, saveScreening, reset };
}

export function todayKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function ageInMonths(birthDate: string): number | null {
  if (!birthDate) return null;
  const b = new Date(birthDate);
  if (Number.isNaN(b.getTime())) return null;
  const now = new Date();
  let months = (now.getFullYear() - b.getFullYear()) * 12 + (now.getMonth() - b.getMonth());
  if (now.getDate() < b.getDate()) months -= 1;
  return Math.max(0, months);
}

export function bandForMonths(months: number | null): AgeBandId {
  if (months === null) return "9-12";
  const found = ageBands.find(({ id }) => {
    const parts = id.split("-").map(Number);
    const from = parts[0] ?? 0;
    const to = parts[1] ?? 36;
    return months >= from && months < to;
  });
  return found?.id ?? "24-36";
}

export function formatDate(iso: string): string {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

/** Poin: 10 per hari stimulasi tercatat + 20 per skrining selesai. */
export function computePoints(state: SpeechProState): number {
  return state.logs.length * 10 + state.screenings.length * 20;
}

/** Hari stimulasi berturut-turut yang berakhir hari ini atau kemarin. */
export function computeStreak(logs: DailyLog[]): number {
  const dates = new Set(logs.map((l) => l.date));
  let streak = 0;
  const cursor = new Date();
  if (!dates.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (dates.has(todayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

/** Tanggal Senin–Minggu untuk minggu yang mengandung `ref`. */
export function weekDates(ref = new Date()): string[] {
  const monday = new Date(ref);
  const dow = (monday.getDay() + 6) % 7;
  monday.setDate(monday.getDate() - dow);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return todayKey(d);
  });
}

export type WeeklySummary = {
  dates: string[];
  logs: DailyLog[];
  activeDays: number;
  minutesRange: string;
  newWords: number;
  responseLabel: string;
  consistency: number;
  score: number;
  previousScore: number;
};

const responseScore: Record<DailyLog["response"], number> = {
  Kurang: 40,
  Cukup: 60,
  Baik: 80,
  "Sangat Baik": 100,
};

function scoreForWeek(logs: DailyLog[], dates: string[]): number {
  const inWeek = logs.filter((l) => dates.includes(l.date));
  if (inWeek.length === 0) return 0;
  const consistency = (inWeek.length / 7) * 100;
  const response =
    inWeek.reduce((sum, l) => sum + responseScore[l.response], 0) / inWeek.length;
  return Math.round(consistency * 0.5 + response * 0.5);
}

export function weeklySummary(state: SpeechProState, ref = new Date()): WeeklySummary {
  const dates = weekDates(ref);
  const logs = state.logs.filter((l) => dates.includes(l.date));
  const prevRef = new Date(ref);
  prevRef.setDate(prevRef.getDate() - 7);
  const minutes = logs.map((l) => l.minutes);
  const responses = logs.map((l) => responseScore[l.response]);
  const avgResponse = responses.length
    ? responses.reduce((a, b) => a + b, 0) / responses.length
    : 0;
  const responseLabel =
    avgResponse >= 95
      ? "Sangat Baik"
      : avgResponse >= 75
        ? "Baik"
        : avgResponse >= 55
          ? "Cukup"
          : responses.length
            ? "Kurang"
            : "-";

  return {
    dates,
    logs,
    activeDays: logs.length,
    minutesRange: minutes.length
      ? `${Math.min(...minutes)}–${Math.max(...minutes)} menit/hari`
      : "-",
    newWords: logs.reduce((sum, l) => sum + l.newWords, 0),
    responseLabel,
    consistency: Math.round((logs.length / 7) * 100),
    score: scoreForWeek(state.logs, dates),
    previousScore: scoreForWeek(state.logs, weekDates(prevRef)),
  };
}

export function unlockedBadgeIds(points: number, streak: number, badgeList: { id: string; minPoints?: number; minStreak?: number; comingSoon?: boolean }[]): string[] {
  return badgeList
    .filter((b) => {
      if (b.comingSoon) return false;
      if (b.minPoints !== undefined) return points >= b.minPoints;
      if (b.minStreak !== undefined) return streak >= b.minStreak;
      return false;
    })
    .map((b) => b.id);
}