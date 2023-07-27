'use client';
import { Competition } from '@/helper/interfaces';
import Image from 'next/image';
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//  custom css
import '@/helper/swipers/informations.css';
type InformationCardProps = {
  informations: Competition[];
};

const InformationCard: React.FC<InformationCardProps> = ({ informations }) => {
  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      breakpoints={{
        320: {
          coverflowEffect: {
            rotate: 0,
            stretch: 90,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          },
        },
        768: {
          coverflowEffect: {
            rotate: 0,
            stretch: 130,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          },
        },
      }}
      slidesPerView={'auto'}
      initialSlide={1}
      centeredSlides={true}
      spaceBetween={0}
      className="informations"
    >
      {informations &&
        informations.map((information) => (
          <SwiperSlide key={information.id}>
            <div className="w-full h-full overflow-hidden rounded-xl bg-d-primary">
              <div className="w-full h-[90%]">
                <Image
                  src={information.poster || '/images/PosterPlacholder.jpg'}
                  alt="Poster Lomba"
                  width={300}
                  height={300}
                  className="flex bg-blend-screen mx-auto w-auto h-full"
                />
              </div>
              <div className="w-full px-4 md:px-7 py-2 h-[10%] bg-primary flex justify-between items-center">
                <h1
                  className="text-[0.5rem] md:text-xs 
                font-medium md:font-semibold"
                >
                  {information.title}
                </h1>
                <AiOutlineRight size={17} opacity={100} color="white" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      <div className="swiper-button-next">
        <AiOutlineRight size={17} opacity={100} color="white" />
      </div>
      <div className="swiper-button-prev">
        <AiOutlineLeft size={17} opacity={100} color="white" />
      </div>
    </Swiper>
  );
};

export default InformationCard;
