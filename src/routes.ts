const DEFAULT_REDIRECT = "/";

const publicRoutes = ["/"];

const protectedRoutes = ["/store", "/cart"];

const credRoutes = ["/login", "/register"];

const existingRoutes = [...publicRoutes, ...protectedRoutes, ...credRoutes];

export { DEFAULT_REDIRECT, publicRoutes, credRoutes, existingRoutes };
