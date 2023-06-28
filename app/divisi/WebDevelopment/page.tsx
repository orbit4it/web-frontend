'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
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
        className="w-full rounded-full py-2 px-8 flex gap-8 items-center self-stretch glassmorphism-card-itsupport before:rounded-full cursor-pointer"
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
      <header className="w-max flex items-center gap-2">
        <div className="w-24 h-24 rounded-full glassmorphism-gamedev before:rounded-full"></div>
        <div className="ml-4">
          <div className="h-max overflow-hidden">
            <motion.h1
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              className="text-6xl font-bold text-white opacity-50  uppercase"
            >
              Web Development
            </motion.h1>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-1 text-base text-white opacity-50"
          >
            <motion.p variants={item} layout="position">
              #Developer
            </motion.p>
            <motion.p variants={item} layout="position">
              #Coding
            </motion.p>
            <motion.p variants={item} layout="position">
              #Game
            </motion.p>
          </motion.div>
        </div>
      </header>

      <section className="w-full mt-14 flex gap-16">
        <p className="w-1/2 text-base text-white leading-relaxed">
          Game Development adalah divisi yang dapat membuat dan pengembangan
          sebuah aplikasi. Hal ini melibatkan serangkaian tahap, termasuk desain
          konseptual, pengembangan perangkat lunak, pengujian, dan penyelesaian.
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

      <section className="w-full h-[90vh] rounded-2xl mt-28 p-10 bg-[#DD217B4D] flex flex-col gap-6 items-start overflow-hidden  relative">
        <motion.div
          layout="size"
          style={{ borderRadius: '12px' }}
          className={`absolute top-0 left-0 mt-10 ml-10 z-20 rounded-full py-1 px-6 flex flex-col gap-2 items-center glassmorphism-card-gamedev ${
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
