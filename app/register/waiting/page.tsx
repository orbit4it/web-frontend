'use client';
import React from 'react';
import styles from '../../../helper/page.module.css';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

export default function page() {
  const searchParams = useSearchParams();

  axios({
    url: 'http://203.194.113.238:8000/graphql',
    method: 'post',
    data: {
      query: ``,
    },
  });

  return (
    <div
      className={`${styles.gradientVerifyCard} h-screen w-screen flex justify-center items-center relative p-5 md:p-0`}
    >
      <div
        className={` relative bg-white/20 backdrop-filter backdrop-blur-lg shadow-lg w-auto md:w-[1000px] h-auto border-[1px] border-white rounded-3xl`}
      >
        <HiOutlineCheckCircle className=" text-[100px] md:text-[168px] text-[#D9FDBE] text-center block mx-auto my-8 md:my-10" />
        <div className=" px-5 md:px-16">
          <h1 className=" text-sm md:text-4xl text-white font-bold text-center mx-0 md:mx-16">
            Thank you {searchParams.get('nama')}, please wait until we verify
            your identity
          </h1>
        </div>
        <p className=" text-[#C8C8C8] text-center text-xs md:text-[16px] px-5 md:px-0 pt-5">
          Once your identity is verified, we will give you an account
          verification email{' '}
        </p>
        <div className=" px-5 md:px-0">
          <button
            title="button"
            className=" block mx-auto border-[1px] border-white rounded-3xl w-full md:w-[597px] p-2 md:p-3 text-center text-white mt-8 mb-10 md:mb-[90px] text-sm md:text-lg"
          >
            <Link href={'/login'}>Back To Home Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
