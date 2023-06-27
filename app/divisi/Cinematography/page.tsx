'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { FreeMode } from 'swiper';
import FotoDummy from '@/public/assets/img/FotoDummy.png';
import { FaAngleDown, FaAngleRight, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.css';

interface GaleryType {
  index: number;
  title: string;
  pictures: Array<string>;
  youtube: string | null;
}

interface Picture {
  img: string;
}

interface Error {
  err: boolean;
  message: string;
}
export default function page() {
  const [activeId, setActiveId] = useState<number>(1);
  const [galery, setGalery] = useState<Array<GaleryType>>([
    {
      index: 1,
      title: 'Video Profile SMKN 4 Bandung',
      pictures: [
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
      ],
      youtube: 'https://youtu.be/dDxe7CBgbAs',
    },
    {
      index: 2,
      title: 'Video Profile ORBIT',
      pictures: [
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
      ],
      youtube: 'https://youtu.be/dDxe7CBgbAs',
    },
    {
      index: 3,
      title: 'Foto SMKN 4 Bandung',
      pictures: [
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
        '/assets/img/FotoDummy.png',
      ],
      youtube: 'https://youtu.be/dDxe7CBgbAs',
    },
  ]);

  const mapGalery = galery.map((item) => (
    <motion.div
      layout="size"
      transition={{ layout: { duration: 0.1, type: 'just' } }}
      className="w-full"
    >
      <motion.div
        layout="position"
        className="w-full rounded-full py-2 px-8 flex gap-8 items-center self-stretch glassmorphism-card cursor-pointer"
        key={item.index}
        onClick={() => setActiveId(item.index)}
      >
        {activeId == item.index && (
          <FaAngleDown
            onClick={() => setActiveId(item.index)}
            color="white"
            size={30}
            className="cursor-pointer"
          />
        )}
        {activeId !== item.index && (
          <FaAngleRight
            onClick={() => setActiveId(item.index)}
            color="white"
            size={30}
            className="cursor-pointer z-10"
          />
        )}
        <h1 className="text-lg font-bold text-white">{item.title}</h1>
      </motion.div>
      <AnimatePresence>
        {activeId == item.index && (
          <motion.div
            layout="position"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2, type: 'tween' }}
            className="w-full h-[250px] pt-2"
          >
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {item.pictures.map((picture) => (
                <SwiperSlide className="w-2/5">
                  <Image
                    src={picture}
                    alt="Kegiatan Cinematography"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {item.youtube !== null && (
              <Link
                href={item.youtube}
                className="w-max mt-4 flex gap-2 items-center"
              >
                <FaYoutube color="white" size={20} />
                <p className="text-sm font-bold text-white">
                  Lihat di Youtube!
                </p>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ));
  return (
    <>
      <header className="w-max flex items-center gap-2">
        <div className="w-24 h-24 rounded-full glassmorphism"></div>
        <div className="">
          <h1 className="text-6xl font-bold text-white opacity-50 uppercase">
            Cinematography
          </h1>
          <div className="flex gap-1 text-base text-white opacity-50">
            <p>#Seni</p>
            <p>#Fotografi</p>
            <p>#VideoGrafi</p>
          </div>
        </div>
      </header>

      <section className="w-full mt-14 flex gap-16">
        <p className="w-1/2 text-base text-white leading-relaxed">
          Cinematography adalah divisi yang menggunakan teknik gabungan dari
          seni dan teknologi. Hal ini melibatkan penggunaan kamera, pencahayaan,
          komposisi visual, dan elemen-elemen lain untuk menciptakan estetika
          visual yang diinginkan.
        </p>
        <div className="w-1/2 h-72 rounded-lg overflow-hidden">
          <Image
            src={FotoDummy}
            alt="Kegiatan Cinematography"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="w-full h-[90vh] rounded-2xl mt-28 p-10 bg-[#5221DD4D] flex flex-col gap-6 items-start overflow-hidden  relative">
        <div className="rounded-full py-1 px-6 flex gap-2 items-center glassmorphism-card">
          <h3 className="text-base font-bold text-white">2023</h3>
          <FaAngleDown color="white" className="w-5 cursor-pointer" />
        </div>
        <LayoutGroup>{mapGalery}</LayoutGroup>
      </section>
    </>
  );
}
