import {
  authRoutes,
  defaultRedirect,
  protectedRoutes,
  redirectAfterAuth,
} from '@/routes'
import { NextRequest, NextResponse } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies'

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request
  const pathname = nextUrl.pathname

  const sessionCookie = getSessionCookie(request)
  const isLoggedIn = !!sessionCookie

  const isAuthRoute = authRoutes.includes(pathname)

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(redirectAfterAuth, request.url))
    }
  }

  if (isProtectedRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL(defaultRedirect, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/edit/:path*', '/new/:path*', '/login'],
}
