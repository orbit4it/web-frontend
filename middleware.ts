import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export const queryMe = `query {
  me {
    id
  }      
}`;

export function middleware(req: NextRequest) {
  const token = req.cookies.get('user_token');
  if (
    process.env.DASHBOARD_STATUS == 'development' &&
    req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/underconstruction', req.url));
  }

  if (req.nextUrl.pathname.startsWith('/admin/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (req.nextUrl.pathname.startsWith('/admin/:path*') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (req.nextUrl.pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }
}
export const config = {
  matcher: [
    '/dashboard',
    '/admin/dashboard',
    '/login',
    '/admin/:path*',
    '/dashboard/:path*',
  ],
};
