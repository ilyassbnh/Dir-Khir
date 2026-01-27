(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__4b73fb69._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/routes.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LOGIN_REDIRECT",
    ()=>DEFAULT_LOGIN_REDIRECT,
    "apiAuthPrefix",
    ()=>apiAuthPrefix,
    "authRoutes",
    ()=>authRoutes,
    "publicRoutes",
    ()=>publicRoutes
]);
const publicRoutes = [
    "/",
    "/about",
    "/api/auth"
];
const authRoutes = [
    "/login",
    "/register",
    "/forgot-password"
];
const apiAuthPrefix = "/api/auth";
const DEFAULT_LOGIN_REDIRECT = "/mon-espace";
}),
"[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/Simplon/nextjs-better-auth/src/routes.ts [middleware-edge] (ecmascript)");
;
;
;
async function middleware(request) {
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSessionCookie"])(request);
    const isApiAuth = request.nextUrl.pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["apiAuthPrefix"]);
    // Check if the current route is in the public routes list
    const isPublicRoute = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["publicRoutes"].includes(request.nextUrl.pathname);
    // Check if the current route is in the auth routes list (login, register, etc.)
    const isAuthRoute = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authRoutes"].includes(request.nextUrl.pathname);
    if (isApiAuth) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // If visiting an auth page (login/register)
    if (isAuthRoute) {
        if (session) {
            // If logged in, redirect to dashboard
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$src$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_LOGIN_REDIRECT"], request.url));
        }
        // If not logged in, allow access to valid auth pages
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // If not logged in and not on a public page, redirect to login
    // ALSO check if it's NOT a static file (image/icon) just in case matcher misses something,
    // though matcher config below usually handles this.
    if (!session && !isPublicRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Simplon$2f$nextjs$2d$better$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes) -> Wait, we might want to protect API routes? 
         *   Actually, better-auth handles its own API protection. 
         *   But my custom actions should be protected manually or via this.
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */ "/((?!api|_next/static|_next/image|favicon.ico|patterns|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__4b73fb69._.js.map