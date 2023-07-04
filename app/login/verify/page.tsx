'use client';
import React, { useState } from 'react';
import styles from '../../../helper/page.module.css';
import { HiOutlineCheckCircle } from 'react-icons/hi';

export default function page() {
  const [password, setPassword] = useState('');
  return (
    <div
      className={`${styles.gradientVerifyCard} h-screen w-screen flex justify-center items-center relative`}
    >
      <div
        className={` relative bg-white/20 backdrop-filter backdrop-blur-lg shadow-lg w-auto md:w-[1000px] h-auto border-[1px] border-white rounded-3xl`}
      >
        <div className=" mt-16">
          <h1 className=" text-4xl text-white font-bold text-center mx-16">
            Congratulations! You are part of Orbit now
          </h1>
        </div>
        <p className=" text-[#C8C8C8] text-center text-lg pt-5">
          Please create your password to join our web community
        </p>
        <form
          action=""
          className=" flex flex-col items-center justify-center gap-5 mt-10 "
        >
          <div>
            <input
              type="password"
              title="password"
              placeholder="Account Password"
              className=" outline-none w-[400px] bg-[#FDFDFD] bg-opacity-[0.35] rounded-3xl p-3 text-[#D7D7D7]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              title="password"
              placeholder="Re-Type Password"
              className=" outline-none w-[400px] bg-[#FDFDFD] bg-opacity-[0.35] rounded-3xl p-3 text-[#D7D7D7]"
            />
          </div>
          <div className=" mt-14">
            <button
              title="button"
              className=" block mx-auto border-[1px] border-white rounded-3xl w-[300px] p-2 text-center text-white text-lg font-bold mb-16"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
