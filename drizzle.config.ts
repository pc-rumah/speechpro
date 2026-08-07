import { defineConfig } from "drizzle-kit";
import { readFileSync } from "node:fs";
import { join } from "node:path";

function loadEnvValue(name: string) {
  const envFiles = [".env.local", ".env"];

  for (const fileName of envFiles) {
    try {
      const content = readFileSync(join(process.cwd(), fileName), "utf8");

      for (const line of content.split(/\r?\n/)) {
        const trimmedLine = line.trim();

        if (!trimmedLine || trimmedLine.startsWith("#")) {
          continue;
        }

        const separatorIndex = trimmedLine.indexOf("=");
        if (separatorIndex === -1) {
          continue;
        }

        const key = trimmedLine.slice(0, separatorIndex).trim();
        if (key !== name) {
          continue;
        }

        return trimmedLine
          .slice(separatorIndex + 1)
          .trim()
          .replace(/^['"]|['"]$/g, "");
      }
    } catch {
      // Ignore missing env files and continue to the next fallback.
    }
  }

  return process.env[name];
}

const databaseUrl = loadEnvValue("DATABASE_URL");

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to push migrations to Supabase Postgres.");
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
