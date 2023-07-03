'use client';
import React from 'react';
import styles from '../../helper/page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import CredentialsInput from '@/components/LoginRegister/CredentialsInput';

export default function page() {
  const router = useRouter();
  return (
    <div className=" flex items-center justify-between text-white relative">
      <div className={`${styles.gradientLogin} h-screen w-full`}>
        <div>
          <div className=" w-full h-screen flex flex-col justify-center items-center">
            <div className="flex items-center gap-5">
              <Image
                src={'/assets/logo/LogoPrimary.png'}
                width={99}
                height={99}
                alt="logo"
              />
              <h1 className=" text-6xl font-bold">Masuk</h1>
            </div>
            <form action="" className=" mt-10">
              <CredentialsInput
                type="email"
                placeholder="Email"
                required={true}
                labelText="Email"
              />
              <CredentialsInput
                classname="mt-6"
                type="password"
                placeholder="Password"
                required={true}
                labelText="Kata sandi"
              />
              <div className=" mt-10">
                <button className=" border-2 border-purple p-2 w-[350px] bg-transparent text-purple font-bold text-center rounded-full hover:bg-purple hover:text-white duration-200">
                  Masuk
                </button>
              </div>
              <h1 className=" text-sm text-center mt-5">
                Belum punya akun?{' '}
                <span className=" text-[#6587FF]">
                  <Link href={'/register'}>Daftar</Link>
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
      <div className=" w-[634px] h-screen bg-primary hidden md:block">
        <div className=" bg-homeFull bg-[length:100%_100%] h-screen w-full"></div>
      </div>
      <div
        className=" flex gap-1  items-center text-white absolute bottom-5 left-5  cursor-pointer"
        onClick={(e) => {
          router.back();
        }}
      >
        <IoChevronBackOutline className=" mt-[2px]" />
        <h1 className=" text-sm">Kembali</h1>
      </div>
    </div>
  );
}
