'use client';
import Head from '@/app/head';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { HiOutlineCheckCircle } from 'react-icons/hi';

export default function page() {
  const searchParams = useSearchParams();
  return (
    <>
      <Head title="Terimakasih Telah Mendaftar" />

      <div
        className={`bg-gradient-to-br from-[#661193] from-[0%] via-[#2F1F89FC] via-[67%] to-[#22185B] to-[100%] h-screen w-screen flex justify-center items-center relative p-5 md:p-0`}
      >
        <div
          className={` relative glassmorphism backdrop-filter backdrop-blur-lg shadow-lg w-auto md:w-[1000px] h-auto rounded-3xl before:rounded-3xl`}
        >
          <HiOutlineCheckCircle className=" text-[100px] md:text-[168px] text-[#D9FDBE] text-center block mx-auto my-8 md:my-10" />
          <div className=" px-5 md:px-16">
            <h1 className=" text-sm md:text-4xl text-white font-bold text-center mx-0 md:mx-16">
              Terimakasih {searchParams.get('nama')}, tolong tunggu sampai kami
              memverifikasi data diri anda
            </h1>
          </div>
          <p className=" text-[#C8C8C8] text-center text-xs md:text-[16px] px-5 md:px-0 pt-5">
            Setelah data diri anda terverifikasi, kami akan mengirimkan email
            verifikasi untuk akun orbit anda{' '}
          </p>
          <div className=" px-5 md:px-0">
            <button
              title="button"
              className=" block mx-auto border-[1px] border-white rounded-3xl w-full md:w-[597px] p-2 md:p-3 text-center text-white mt-8 mb-10 md:mb-[90px] text-sm md:text-lg"
            >
              <Link href={'/'}>Kembali ke Beranda</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
