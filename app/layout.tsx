// 'use client';
// import Sidebar from '@/components/dashboard/Sidebar';
// import { Inter, Montserrat } from 'next/font/google';
// import { usePathname } from 'next/navigation';
// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './globals.css';
// import axios from 'axios';

// axios.defaults.withCredentials = true;
// const montserrat = Montserrat({ subsets: ['latin'] });

// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const isDashboard =
//     pathname === '/dashboard' || pathname.startsWith('/dashboard/');

//   const isLogin =
//     pathname === '/login' ||
//     pathname.startsWith('/login/') ||
//     pathname === '/register' ||
//     pathname.startsWith('/register/');

//   if (isDashboard) {
//     return (
//       <html lang="en">
//         <head>
//           <title>Eskul | ORBIT 4 IT</title>
//           <meta
//             name="description"
//             content="Organization Of Basic Information Technology"
//           />
//           <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0"
//           />
//         </head>
//         <body className={`${inter.className} bg-d-primary`}>
//           <Sidebar />
//           {children}
//         </body>
//       </html>
//     );
//   }

//   if (isLogin) {
//     return (
//       <html lang="en">
//         <head>
//           <title>ORBIT 4 IT | Auth</title>
//           <meta
//             name="description"
//             content="Organization Of Basic Information Technology"
//           />
//           <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0"
//           />
//         </head>
//         <body className={`${inter.className} `}>
//           <ToastContainer
//             position="top-left"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//           {children}
//         </body>
//       </html>
//     );
//   }

//   return (
//     <html lang="en">
//       <head>
//         <title>ORBIT SMK Negeri 4 Bandung</title>
//         <meta
//           name="description"
//           content="Organization Of Basic Information Technology"
//         />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </head>
//       <body className={`${montserrat.className}`}>{children}</body>
//     </html>
//   );
// }

'use client';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

axios.defaults.withCredentials = true;

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ORBIT SMK Negeri 4 Bandung',
    template: '%s | ORBIT 4 IT',
  },
  description: 'Organization Of Basic Information Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
