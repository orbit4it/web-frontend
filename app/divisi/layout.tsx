'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import '@/helper/swipers/galeri.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Divisi Kami',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar active={'null'} />
      <NavbarMobile active={'null'} />
      <main className="w-full bg-primary h-[1780px] md:h-[1970px] ">
        <section className="w-full h-[1000px] md:h-[1970px] bg-division bg-cover bg-no-repeat opacity-70 pt-[412px]">
          <div className="w-full h-full rounded-t-[63px] bg-primary pt-0 lg:pt-24 pb-56 lg:pb-80 px-5 lg:px-36">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
