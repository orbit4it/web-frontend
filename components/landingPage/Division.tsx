import { DivisionProps } from '@/helper/interfaces';
import Image from 'next/image';
import React from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonLandingPage from '../ButtonLandingPage';

import 'swiper/css';
import 'swiper/css/navigation';
// custom swiper css
import '@/helper/swipers/divisions.css';

const imageLink = [
  '/assets/img/divisi/WebDev.png',
  '/assets/img/divisi/DG.png',
  '/assets/img/divisi/GameDev.png',
  '/assets/img/divisi/Cinema.png',
  '/assets/img/divisi/ITSupp.png',
];

const DivisionData = [
  {
    image: '/assets/img/divisi/WebDev.png',
    name: 'Web Development',
    link: 'web-development',
  },
  {
    image: '/assets/img/divisi/DG.png',
    name: 'Design Graphic',
    link: 'design-graphic',
  },
  {
    image: '/assets/img/divisi/GameDev.png',
    name: 'Game Development',
    link: 'game-development',
  },
  {
    image: '/assets/img/divisi/Cinema.png',
    name: 'Cinematography',
    link: 'cinematography',
  },
  {
    image: '/assets/img/divisi/ITSupp.png',
    name: 'It-support',
    link: 'it-support',
  },
];

export const ElementDivision: React.FC<DivisionProps> = (props) => {
  return (
    <div className="w-full 2xl:h-[575px] md:h-[70vh] h-[50vh] bg-gradient-to-t from-[#8204ff73] from-[0%] to-transparent to-100%] flex flex-col justify-center items-center rounded-5xl pt-10 ">
      <div className="w-32 h-24 md:w-44 md:h-32 mb-10">
        <Image
          src={props.image}
          width={100}
          height={100}
          className="w-full h-auto"
          alt="divisi ORBIT"
          priority
        />
      </div>
      <h3 className="text-center font-bold text-white text-xl md:text-2xl w-40 md:w-52 mb-12 mt-10 ">
        {props.name}
      </h3>
      <ButtonLandingPage
        link={`/divisi/${props.link}`}
        title="Lihat Divisi"
        textSize="text-xs"
        animate={false}
        viewportOnce={false}
      />
    </div>
  );
};

const Division = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return (
        '<span class="' +
        className +
        '"}>' +
        '<img src="' +
        imageLink[index] +
        '" width="20" height="20" alt="divisi ORBIT" />' +
        '</span>'
      );
    },
  };

  return (
    <>
      <Swiper
        centeredSlides={true}
        initialSlide={2}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            effect: 'coverflow',
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            },
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={0}
        loop={false}
        modules={[Pagination, Navigation, EffectCoverflow]}
        pagination={pagination}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="division-swiper"
      >
        {DivisionData &&
          DivisionData.map((data, id) => {
            return (
              <SwiperSlide key={id}>
                <ElementDivision
                  link={data.link}
                  name={data.name}
                  image={data.image}
                />
              </SwiperSlide>
            );
          })}
        <div className="swiper-button-next">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 70 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 1.16749L69.008 41L0.75 80.8325V1.16749Z"
              fill="url(#paint0_linear_19_769)"
              stroke="url(#paint1_linear_19_769)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_19_769"
                x1="70"
                y1="12.8"
                x2="-23.7745"
                y2="87.0215"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8204FF" stop-opacity="0.8" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_19_769"
                x1="75.58"
                y1="13.74"
                x2="-2.93514"
                y2="94.2108"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#16012C" stop-opacity="0.55" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="swiper-button-prev">
          <svg
            width="70"
            height="82"
            viewBox="0 0 70 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.25 80.8325L0.992031 41L69.25 1.1675V80.8325Z"
              fill="url(#paint0_linear_19_770)"
              stroke="url(#paint1_linear_19_770)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_19_770"
                x1="-4.15742e-07"
                y1="69.2"
                x2="93.7745"
                y2="-5.0215"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8204FF" stop-opacity="0.8" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_19_770"
                x1="-5.58"
                y1="68.26"
                x2="72.9351"
                y2="-12.2108"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#16012C" stop-opacity="0.55" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Swiper>
    </>
  );
};

export default Division;
