import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Apicall from './helper/apicall';

export function middleware(req: NextRequest, res: NextResponse) {
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

// export const config = {
//   matcher: ['/', '/register', '/login', '/dashboard', '/dashboard/admin'],
// };
