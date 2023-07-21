import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  if (
    process.env.DASHBOARD_STATUS == 'development' &&
    req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/underconstruction', req.url));
  } else if (
    process.env.DASHBOARD_STATUS == 'development' &&
    req.nextUrl.pathname.startsWith('/admin')
  ) {
    return NextResponse.redirect(new URL('/underconstruction', req.url));
  }
  //   const checkCookie = async () => {
  //     const res = await Apicall(`
  //         {
  //            me {
  //             role
  //           }
  //         }
  //     `);
  //     if (res) {
  //       if (res.data.me.role == 'admin') {
  //         return NextResponse.redirect(new URL('/dashboard/admin', req.url));
  //       } else {
  //         return NextResponse.redirect(new URL('/dashboard', req.url));
  //       }
  //     } else {
  //       return NextResponse.redirect(new URL('/login', req.url));
  //     }
  //   };
  //   let cookie = req.cookies;
  //   console.log('hasil: ' + req.url);
  //   console.log(cookie);
  //   return checkCookie();
}

export const config = {
  mather: ['/dashboard', '/admin'],
};

// export const config = {
//   matcher: ['/', '/register', '/login', '/dashboard', '/dashboard/admin'],
// };
