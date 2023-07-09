import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

const DivisionData = [
  {
    image: '/assets/img/divisi/webDev.png',
    name: 'Web Development',
  },
  {
    image: '/assets/img/divisi/DG.png',
    name: 'Design Graphic',
  },
  {
    image: '/assets/img/divisi/GameDev.png',
    name: 'Game Development',
  },
  {
    image: '/assets/img/divisi/Cinema.png',
    name: 'Cinematography',
  },
  {
    image: '/assets/img/divisi/ITSupp.png',
    name: 'It-support',
  },
];

export const ElementDivision: React.FC<DivisionProps> = (props) => {
  return (
    <div
      className="grid justify-items-center rounded-5xl px-7 py-10 md:px-14 md:py-20 w-fit"
      style={{
        background:
          'linear-gradient(180deg, rgba(239, 237, 237, 0.00) 0%, rgba(130, 4, 255, 0.55) 100%)',
      }}
    >
      <Image
        src={props.image}
        width={500}
        height={500}
        className="h-auto w-24 md:w-48"
        alt="divisi ORBIT"
        priority
      />
      <h3 className="text-center font-bold text-white text-xl md:text-3xl w-40 md:w-56 break-words">
        {props.name}
      </h3>
    </div>
  );
};

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { DivisionProps, SwiperStyles } from '@/helper/interfaces';

const Division = () => {
  const swiperStyles: SwiperStyles = {
    '--swiper-pagination-color': '#EE2ED1',
    // '--swiper-pagination-bullet-inactive-color': '#757575',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-size': '10px',
    '--swiper-pagination-bullet-width': '10px',
    '--swiper-pagination-bullet-height': '10px',
  };
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        style={swiperStyles}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {DivisionData &&
          DivisionData.map((data, id) => {
            return (
              <SwiperSlide
                key={id}
                style={{ width: 'fit-content' }}
                className="w-fit"
              >
                <ElementDivision name={data.name} image={data.image} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Division;
