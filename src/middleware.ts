import { auth } from "@/app/auth";
import {
  DEFAULT_REDIRECT,
  publicRoutes,
  credRoutes,
  existingRoutes,
} from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isRouteValid = existingRoutes.includes(nextUrl.pathname);
  const isCredRoutes = credRoutes.includes(nextUrl.pathname);
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    nextUrl.pathname.startsWith("/store");
  if (isCredRoutes && isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
  }
  if (!isPublicRoute && !isLoggedIn && !isCredRoutes && isRouteValid) {
    return Response.redirect(new URL("/login", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
