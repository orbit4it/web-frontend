'use client';
import React, { useState } from 'react';
import styles from '../../helper/page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import CredentialsInput from '@/components/LoginRegister/CredentialsInput';
import { motion as m } from 'framer-motion';

export default function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleEmail = (e: string) => {
    setEmail(e);
  };
  const handlePass = (e: string) => {
    setPassword(e);
  };

  const halfData = [
    {
      type: 'text',
      placeholder: 'Nama',
      required: true,
      labelText: 'Nama Lengkap',
      onchange: handleEmail,
      optional: false,
    },
    {
      type: 'text',
      placeholder: 'Kelas',
      required: true,
      labelText: 'Kelas',
      onchange: handleEmail,
      optional: false,
    },
    {
      type: 'text',
      placeholder: 'NIS',
      required: false,
      labelText: 'NIS',
      onchange: handleEmail,
      optional: true,
    },
  ];

  return (
    <div className=" flex flex-row-reverse items-center justify-between text-white relative">
      <div className={` h-screen w-full`}>
        <div>
          <div
            className={`${styles.gradientLogin} w-full h-screen flex flex-col justify-center items-center`}
          >
            <div className="flex items-center gap-5">
              <Image
                src={'/assets/logo/LogoPrimary.png'}
                width={99}
                height={99}
                alt="logo"
              />
              <h1 className=" text-6xl font-bold">Daftar</h1>
            </div>
            <form action="" className=" mt-10">
              {halfData.map((data, key) => {
                return (
                  <div key={key} className=" mb-6 relative">
                    <CredentialsInput
                      type={data.type}
                      placeholder={data.placeholder}
                      required={data.required}
                      labelText={data.labelText}
                      onchange={data.onchange}
                    />
                    <p
                      className={`${
                        data.optional ? ' block' : 'hidden'
                      } absolute right-3 top-5 text-xs text-[#75629A]`}
                    >
                      (opsional)
                    </p>
                  </div>
                );
              })}
              <div>
                <select
                  name="divisi"
                  id="divisi"
                  title="Divisi"
                  className={`
          'peer py-2 px-3 border-[#75629A] border-[1px] rounded-lg bg-transparent outline-none w-[350px]
        `}
                >
                  <option value="">Divisi yang diminati</option>
                  <option value="">Web Development</option>
                  <option value="">Game Development</option>
                  <option value="">Cinematography</option>
                  <option value="">Graphic Design</option>
                  <option value="">IT Support</option>
                </select>
              </div>
              <div className=" mt-10">
                <button
                  type="submit"
                  className=" border-2 border-purple p-2 w-[350px] bg-transparent text-purple font-bold text-center rounded-full hover:bg-purple hover:text-white duration-200"
                >
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
