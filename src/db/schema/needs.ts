import { pgTable, text, timestamp, uuid, boolean } from "drizzle-orm/pg-core";
import { user } from "./auth/user";

export const needs = pgTable("needs", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    city: text("city").notNull(), // 'Casablanca', 'Marrakech', etc.
    category: text("category").notNull(), // 'Aide physique', 'Don', 'Transport', etc.
    userId: text("userId")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    status: text("status", { enum: ["open", "fulfilled"] })
        .default("open")
        .notNull(),
    whatsapp: text("whatsapp"), // Optional contact number
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt")
        .defaultNow()
        .notNull()
        .$onUpdate(() => new Date()),
});

export const volunteers = pgTable("volunteers", {
    id: uuid("id").primaryKey().defaultRandom(),
    needId: uuid("needId")
        .notNull()
        .references(() => needs.id, { onDelete: "cascade" }),
    userId: text("userId")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
});
