import { pgTable, integer, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userid: text("user_id").notNull(),
  code: varchar("code", { length: 16 }).notNull().unique(),
  url: text("url").notNull(),
  clerk_user_id: varchar("clerk_user_id", { length: 255 }).notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
