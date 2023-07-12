'use client';
import Sidebar from '@/components/dashboard/Sidebar';
import { Inter, Montserrat } from 'next/font/google';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard =
    pathname === '/dashboard' || pathname.startsWith('/dashboard/');

  const isLogin =
    pathname === '/login' ||
    pathname.startsWith('/login/') ||
    pathname === '/register' ||
    pathname.startsWith('/register/');

  if (isDashboard) {
    return (
      <html lang="en">
        <Head>
          <title>Orbit SMKN 4 Bandung | Auth</title>
        </Head>
        <body className={`${inter.className} bg-d-primary`}>
          <Sidebar />
          {children}
        </body>
      </html>
    );
  }

  if (isLogin) {
    return (
      <html lang="en">
        <Head>
          <title>Orbit SMKN 4 Bandung | Auth</title>
        </Head>
        <body className={`${inter.className} `}>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
