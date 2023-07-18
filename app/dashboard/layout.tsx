import Sidebar from '@/components/dashboard/Sidebar';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { BsBell, BsSearch } from 'react-icons/bs';

interface UserType {
  name: string;
  class: string;
  division: string;
  photo: string;
}

export const metadata: Metadata = {
  title: 'Eskul',
};

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: UserType = {
    name: 'Azarel Lazuardi Aditya',
    class: 'XI PPLG 2',
    division: 'Web Development',
    photo: '/assets/img/FotoDummy.png',
  };
  return (
    <>
      <Sidebar />
      <section className="md:pl-[20%] bg-d-primary">
        <header className="fixed top-0 right-0 w-full h-16 md:h-14 px-5 py-2 md:px-10 md:py-4 flex items-center gap-5 z-50">
          <ul className="relative w-full flex gap-10 justify-end">
            <li className="w-5 h-5 relative">
              <BsSearch
                size={18}
                color="white"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </li>
            <li className="w-5 h-5 relative ">
              <div className="w-1 h-1 rounded-full bg-[#FA5555] absolute top-0 right-0"></div>
              <BsBell
                size={18}
                color="white"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </li>
            <li className="absolute left-0 my-auto md:static w-5 h-5 rounded-full bg-white overflow-hidden">
              <Image
                src={user.photo}
                alt="Foto Profile"
                width={100}
                height={100}
                className="w-5 h-5"
              />
            </li>
          </ul>
        </header>
        <main className="max-w-[1440px] 2xl:mx-auto min-h-screen bg-d-primary pt-16 pb-16 pl-5 md:pl-14 pr-5 md:pr-10 text-white ">
          {children}
        </main>
      </section>
    </>
  );
}
