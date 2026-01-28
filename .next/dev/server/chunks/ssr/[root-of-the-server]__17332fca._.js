module.exports = [
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
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
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx <module evaluation>", "HeroSection");
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx", "HeroSection");
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsBar",
    ()=>StatsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/lucide-react/dist/esm/icons/activity.js [app-rsc] (ecmascript) <export default as Activity>");
;
;
const stats = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        value: "500+",
        label: "Citoyens Aidés"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        value: "12",
        label: "Villes"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        value: "Active",
        label: "maintenant"
    }
];
function StatsBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-card border-y border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-8",
                children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                    className: "h-6 w-6 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-foreground",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "NeedCard",
    ()=>NeedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NeedCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NeedCard() from the server but NeedCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx <module evaluation>", "NeedCard");
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "NeedCard",
    ()=>NeedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NeedCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NeedCard() from the server but NeedCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx", "NeedCard");
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$need$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$need$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$need$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NeedsGrid",
    ()=>NeedsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$need$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/need-card.tsx [app-rsc] (ecmascript)");
;
;
function NeedsGrid({ needs, participationCounts, userParticipationSet, currentUserId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-background py-16 sm:py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-foreground",
                            children: "Besoins en cours"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-muted-foreground max-w-2xl mx-auto",
                            children: "Découvrez comment vous pouvez aider votre communauté dès maintenant."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                needs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16 bg-white rounded-xl shadow-sm border border-stone-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-stone-500 mb-4",
                            children: "Aucun besoin pour le moment."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-400",
                            children: "Soyez le premier à demander de l'aide ou à proposer un service !"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: needs.map((need)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$need$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NeedCard"], {
                            need: need,
                            initialParticipantsCount: participationCounts[need.id] || 0,
                            initialIsParticipating: userParticipationSet.has(need.id),
                            currentUserId: currentUserId
                        }, need.id, false, {
                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/lucide-react/dist/esm/icons/coffee.js [app-rsc] (ecmascript) <export default as Coffee>");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-card border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                            className: "h-7 w-7 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 12,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-foreground",
                                            children: "Dir Khir"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 13,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground max-w-xs",
                                    children: "L'entraide de quartier, de Tanger à Lagouira. Ensemble, nous sommes plus forts."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-foreground",
                                            children: "Navigation"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Accueil"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/mon-espace",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Mon Espace"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Tous les besoins"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-foreground",
                                            children: "Légal"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Confidentialité"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: [
                                                "Conditions d",
                                                "'",
                                                "utilisation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-8 border-t border-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground text-center",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Dir Khir. Tous droits réservés. Fait avec amour au Maroc."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/sql/expressions/select.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/sql/functions/aggregate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$stats$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/stats-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$needs$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/needs-grid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/components/footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function HomePage() {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    // Strategy: Fetch needs, then fetch participation counts and user status.
    // For simplicity and speed in prototype, we can fetch all and map, 
    // or use a smarter query. 
    // Let's stick to Drizzle's query builder for a "dashboard-like" view.
    // Fetch all needs
    // Fetch all needs with participant counts
    const needsWithCounts = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableColumns"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["needs"]),
        participantsCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["count"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["participants"].id)
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["needs"]).leftJoin(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["participants"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["needs"].id, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["participants"].needId)).groupBy(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["needs"].id).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["needs"].createdAt));
    const allNeeds = needsWithCounts.map(({ participantsCount, ...need })=>need);
    // Map counts from the aggregated result
    const participationCounts = {};
    needsWithCounts.forEach((nc)=>{
        participationCounts[nc.id] = nc.participantsCount;
    });
    // Fetch all participants (not scalable for millions, but fine for prototype)
    // Or better: fetch aggregated counts.
    // const participantCounts = await db.select({ needId: participants.needId, count: count() }).from(participants).groupBy(participants.needId);
    // Let's do a simple approach: For each need, we pass data to the client component. 
    // Actually, to get IS_PARTICIPATING status efficiently, we should fetch the user's participations.
    const userParticipations = session ? await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["participants"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["participants"].userId, session.user.id)) : [];
    const userParticipationSet = new Set(userParticipations.map((p)=>p.needId));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$stats$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatsBar"], {}, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$needs$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NeedsGrid"], {
                        needs: allNeeds,
                        participationCounts: participationCounts,
                        userParticipationSet: userParticipationSet,
                        currentUserId: session?.user?.id
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__17332fca._.js.map