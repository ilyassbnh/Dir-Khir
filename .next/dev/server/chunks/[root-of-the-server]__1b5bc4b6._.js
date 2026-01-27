module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-route] (ecmascript)");
;
const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("user", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull().unique(),
    emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("emailVerified").notNull(),
    image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("createdAt").notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt").notNull()
});
const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("session", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expiresAt").notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token").notNull().unique(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("createdAt").notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt").notNull(),
    ipAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("ipAddress"),
    userAgent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userAgent"),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>user.id)
});
const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("account", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("accountId").notNull(),
    providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("providerId").notNull(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>user.id),
    accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("accessToken"),
    refreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("refreshToken"),
    idToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("idToken"),
    accessTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("accessTokenExpiresAt"),
    refreshTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("refreshTokenExpiresAt"),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("scope"),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("createdAt").notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt").notNull()
});
const verification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("verification", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("identifier").notNull(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("value").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expiresAt").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("createdAt"),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updatedAt")
});
const needs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("needs", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("title").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    city: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("city").notNull(),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("category").notNull(),
    whatsapp_number: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("whatsapp_number"),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("status").default("Open").notNull(),
    created_by: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("created_by").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").defaultNow().notNull()
});
const participants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("participants", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    needId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("need_id").notNull().references(()=>needs.id, {
        onDelete: "cascade"
    }),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    joinedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("joined_at").defaultNow().notNull()
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
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/postgres/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/drizzle-orm/postgres-js/driver.js [app-route] (ecmascript)");
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(process.env.DATABASE_URL);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(client, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
});
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/auth/full.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/adapters/drizzle-adapter/drizzle-adapter.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/index.ts [app-route] (ecmascript)"); // Adjust import path if needed, user said src/db/index.ts exports db
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/db/schema.ts [app-route] (ecmascript)");
;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterAuth"])({
    database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzleAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"], {
        provider: "pg",
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
    }),
    emailAndPassword: {
        enabled: true
    }
});
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/app/api/auth/[...all]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)");
;
;
const { GET, POST } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toNextJsHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"]);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1b5bc4b6._.js.map