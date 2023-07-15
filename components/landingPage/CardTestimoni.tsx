import { TestimoniProps } from '@/helper/interfaces';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// custom swiper css
import '@/helper/swipers/feedback.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimoniData = [
  {
    image:
      'https://media.licdn.com/dms/image/D5603AQHIFs1CkC4q-A/profile-displayphoto-shrink_800_800/0/1666520712370?e=1694044800&v=beta&t=yttXhLViykx2zEfdz1GnLYFhStJg7xfyvv_QRULasAs',
    message:
      '“ORBIT tuh punya aura magis tersendiri, makanya gak aneh kalau talenta terbaik Opat selalu lahir dari sini. Sukses tuh perpaduan preparation ketemu sama opportunity, pokoknya ga boleh pernah puas deh buat upgrade terus diri kamu di sisi akademik, projek, lomba, dan organisasi (ekskul), the sky is the limit.”',
    name: 'RAFKA IMANDA PUTRA',
    honor: 'Juara 1 TSDN 2022',
  },
  {
    image: '/assets/img/feedback/ganesh.png',
    message:
      '“Saya mengikuti ekskul Organization of Basic Information & Technology atau yang akrab disebut sebagai ORBIT. Dari sinilah saya mendapatkan berbagai macam wawasan dan insight baru. Pematerinya pun kakak kelas atau alumni yang memiliki berbagai teknik mengajar yang fun dan menarik sehingga menambah kenyamanan suasana belajar. Pokoknya, ORBIT tuh tempat yang tepat deh buat yang ingin belajar santai bareng tapi tetap nyerap ke otak.”',
    name: 'I Gede Krisna Ganesha Widhiarta',
    honor: 'Juara 3 LKS bidang Cyber Security',
  },
  {
    image: '/assets/img/feedback/emirsyah.png',
    message:
      '“Orbit menyenangkan, banyak belajar hal baru dan ketemu banyak temen-temen yang punya passion di bidang sama. Semoga kedepannya orbit bisa terus berinovasi.”',
    name: 'Muhammad Emirsyah',
    honor: 'Juara 2 Mage ITS',
  },
  {
    image:
      'https://media.licdn.com/dms/image/C5603AQEX_cE7L2myrA/profile-displayphoto-shrink_800_800/0/1584553974257?e=1692230400&v=beta&t=E9Vvx9skJvTX0C4kdOskFonVnDk45JJq7p2_KTnc7Nw',
    message:
      '“Bergabung dalam ORBIT dapat memfasilitasi pengembangan keahlian IT dan kompetensi personal siswa. Ini merupakan organisasi yang ideal untuk menumbuhkan keterampilan kritis, memperluas jaringan profesional, dan mempersiapkan siswa menghadapi tantangan industri modern.”',
    name: 'MUHAMMAD AGY NURWICAKSONO',
    honor: 'CEO Virtuwed & Founded PT. Booster Indonesia',
  },
  {
    image:
      'https://media.licdn.com/dms/image/C5103AQFptugPULYTKA/profile-displayphoto-shrink_800_800/0/1586521922233?e=1694044800&v=beta&t=Jfnx1a6qLQaur8AURI4x1Z2tA3-kCQhD3oZHbcW5teo',
    message:
      '“Saya mendapatkan banyak relasi saat mengikuti eskul ORBIT ini, sampai saat ini jika saya mempunyai waktu luang saya masih suka bermain ke sekolah untuk melihat dan menambah relasi saya di ORBIT.”',
    name: 'ELANG FAJAR BUANA',
    honor: 'CEO & Founder of CobaDulu Academy',
  },
];

export const ElementTestimoni: React.FC<TestimoniProps> = (props) => {
  return (
    <div className="w-full h-full md:px-20 px-12  py-10 md:py-16 flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center  md:max-w-screen-md m-auto">
        <Image
          className="rounded-full w-10 h-10 md:w-48 md:h-48"
          src={props.image}
          alt="Image"
          width={500}
          height={500}
          priority
        />
        <div className="grid items-start content-start gap-2 md:gap-8 text-center md:text-start">
          <p className="text-xs md:text-base font-light text-white/50 ">
            {props.message}
          </p>
          <div>
            <h4 className="text-sm md:text-xl font-medium text-white">
              {props.name}
            </h4>
            <h5 className="text-[0.6rem] md:text-xs font-light text-white/50">
              {props.honor}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardTestimoni = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      modules={[Pagination, Navigation]}
      className="feedback-swiper"
    >
      {TestimoniData.map((data, key) => {
        return (
          <SwiperSlide className="w-full" key={key}>
            <ElementTestimoni
              image={data.image}
              name={data.name}
              honor={data.honor}
              message={data.message}
            />
          </SwiperSlide>
        );
      })}
      <div className="swiper-button-prev">
        <FaChevronLeft color="white" size="auto" className="w-full" />
      </div>
      <div className="swiper-button-next">
        <FaChevronRight color="white" size="auto" className="w-full" />
      </div>
    </Swiper>
  );
};

export default CardTestimoni;
