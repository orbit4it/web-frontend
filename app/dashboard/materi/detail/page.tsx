'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { RiStarSLine } from 'react-icons/ri';
import Comments from '@/components/dashboard/Comments';

export default function page() {
  const searchParams = useSearchParams();
  const [uncheckedStar, setUncheckedStar] = useState<number>(0);
  const [checkedStar, setCheckedStars] = useState<number>(0);

  const stars = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  return (
    <>
      {/* Route Section */}
      <section>
        <ul className="flex gap-4 items-center route">
          <li>
            <Link href={'/dashboard/materi'}>
              <h1 className="text-xs md:text-2xl font-semibold md:font-bold">
                Materi
              </h1>
            </Link>
          </li>
          <li>
            <MdKeyboardArrowRight className=" text-[#DFDFDF] text-[15px] mt-0 md:mt-1" />
          </li>
          <li>
            <Link
              href={`/dashboard/materi/detail?leason=${searchParams.get(
                'leason'
              )}`}
            >
              <p className=" text-[#DFDFDF] text-xs md:text-lg font-semibold mt-0 md:mt-1">
                {searchParams.get('leason')}
              </p>
            </Link>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className=" w-full">
        <div className=" bg-cardDashboard rounded-lg p-5 my-3 w-full relative">
          <h1 className=" text-[15px] md:text-xl font-semibold">
            {searchParams.get('leason')}
          </h1>
          <div className=" flex items-center gap-2 mt-2 md:mt-3">
            <p className=" text-xs md:text-[16px] font-semibold">
              Arief Muhammad
            </p>
            <div className=" w-1 h-1 bg-[#F0C93F] rounded-full mt-1"></div>
            <p className=" text-xs md:text-[16px] font-medium">13.00</p>
          </div>
          <div className=" my-5 w-auto md:w-[450px]">
            <p className=" text-xs md:text-[15px] text-[#DFDFDF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <p className=" text-xs md:text-[15px] text-[#DFDFDF]">
            Pelajari materi yang telah diberikan dan kerjakan latihan soal
            berikut!
          </p>
          <div className=" mt-5">
            <div className=" w-full  md:w-[600px] text-xs md:text-[16px] bg-darkBlue rounded-2xl py-2 px-3 flex items-center justify-between border-white border-[1px] cursor-pointer">
              <p>HTML Development Basics.docx</p>
              <HiDownload className=" text-lg text-[#0F6742]" />
            </div>
            <Link
              href={`/dashboard/materi/detail?leason=${searchParams.get(
                'leason'
              )}`}
            >
              <div className=" mt-4 w-full md:w-[600px] text-xs md:text-[16px] bg-darkBlue rounded-2xl py-2 px-3 flex items-center justify-between border-white border-[1px] cursor-pointer">
                <p>Latihan Soal HTML Development Basics</p>
                <MdKeyboardArrowRight className=" text-lg" />
              </div>
            </Link>
          </div>
          <div className=" mt-7">
            <h1 className=" text-[15px] md:text-xl font-semibold">Comments</h1>
            <div className=" w-full h-auto md:h-[300px] border-white border-[1px] block md:flex items-center justify-between rounded-none md:rounded-lg mt-3">
              <div className=" p-4 bg-[#161530] rounded-tl-none rounded-bl-none md:rounded-tl-lg md:rounded-bl-lg w-auto md:w-[550px] h-full border-[1px] border-r-white">
                <Comments
                  nama="Ghazi Adila Ghifari"
                  stars={5}
                  comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  waktu="10 min ago"
                />
                <Comments
                  classname=" mt-4"
                  nama="Ghazi Adila Ghifari"
                  stars={5}
                  comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  waktu="10 min ago"
                />
              </div>
              <div className="  bg-darkBlue h-full w-auto md:w-[350px] rounded-tr-none md:rounded-tr-lg rounded-br-none md:rounded-br-lg p-3 text-[#626262]">
                <form action="">
                  <p className=" text-xs md:text-[15px] text-center ">
                    Rate pendapatmu mengenai materi kali ini!
                  </p>
                  <div className=" flex gap-2 justify-center items-center my-2">
                    {stars.map((data, key) => {
                      return (
                        <div className=" cursor-pointer">
                          <RiStarSLine
                            className=" text-4xl"
                            onClick={(e) => {
                              setCheckedStars(data.id);
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <p className=" text-xs md:text-[15px] text-center">
                    Tulis komentarmu mengenai materi kali ini!
                  </p>
                  <textarea
                    title="comment"
                    className=" resize-none outline-none bg-white rounded-xl w-full h-[100px] p-2 my-3"
                  />
                  <button className=" bg-[#28178C] block mx-auto rounded-xl text-center text-xs text-white py-2 px-10">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
