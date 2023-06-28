// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "./assets/Logo.png";
import Foto from "./assets/FotoUtama.png";
import VideoActivity from "@/components/VideoActivity";

export default function page() {
  return (
    <div className="bg-[#12024E]">
    <div className="h-screen flex flex-col text-serat bg-home bg-cover bg-no-repeat lg:bg-cover">
      {/* <Navbar /> */}
      <div className="flex-none h-[30%]"></div>
      {/*Section*/}
      <div className="flex-grow bg-warnaDivisi rounded-t-[63px] px-10 lg:px-0">
        <div className="lg:w-[1050px] mx-auto text-white">
          <div className="flex items-center pt-[50px] space-x-5">
            <Image src={Logo} alt="Logo"/>
            <div>
              <h1 className="lg:text-[64px] font-bold opacity-30 text-4xl">
                WEB DEVELOPMENT
              </h1>
              <p className="opacity-30 mt-5">#Developer #Coding #Frontend #Backend</p>
            </div>
          </div>
          <div className="lg:flex mt-10 justify-between">
            <p className="font-light w-[500px] truncate whitespace-normal break-words mx-auto lg:mx-0">
            Web Development adalah divisi yang dapat<br />mengembangkan, membuat, dan memelihara sebuah website. Hal ini melibatkan perancangan tampilan, pengembangan kode, dan pengelolaan basis data.
            </p>
            <Image src={Foto} alt="Foto Utama" className="mx-auto mt-10 lg:mx-0 lg:mt-0"/>
          </div>
          <div className="bg-warnaExpand w-auto my-14 py-5 px-8 rounded-[40px] shadow-md">
            <select
              value="2023"
              className="py-2 px-3 bg-whiteTransparent rounded-[40px] border border-gray-300"
            >
              <option value="">2023</option>
              <option value="option1">2022</option>
              <option value="option2">2021</option>
              <option value="option3">2020</option>
            </select>
            <div className="space-y-5 mt-6">
              <VideoActivity title="Video Profile SMKN 4 Bandung"/>
              <VideoActivity title="Video Profile Orbit"/>
              <VideoActivity title="Foto SMKN 4 Bandung"/>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
    </div>
  );
}
