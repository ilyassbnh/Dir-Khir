import { pgTable, text, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";
import { user } from "./auth";

// Enums
export const cityEnum = pgEnum("city", ['Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Agadir', 'Other']);
export const categoryEnum = pgEnum("category", ['Donation', 'Volunteering', 'Emergency']);
export const statusEnum = pgEnum("status", ['Open', 'Fulfilled']);

export const needs = pgTable("needs", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    city: cityEnum("city").notNull(),
    category: categoryEnum("category").notNull(),
    whatsapp_number: text("whatsapp_number"),
    status: statusEnum("status").default("Open").notNull(),
    userId: text("userId")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .notNull()
        .$onUpdate(() => new Date()),
});

export const participants = pgTable("participants", {
    id: uuid("id").primaryKey().defaultRandom(),
    needId: uuid("need_id")
        .notNull()
        .references(() => needs.id, { onDelete: "cascade" }),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    joinedAt: timestamp("joined_at").defaultNow().notNull(),
});
