import { createClient } from "@libsql/client";
import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";

import {
  dailyLogs,
  screenings,
  users,
  type NewDailyLog,
  type NewScreening,
  type NewUser,
} from "./schema";

function createDb() {
  const url = process.env.DATABASE_URL ?? process.env.TURSO_DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Configure a libSQL or SQLite-compatible database before using Drizzle.",
    );
  }

  const client = createClient({
    url,
    authToken: process.env.DATABASE_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN,
  });

  return drizzle(client, {
    schema: {
      users,
      dailyLogs,
      screenings,
    },
  });
}

export function getDb() {
  return createDb();
}

function stamp() {
  return new Date().toISOString();
}

export async function getUser(userId: string) {
  const db = getDb();
  const rows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return rows[0] ?? null;
}

export async function upsertUser(user: NewUser & { id: string }) {
  const db = getDb();
  const now = stamp();

  await db
    .insert(users)
    .values({
      ...user,
      updatedAt: now,
      createdAt: user.createdAt ?? now,
    })
    .onConflictDoUpdate({
      target: users.id,
      set: {
        name: user.name,
        birthDate: user.birthDate,
        parentNote: user.parentNote ?? "",
        reminderEnabled: user.reminderEnabled ?? true,
        reminderTime: user.reminderTime ?? "19:00",
        locale: user.locale ?? "id-ID",
        timezone: user.timezone ?? "Asia/Jakarta",
        updatedAt: now,
      },
    });
}

export async function listDailyLogs(userId: string) {
  const db = getDb();
  return db.select().from(dailyLogs).where(eq(dailyLogs.userId, userId)).orderBy(desc(dailyLogs.logDate));
}

export async function saveDailyLog(log: NewDailyLog & { id: string }) {
  const db = getDb();
  const now = stamp();

  await db
    .insert(dailyLogs)
    .values({
      ...log,
      updatedAt: now,
      createdAt: log.createdAt ?? now,
    })
    .onConflictDoUpdate({
      target: [dailyLogs.userId, dailyLogs.logDate],
      set: {
        minutes: log.minutes,
        newWords: log.newWords,
        response: log.response,
        note: log.note ?? "",
        updatedAt: now,
      },
    });
}

export async function listScreenings(userId: string) {
  const db = getDb();
  return db.select().from(screenings).where(eq(screenings.userId, userId)).orderBy(desc(screenings.screenedAt));
}

export async function saveScreening(screening: NewScreening & { id: string }) {
  const db = getDb();
  const now = stamp();

  await db.insert(screenings).values({
    ...screening,
    createdAt: screening.createdAt ?? now,
  });
}

export async function clearUserData(userId: string) {
  const db = getDb();
  await db.delete(screenings).where(eq(screenings.userId, userId));
  await db.delete(dailyLogs).where(eq(dailyLogs.userId, userId));
  await db.delete(users).where(eq(users.id, userId));
}