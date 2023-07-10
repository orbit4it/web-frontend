'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BsSearch, BsBell } from 'react-icons/bs';

interface UserType {
  name: string;
  class: string;
  division: string;
  photo: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType>({
    name: 'Azarel Lazuardi Aditya',
    class: 'XI PPLG 2',
    division: 'Web Development',
    photo:
      'http://localhost:3000/_next/image?url=%2Fassets%2Fimg%2FAvatarDummy.png&w=256&q=75',
  });
  return (
    <>
      <section className="md:ml-[20%]">
        <header className="fixed top-0 right-0 w-full h-16 md:h-14 px-5 py-2 md:px-10 md:py-4 flex items-center gap-5 ">
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
        <main className="max-w-[1440px] 2xl:mx-auto bg-d-primary mt-16 pl-5 md:pl-14 pr-5 md:pr-10 text-white ">
          {children}
        </main>
      </section>
    </>
  );
}
