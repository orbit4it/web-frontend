import React from 'react';
import styles from '../../../helper/page.module.css';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import Link from 'next/link';

export default function page() {
  return (
    <div
      className={`${styles.gradientVerifyCard} h-screen w-screen flex justify-center items-center relative`}
    >
      <div
        className={` relative bg-white/20 backdrop-filter backdrop-blur-lg shadow-lg w-auto md:w-[1000px] h-auto border-[1px] border-white rounded-3xl`}
      >
        <HiOutlineCheckCircle className=" text-[168px] text-[#D9FDBE] text-center block mx-auto my-10" />
        <div className=" px-16">
          <h1 className=" text-4xl text-white font-bold text-center mx-16">
            Thank you Azarel Lazuardi Aditya, please wait until we verify your
            identity
          </h1>
        </div>
        <p className=" text-[#C8C8C8] text-center text-[16px] pt-5">
          Once your identity is verified, we will give you an account
          verification email{' '}
        </p>
        <button
          title="button"
          className=" block mx-auto border-[1px] border-white rounded-3xl w-[597px] p-3 text-center text-white mt-8 mb-[90px]"
        >
          <Link href={'/login'}>Back To Home Page</Link>
        </button>
      </div>
    </div>
  );
}
