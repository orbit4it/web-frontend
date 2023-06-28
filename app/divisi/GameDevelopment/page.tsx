// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';
import FotoUtama from '@/public/assets/img/FotoDummy.png';
// import VideoActivity from '@/components/VideoActivity';

export default function page() {
  return (
    <div className="bg-[#12024E]">
      <div className="bg-home h-screen bg-cover bg-no-repeat flex flex-col">
        <div className="flex-none h-[30%]"></div>
        {/* ini bawah */}
        <div className="flex-grow bg-darkPurp rounded-t-[63px] px-6">
          <div className="xl:w-[1050px] mx-auto text-white">
            <div className="xl:flex text-center xl:text-left items-center xl:pt-[65px] xl:space-x-5">
              {/* <Image
                src={Logo}
                alt="Logo"
                className="relative -top-12 mx-auto xl:mx-0 xl:static shadow-md"
              /> */}
              <div>
                <h1 className="text-4xl font-bold opacity-30">
                  GAME DEVELOPMENT
                </h1>
                <p className="opacity-30 mt-1">#Developer #Coding #Game</p>
              </div>
            </div>
            <div className="xl:flex mt-10 justify-between">
              <p className="font-light text-center xl:text-left">
                Game Development adalah divisi yang dapat membuat dan
                pengembangan sebuah aplikasi. Hal ini melibatkan serangkaian
                tahap, termasuk desain konseptual, pengembangan perangkat lunak,
                pengujian, dan penyelesaian.
              </p>
              <Image
                src={FotoUtama}
                alt="Foto Utama"
                className="my-14 xl:mt-0 mt-12 mx-auto xl:mx-0 shadow-md"
              />
            </div>
            <div className="bg-bgGameDev w-auto my-14 py-5 px-8 rounded-[40px] shadow-md">
              <select
                defaultValue="2023"
                className="py-2 px-3 bg-whiteTransparent rounded-[40px] border border-[#EE2ED1] border-opacity-40"
              >
                <option value="">2023</option>
                <option value="option1">2022</option>
                <option value="option2">2021</option>
                <option value="option3">2020</option>
              </select>
              <div className="space-y-5 mt-6">
                {/* <VideoActivity title="Video Profile SMKN 4 Bandung" />
                <VideoActivity title="Video Profile ORBIT" />
                <VideoActivity title="Foto SMKN 4 Bandung" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
