import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (isPublicRoute(req.nextUrl.pathname) && !!req.nextauth.token?.user) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        return isPublicRoute(req.nextUrl.pathname) || !!token;
      },
    },
    secret: process.env.JWT_SECRET,
  }
);

const PUBLIC_ROUTES = [
  '/auth/login',
  '/auth/sign-up',
  '/set-password',
  '/forgot-password',
];

const isPublicRoute = (pathname: string) => {
  return PUBLIC_ROUTES.some((route) => pathname.startsWith(route));
};
