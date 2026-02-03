import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

import {
    apiAuthPrefix,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
} from "./routes";

export async function middleware(request: NextRequest) {
    const session = getSessionCookie(request);

    const isApiAuth = request.nextUrl.pathname.startsWith(apiAuthPrefix);

    // Check if the current route is in the public routes list
    const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

    // Check if the current route is in the auth routes list (login, register, etc.)
    const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);

    if (isApiAuth) {
        return NextResponse.next();
    }

    // If visiting an auth page (login/register)
    if (isAuthRoute) {
        if (session) {
            // If logged in, redirect to dashboard
            // return NextResponse.redirect(
            //     new URL(DEFAULT_LOGIN_REDIRECT, request.url),
            // );
        }
        // If not logged in, allow access to valid auth pages
        return NextResponse.next();
    }

    // If not logged in and not on a public page, redirect to login
    // ALSO check if it's NOT a static file (image/icon) just in case matcher misses something,
    // though matcher config below usually handles this.
    if (!session && !isPublicRoute) {
        // return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes) -> Wait, we might want to protect API routes? 
         *   Actually, better-auth handles its own API protection. 
         *   But my custom actions should be protected manually or via this.
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|patterns|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
