import { relations, sql } from "drizzle-orm";
import { integer, index, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const dailyResponseValues = ["Kurang", "Cukup", "Baik", "Sangat Baik"] as const;
export type DailyResponse = (typeof dailyResponseValues)[number];

export const users = sqliteTable(
  "users",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    birthDate: text("birth_date").notNull(),
    parentNote: text("parent_note").notNull().default(""),
    reminderEnabled: integer("reminder_enabled", { mode: "boolean" }).notNull().default(true),
    reminderTime: text("reminder_time").notNull().default("19:00"),
    locale: text("locale").notNull().default("id-ID"),
    timezone: text("timezone").notNull().default("Asia/Jakarta"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    nameIndex: index("users_name_idx").on(table.name),
  }),
);

export const dailyLogs = sqliteTable(
  "daily_logs",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    logDate: text("log_date").notNull(),
    minutes: integer("minutes").notNull(),
    newWords: integer("new_words").notNull(),
    response: text("response", { enum: dailyResponseValues }).notNull(),
    note: text("note").notNull().default(""),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    userDateIndex: uniqueIndex("daily_logs_user_date_unique").on(table.userId, table.logDate),
    userIndex: index("daily_logs_user_idx").on(table.userId),
    dateIndex: index("daily_logs_date_idx").on(table.logDate),
  }),
);

export const screenings = sqliteTable(
  "screenings",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    screenedAt: text("screened_at").notNull(),
    ageMonths: integer("age_months").notNull(),
    yesCount: integer("yes_count").notNull(),
    totalCount: integer("total_count").notNull(),
    verdict: text("verdict").notNull(),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    userIndex: index("screenings_user_idx").on(table.userId),
    dateIndex: index("screenings_screened_at_idx").on(table.screenedAt),
  }),
);

export const usersRelations = relations(users, ({ many }) => ({
  dailyLogs: many(dailyLogs),
  screenings: many(screenings),
}));

export const dailyLogsRelations = relations(dailyLogs, ({ one }) => ({
  user: one(users, {
    fields: [dailyLogs.userId],
    references: [users.id],
  }),
}));

export const screeningsRelations = relations(screenings, ({ one }) => ({
  user: one(users, {
    fields: [screenings.userId],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type DailyLog = typeof dailyLogs.$inferSelect;
export type NewDailyLog = typeof dailyLogs.$inferInsert;
export type Screening = typeof screenings.$inferSelect;
export type NewScreening = typeof screenings.$inferInsert;