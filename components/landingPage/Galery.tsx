import Image from 'next/image';
import { useState } from 'react';
import {
  FreeMode,
  Navigation,
  Scrollbar,
  Swiper as SwiperType,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
// custom css
import '@/helper/swipers/thumbs.css';

const images = [
  '/assets/img/galeri/galeri2.png',
  '/assets/img/galeri/galeri3.png',
  '/assets/img/galeri/galeri1.png',
  '/assets/img/galeri/galeri4.png',
  '/assets/img/galeri/galeri5.png',
  '/assets/img/galeri/galeri6.png',
  '/assets/img/galeri/galeri7.png',
  '/assets/img/galeri/galeri9.png',
  '/assets/img/galeri/galeri10.png',
];

const Galery = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperType | null>(null);

  return (
    <>
      {/* Shown picture */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        thumbs={{ swiper: activeThumb }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="shown-image"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              alt="random picture"
              src={image}
              width={500}
              height={500}
              className="w-full h-full object-fill object-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Picture */}
      <Swiper
        scrollbar={{ el: '.scrollbar' }}
        onSwiper={setActiveThumb}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        modules={[Navigation, Thumbs, Scrollbar]}
        className="thumbs-image cursor-pointer"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full absolute top-0 left-0 bg-black/50"></div>
            <Image
              alt="random picture"
              src={image}
              width={500}
              height={500}
              className="w-full h-full object-fill object-top"
            />
          </SwiperSlide>
        ))}
        <div className="scrollbar"></div>
      </Swiper>
    </>
  );
};

export default Galery;
