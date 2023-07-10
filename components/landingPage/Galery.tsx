import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import the type definition for Swiper
import { Swiper as SwiperType } from 'swiper';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { GaleryStyles } from '@/helper/interfaces';

const Galery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null); // Use SwiperType as the type

    const galeryStyles: GaleryStyles = {
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    };

    return (
        <>
            {/* Your Swiper component */}
            <Swiper
                style={galeryStyles}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-full max-w-screen-sm"
            >
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri4.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri5.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri6.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri7.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri8.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri9.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri10.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri11.png" />
                </SwiperSlide>
            </Swiper>

            {/* Another Swiper component */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full max-w-screen-sm"
            >
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri4.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri5.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri6.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri7.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri8.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri9.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri10.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/img/galeri/galeri11.png" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Galery;
