import '@/helper/swipers/galeri.css';
import FotoDummy from '@/public/assets/img/FotoDummy.png';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleDown, FaAngleRight, FaYoutube } from 'react-icons/fa';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GaleryProjectProps {
  index: number;
  title: string;
  pictures: string[];
  youtube: string | null;
  activeId: number;
  handleActiveId: (id: number) => void;
}

const GaleryProject: React.FC<GaleryProjectProps> = ({
  index,
  title,
  pictures,
  youtube,
  handleActiveId,
  activeId,
}) => {
  return (
    <motion.div
      key={index}
      layout="size"
      transition={{ layout: { duration: 0.1, type: 'just' } }}
      className="w-full"
    >
      <motion.div
        layout="position"
        className="w-full rounded-full py-2 px-8 flex gap-8 items-center self-stretch glassmorphism-card-designgraphic before:rounded-full cursor-pointer"
        key={index}
        onClick={() => handleActiveId(index)}
      >
        {activeId == index && (
          <FaAngleDown
            onClick={() => handleActiveId(index)}
            color="white"
            size={30}
            className="cursor-pointer"
          />
        )}
        {activeId !== index && (
          <FaAngleRight
            onClick={() => handleActiveId(index)}
            color="white"
            size={30}
            className="cursor-pointer z-10"
          />
        )}
        <h1 className="text-base md:text-lg font-bold text-white">{title}</h1>
      </motion.div>
      <AnimatePresence>
        {activeId == index && (
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
              className="galery-project"
            >
              {pictures.map((picture) => (
                <SwiperSlide className="w-full md:w-2/5" key={picture}>
                  <Image
                    src={FotoDummy}
                    alt="Kegiatan Cinematography"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {youtube !== null && (
              <Link
                href={youtube}
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
  );
};

export default GaleryProject;
