module.exports = [
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "account",
    ()=>account,
    "needs",
    ()=>needs,
    "participants",
    ()=>participants,
    "session",
    ()=>session,
    "user",
    ()=>user,
    "verification",
    ()=>verification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-rsc] (ecmascript)");
;
const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("user", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("email").notNull().unique(),
    emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])("emailVerified").notNull(),
    image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("image"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("createdAt").notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt").notNull()
});
const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("session", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("expiresAt").notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("token").notNull().unique(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("createdAt").notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt").notNull(),
    ipAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("ipAddress"),
    userAgent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("userAgent"),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>user.id)
});
const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("account", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("accountId").notNull(),
    providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("providerId").notNull(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>user.id),
    accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("accessToken"),
    refreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("refreshToken"),
    idToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("idToken"),
    accessTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("accessTokenExpiresAt"),
    refreshTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("refreshTokenExpiresAt"),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("scope"),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("password"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("createdAt").notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt").notNull()
});
const verification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("verification", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("identifier").notNull(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("value").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("expiresAt").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("createdAt"),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt")
});
const needs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("needs", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("title").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    city: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("city").notNull(),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("category").notNull(),
    whatsapp_number: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("whatsapp_number"),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("status").default("Open").notNull(),
    created_by: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("created_by").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").defaultNow().notNull()
});
const participants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("participants", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    needId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])("need_id").notNull().references(()=>needs.id, {
        onDelete: "cascade"
    }),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    joinedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("joined_at").defaultNow().notNull()
});
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/postgres/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/postgres-js/driver.js [app-rsc] (ecmascript)");
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(process.env.DATABASE_URL);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["drizzle"])(client, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/auth/full.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/adapters/drizzle-adapter/drizzle-adapter.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/index.ts [app-rsc] (ecmascript)"); // Adjust import path if needed, user said src/db/index.ts exports db
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-rsc] (ecmascript)");
;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["betterAuth"])({
    database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["drizzleAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], {
        provider: "pg",
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
    }),
    emailAndPassword: {
        enabled: true
    }
});
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/schemata/needs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNeedSchema",
    ()=>createNeedSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createNeedSchema = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, "Le titre doit contenir au moins 5 caractères"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(20, "La description doit contenir au moins 20 caractères"),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Casablanca",
        "Rabat",
        "Marrakech",
        "Tanger",
        "Agadir",
        "Fès",
        "Meknès",
        "Oujda",
        "Tetouan",
        "Safi"
    ]),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Donation",
        "Bénévolat",
        "Urgence",
        "Autre"
    ]),
    whatsapp_number: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\+212[5-7][0-9]{8}$/, "Numéro invalide (Format: +2126XXXXXXXX)")
});
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/actions/needs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400709aa820f3a0626e99687c586f50e27f2224eb3":"joinNeed","60cc8c0f5d7ff2af2325125774ae3796f2ecdf8a8a":"createNeed"},"",""] */ __turbopack_context__.s([
    "createNeed",
    ()=>createNeed,
    "joinNeed",
    ()=>joinNeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$services$2f$schemata$2f$needs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/schemata/needs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function createNeed(prevState, formData) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        throw new Error("Vous devez être connecté pour publier un besoin.");
    }
    const rawData = {
        title: formData.get("title"),
        description: formData.get("description"),
        city: formData.get("city"),
        category: formData.get("category"),
        whatsapp_number: formData.get("whatsapp_number")
    };
    const validatedFields = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$services$2f$schemata$2f$needs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNeedSchema"].safeParse(rawData);
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["needs"]).values({
            title: validatedFields.data.title,
            description: validatedFields.data.description,
            city: validatedFields.data.city,
            category: validatedFields.data.category,
            whatsapp_number: validatedFields.data.whatsapp_number,
            created_by: session.user.id
        });
    } catch (e) {
        console.error(e);
        return {
            message: "Une erreur est survenue lors de la création du besoin."
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/mon-espace");
}
async function joinNeed(needId) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        return {
            error: "Vous devez être connecté pour participer."
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["participants"]).values({
            needId: needId,
            userId: session.user.id
        });
    } catch (e) {
        console.error("Join Error:", e);
        return {
            error: "Une erreur est survenue."
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/mon-espace");
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createNeed,
    joinNeed
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createNeed, "60cc8c0f5d7ff2af2325125774ae3796f2ecdf8a8a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinNeed, "400709aa820f3a0626e99687c586f50e27f2224eb3", null);
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/actions/needs.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$services$2f$actions$2f$needs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/actions/needs.ts [app-rsc] (ecmascript)");
;
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/actions/needs.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "400709aa820f3a0626e99687c586f50e27f2224eb3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$services$2f$actions$2f$needs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinNeed"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$services$2f$actions$2f$needs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/actions/needs.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$services$2f$actions$2f$needs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/services/actions/needs.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6dae629a._.js.map