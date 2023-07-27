import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  if (
    process.env.DASHBOARD_STATUS == 'development' &&
    req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/underconstruction', req.url));
  }
  // else if (
  //   process.env.DASHBOARD_STATUS == 'development' &&
  //   req.nextUrl.pathname.startsWith('/admin')
  // ) {
  //   return NextResponse.redirect(new URL('/underconstruction', req.url));
  // }
}

export const config = {
  mather: ['/dashboard', '/admin'],
};
