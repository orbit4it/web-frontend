'use client';
import { RecentSubject } from '@/helper/interfaces';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// custom css
import '@/helper/swipers/recentSubjects.css';
interface SubjectCardProps {
  recentSubjects: RecentSubject[];
}

const SubjectCard: React.FC<SubjectCardProps> = ({ recentSubjects }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination
      modules={[Navigation, Pagination]}
      className="recent-subjects"
    >
      {recentSubjects &&
        recentSubjects.map((subject) => (
          <SwiperSlide key={subject.id}>
            <div className="rounded-[11px] relative bg-gradient-to-r from-cardMateri to-[#1F7FB6] mt-4 flex flex-col items-center justify-between">
              <header className=" px-5 pt-5 pb-2 w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="font-bold">{subject.title}</h1>
                  <div className="flex items-center text-sm font-semibold gap-2">
                    <p>{subject.speaker}</p>
                    <div className="w-[4px] h-[4px] bg-[#F0C93F] rounded-full" />
                    <p>{format(parseISO('2023-07-27T15:30'), 'dd MMMM')}</p>
                  </div>
                </div>
                <Link legacyBehavior href={`/dashboard/materi/${subject.id}`}>
                  <a>
                    <AiOutlineRight size={17} />
                  </a>
                </Link>
              </header>
              <div className="w-full h-[1px] bg-gradient-to-r from-white via-[#E084CC] to-[#E133BB]" />
              <div className="pl-5 pr-16 pt-5 pb-10 text-sm">
                <p>{subject.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      <button className="swiper-button-next">
        <AiOutlineRight size={17} opacity={100} color="white" />
      </button>
      <button className="swiper-button-prev">
        <AiOutlineLeft size={17} opacity={100} color="white" />
      </button>
    </Swiper>
  );
};

export default SubjectCard;
