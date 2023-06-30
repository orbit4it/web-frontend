'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { FreeMode } from 'swiper';
import FotoDummy from '@/public/assets/img/FotoDummy.png';
import Logo from '@/public/assets/logo/Cinema.png';
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

export default function page() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, screenY: 20 },
    show: { opacity: 1, screenY: 0 },
  };

  const [optionHovered, setOptionHovered] = useState<number>(0);

  const [yearOptions, setYearOptions] = useState<Array<number>>([
    2023, 2022, 2021, 2020,
  ]);
  const [showYearOptions, setShowYearOptions] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<number>();
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

  const lastYear = yearOptions[0];
  useEffect(() => {
    setSelectedYear(lastYear);
  }, []);

  const mapGalery = galery.map((item) => (
    <motion.div
      layout="size"
      transition={{ layout: { duration: 0.1, type: 'just' } }}
      className="w-full"
    >
      <motion.div
        layout="position"
        className="w-full rounded-full py-2 px-8 flex gap-8 items-center self-stretch glassmorphism-card-cinem before:rounded-full cursor-pointer"
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
        <h1 className="text-base md:text-lg font-bold text-white">
          {item.title}
        </h1>
      </motion.div>
      <AnimatePresence>
        {activeId == item.index && (
          <motion.div
            layout="position"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2, type: 'tween' }}
            className="w-full h-[200px] md:h-[250px] pt-2"
          >
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {item.pictures.map((picture) => (
                <SwiperSlide className="w-full md:w-2/5">
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

  const mapYearOptions = yearOptions.map((year) => (
    <>
      <motion.li
        variants={item}
        layout="position"
        onMouseEnter={() => setOptionHovered(year)}
        onMouseLeave={() => setOptionHovered(0)}
        onClick={() => {
          setSelectedYear(year);
          setShowYearOptions(false);
        }}
        value={year}
        key={year}
      >
        <motion.p
          style={{ color: year == selectedYear ? '#EE2ED1' : 'white' }}
          className=" text-base text-white cursor-pointer"
        >
          {year}
        </motion.p>
        <motion.div
          layout="size"
          style={{ width: optionHovered == year ? '100%' : '0' }}
          className="w-0 h-[.5px] bg-tertiary"
        />
      </motion.li>
    </>
  ));
  return (
    <>
      <header className="w-max md:flex items-center mx-auto pt-0 md:mx-0 md:gap-2 md:static">
        <div className="w-24 h-24 rounded-full relative flex items-center mx-auto -top-[40px] md:static glassmorphism-cinem before:rounded-full">
          <Image
            src={Logo}
            alt="Logo"
            className="flex relative items-center mx-auto"
          />
        </div>
        <div>
          <div className="h-max overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              className="text-3xl md:text-4xl font-bold opacity-30 text-white relative top-0 bottom-0 md:static"
            >
              CINEMATOGRAPHY
            </motion.h1>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-1 text-base relative mx-auto text-white opacity-50"
          >
            <motion.p variants={item} layout="position">
              #Seni
            </motion.p>
            <motion.p variants={item} layout="position">
              #Fotografi
            </motion.p>
            <motion.p variants={item} layout="position">
              #VideoGrafi
            </motion.p>
            <motion.p variants={item} layout="position">
              #Cinematic
            </motion.p>
          </motion.div>
        </div>
      </header>

      <section className="w-full md:mt-14 mt-10 md:flex gap-16 px-5">
        <p className="md:w-1/2 text-base text-center md:text-left text-white leading-relaxed">
          Cinematography adalah divisi yang menggunakan teknik gabungan dari
          seni dan teknologi. Hal ini melibatkan penggunaan kamera, pencahayaan,
          komposisi visual, dan elemen-elemen lain untuk menciptakan estetika
          visual yang diinginkan.
        </p>
        <div className="md:w-1/2 md:h-72 mt-8 md:mt-4 md:pt-0 rounded-lg overflow-hidden">
          <Image
            src={FotoDummy}
            alt="Kegiatan Cinematography"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="w-full h-[70vh] md:h-[90vh] rounded-2xl mt-10 md:mt-20 p-5 md:p-10 bg-[#5221DD4D] flex flex-col gap-6 items-start overflow-hidden  relative">
        <motion.div
          layout="size"
          style={{ borderRadius: '12px' }}
          className={`absolute top-0 left-0 mt-10 ml-6 md:ml-10 z-20 rounded-full py-1 px-6 flex flex-col gap-2 items-center glassmorphism-card-cinem ${
            showYearOptions ? 'before:rounded-[12px]' : 'before:rounded-full'
          }`}
        >
          <motion.div layout="position" className="flex gap-2 items-center">
            <h3 className="text-base font-bold text-white">{selectedYear}</h3>
            <FaAngleDown
              onClick={() => setShowYearOptions(!showYearOptions)}
              color="white"
              className="w-5 cursor-pointer"
            />
          </motion.div>
          {showYearOptions && (
            <AnimatePresence>
              <motion.ul
                layout
                variants={container}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.5 }}
              >
                {mapYearOptions}
              </motion.ul>
            </AnimatePresence>
          )}
        </motion.div>
        <div className="w-full mt-16 flex flex-col gap-6 items-start">
          <LayoutGroup>{mapGalery}</LayoutGroup>
        </div>
      </section>
    </>
  );
}
