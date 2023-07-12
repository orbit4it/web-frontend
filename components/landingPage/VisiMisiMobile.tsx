import '@/helper/swipers/visiMisi.css';
import Image from 'next/image';
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const VisiMisiMobile = () => {
  return (
    <Swiper
      className="visimisi-swiper"
      effect={'coverflow'}
      initialSlide={1}
      centeredSlides={true}
      loop={false}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
      }}
      modules={[Pagination, EffectCoverflow]}
    >
      <SwiperSlide>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Image
            src={'/assets/logo/Rocket.png'}
            alt="Target Icon"
            width={100}
            height={100}
            className="w-32 mb-10"
          />
          <fieldset className=" bg-primary border-[1px] border-white border-opacity-50 w-96 h-auto py-1 px-10 md:h-[180px] rounded-full text-white">
            <legend className=" px-5 block mx-auto font-bold text-xl">
              Visi
            </legend>
            <p className="text-xs pb-2">
              Mencetak anggota ORBIT sesuai degan bidangnya unggul dan
              meningkatkan potensi anggota ORBIT sesuai dengan bidang divisinya.
            </p>
          </fieldset>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mySwiper-slider">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Image
            src={'/assets/logo/Target.png'}
            alt="Target Icon"
            width={100}
            height={100}
            className="w-32 mb-10"
          />
          <fieldset className=" bg-primary border-[1px] border-white border-opacity-50 w-96 h-auto py-1 px-10 md:h-[180px] rounded-full text-white">
            <legend className=" px-5 block mx-auto font-bold text-xl">
              Misi
            </legend>
            <p className="text-xs pb-2">
              1. Meningkatkan komunikasi baik antara anggota aktif dengan alumni
              <br />
              2. Menciptakan lingkungan yang nyaman, efektif, dan efisien
            </p>
          </fieldset>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mySwiper-slider">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Image
            src={'/assets/logo/Gift.png'}
            alt="Target Icon"
            width={100}
            height={100}
            className="w-32 mb-10"
          />
          <fieldset className=" bg-primary border-[1px] border-white border-opacity-50 w-96 h-auto py-1 px-10 md:h-[180px] rounded-full text-white">
            <legend className=" px-5 block mx-auto font-bold text-xl">
              Values
            </legend>
            <p className="text-xs pb-2">
              ORBIT dapat mengembangkan kemampuan siswa dalam mencapai tujuan
              bersama yang lebih efektif dan efisien.
            </p>
          </fieldset>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default VisiMisiMobile;
