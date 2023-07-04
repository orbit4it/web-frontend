'use client';
import React, { useEffect, useState } from 'react';
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
  const [nis, setNis] = useState('');
  const [divisi, setDivisi] = useState('');
  const [motivasi, setMotivasi] = useState('');
  const [motivasiColor, setMotivasiColor] = useState('');
  const [error, setError] = useState(false);

  const router = useRouter();
  const handleEmail = (e: string) => {
    setEmail(e);
  };
  const handlePass = (e: string) => {
    setPassword(e);
  };
  const handleNis = (e: string) => {
    setNis(e);
  };

  const handleMotivasiColor = () => {
    if (motivasi.length >= 50 && motivasi.length <= 80) {
      setMotivasiColor('warning');
    } else if (motivasi.length >= 80) {
      setMotivasiColor('danger');
    } else {
      setMotivasiColor('white');
    }
  };

  useEffect(() => {
    handleMotivasiColor();
  }, [motivasi]);

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
      onchange: handlePass,
      optional: false,
    },
    {
      type: 'text',
      placeholder: 'NIS',
      required: false,
      labelText: 'NIS',
      onchange: handleNis,
      optional: true,
    },
  ];

  return (
    <div className=" flex flex-row-reverse items-center justify-between text-white relative">
      <div className={` h-screen w-full`}>
        <div>
          <div
            className={`${styles.gradientLogin} w-full h-screen flex flex-col justify-center items-center relative`}
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
                  <div key={key} className=" mb-5 relative">
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
                  className={` ${divisi ? ' border-white text-white' : ''}
          'peer py-2 px-3 border-[#75629A] border-[1px] rounded-lg bg-transparent outline-none w-[350px] text-[#75629A]
        `}
                  onChange={(e) => {
                    setDivisi(e.target.value);
                  }}
                >
                  <option value="" className=" text-white bg-[#75629A]">
                    Divisi yang diminati
                  </option>
                  <option
                    className=" text-white bg-[#75629A]"
                    value="Web Development"
                  >
                    Web Development
                  </option>
                  <option
                    className=" text-white bg-[#75629A]"
                    value="Game Development"
                  >
                    Game Development
                  </option>
                  <option
                    className=" text-white bg-[#75629A]"
                    value="Cinematography"
                  >
                    Cinematography
                  </option>
                  <option
                    className=" text-white bg-[#75629A]"
                    value="Graphic Design"
                  >
                    Graphic Design
                  </option>
                  <option
                    className=" text-white bg-[#75629A]"
                    value="IT Support"
                  >
                    IT Support
                  </option>
                </select>
              </div>
              <div className=" relative">
                <textarea
                  title="Motivasi"
                  placeholder="Motivasi"
                  onChange={(e) => {
                    setMotivasi(e.target.value);
                  }}
                  className={` border-${motivasiColor} resize-none w-[350px] h-[100px] bg-transparent border-[1px] rounded-lg mt-5 p-3 outline-none relative z-0 peer placeholder-shown:border-[#75629A] placeholder-transparent placeholder-shown:z-10`}
                />
                <label
                  className={` text-${motivasiColor} absolute left-3 top-2 px-2 bg-[#221538]  peer-placeholder-shown:text-[#75629A] peer-placeholder-shown:top-8 peer-placeholder-shown:bg-transparent duration-200`}
                >
                  Motivasi <span className=" text-purple">*</span>
                </label>
                <p
                  className={` ${
                    motivasiColor == 'white'
                      ? ` text-[#75629A]`
                      : `text-${motivasiColor}`
                  }  absolute  text-xs right-3 bottom-4`}
                >
                  {motivasi.length}/100
                </p>
              </div>
              <div className=" mt-8">
                <button
                  type="submit"
                  className=" border-2 border-purple p-2 w-[350px] bg-transparent text-purple font-bold text-center rounded-full hover:bg-purple hover:text-white duration-200"
                >
                  Daftar
                </button>
              </div>
              <h1 className=" text-sm text-center mt-5">
                Sudah punya akun?{' '}
                <span className=" text-[#6587FF]">
                  <Link href={'/login'}>Masuk</Link>
                </span>
              </h1>
            </form>
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
        </div>
      </div>
      <div className=" w-[634px] h-screen bg-primary hidden md:block">
        <div className=" bg-homeFull bg-[length:100%_100%] h-screen w-full"></div>
      </div>
    </div>
  );
}
