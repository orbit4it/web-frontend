import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

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
