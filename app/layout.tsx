'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import './globals.css';
import { Montserrat, Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Sidebar from '@/components/dashboard/Sidebar';

const montserrat = Montserrat({ subsets: ['latin'] });

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ORBIT',
  description: 'Organization of Basic Information Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard =
    pathname === '/dashboard' || pathname.startsWith('/dashboard/');

  if (isDashboard) {
    return (
      <html lang="en">
        <body className={`${inter.className} bg-[#1C2039]`}>
          <Sidebar />
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
