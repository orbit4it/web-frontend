'use client';

import Option from '@/components/Option';
import GaleryProject from '@/components/divisionPage/GaleryProject';
import { container, item } from '@/helper/animate';
import FotoDummy from '@/public/assets/img/FotoDummy.png';
import Logo from '@/public/assets/logo/Cinema.png';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleRight, FaYoutube } from 'react-icons/fa';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';

interface GaleryType {
  index: number;
  title: string;
  pictures: Array<string>;
  youtube: string | null;
}

export default function page() {
  const [optionHovered, setOptionHovered] = useState<number>(0);
  console.log(optionHovered);

  const [yearOptions, setYearOptions] = useState<Array<number>>([
    2023, 2022, 2021, 2020,
  ]);
  const [showYearOptions, setShowYearOptions] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<number>();
  const [activeId, setActiveId] = useState<number>(1);
  const [galery, setGalery] = useState<Array<GaleryType>>([
    {
      index: 1,
      title: 'Under Construction',
      pictures: [
        '/FotoDummy.png',
        '/FotoDummy.png',
        '/FotoDummy.png',
        '/FotoDummy.png',
      ],
      youtube: 'https://youtu.be/dDxe7CBgbAs',
    },
    {
      index: 2,
      title: 'Under Construction',
      pictures: [
        '/FotoDummy.png',
        '/FotoDummy.png',
        '/FotoDummy.png',
        '/FotoDummy.png',
      ],
      youtube: 'https://youtu.be/dDxe7CBgbAs',
    },
    {
      index: 3,
      title: 'Under Construction',
      pictures: [
        '/FotoDummy.png',
        '/FotoDummy.png',
        '/FotoDummy.png',
        '/FotoDummy.png',
      ],
      youtube: 'https://youtu.be/dDxe7CBgbAs',
    },
  ]);

  const lastYear = yearOptions[0];
  useEffect(() => {
    setSelectedYear(lastYear);
  }, [lastYear]);

  const mapGalery = galery.map((project) => (
    <GaleryProject
      key={project.index}
      index={project.index}
      title={project.title}
      pictures={project.pictures}
      handleActiveId={setActiveId}
      activeId={activeId}
      youtube={project.youtube}
    />
  ));

  const mapYearOptions = yearOptions.map((year) => (
    <Option
      key={year}
      value={year}
      handleHovered={setOptionHovered}
      handleSelected={setSelectedYear}
      handleShowed={setShowYearOptions}
      selectedValue={selectedYear}
      optionHovered={optionHovered}
    />
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

          {showYearOptions == true && (
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
