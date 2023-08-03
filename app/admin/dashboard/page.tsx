'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Anggota from '@/public/assets/icons/anggota.png';
import RecentLomba from '@/public/assets/img/AdminLomba.png';
import Schedules from '@/components/admin/DashboardSchedule';
import SubjectCard from '@/components/admin/AdminSubjectCard';
// import getSchedules from '@/api/getSchedules';

// interface ScheduleType {
//   end: String;
//   id: Number;
//   location: String;
//   start: String;
//   subject: String;
//   title: String;
//   type: String;
// }

export default function page() {
  const [currentItem, setCurrentItem] = useState(0);

  // const [schedules, setSchedules] = useState<ScheduleType>();

  // useEffect(() => {
  //   async function getSchedule() {
  //     const sche = await getSchedules();
  //     console.log(sche);
  //   }
  //   getSchedule();
  // }, []);

  const item = [
    {
      title: 'Front End Learning Path',
      img: '/assets/img/AdminLomba.png',
    },
    {
      title: 'Front End Learning Path 2',
      img: '/assets/img/AdminLomba.png',
    },
    {
      title: 'Front End Learning Path 3',
      img: '/assets/img/AdminLomba.png',
    },
  ];

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % item.length);
  };

  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Dashboard
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 md:flex justify-between gap-6 pb-10">
        <div className="w-full">
          <div className="flex mb-4 items-center space-x-6 bg-[#262B49] py-3 px-10 rounded-[15px]">
            <Image src={Anggota} alt="AnggotaIcon" sizes="50" />
            <div>
              <h1 className="font-bold mb-4">Jumlah Anggota Orbit</h1>
              <p>2,000</p>
            </div>
          </div>
          <div className="flex mb-4 items-center space-x-6 bg-[#262B49] py-3 px-10 rounded-[15px]">
            <Image src={Anggota} alt="AnggotaIcon" sizes="50" />
            <div>
              <h1 className="font-bold mb-4">Jumlah Lomba Diikuti</h1>
              <p>41,420</p>
            </div>
          </div>
          <div className="flex mb-4 items-center space-x-6 bg-[#262B49] py-3 px-10 rounded-[15px]">
            <Image src={Anggota} alt="AnggotaIcon" sizes="50" />
            <div>
              <h1 className="font-bold mb-4">Jumlah Materi Terunggah</h1>
              <p>760</p>
            </div>
          </div>
          <div className="mt-6 pt-5 pb-10 px-7 h-auto bg-profileCard rounded-[15px] shadow-md">
            <h1 className="font-bold">Lomba yang Akan Segera Dimulai</h1>
            {/* test */}
            {/* <SubjectCard /> */}
            {/* ---------- */}
            <div className="rounded-[10px] bg-gradient-to-r from-cardMateri to-[#1F7FB6] mt-6">
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">{item[currentItem].title}</h1>
                <AiOutlineRight size={16} />
              </div>
              <hr className="h-[2px] bg-white" />
              <div className="h-[156px] relative bg-cover rounded-b-[10px]">
                <Image
                  src={item[currentItem].img}
                  className="w-full h-full bg-cover rounded-b-[10px]"
                  alt="Recent Lomba"
                  width={600}
                  height={600}
                />
                <div className="bg-black absolute top-12 -right-5 opacity-70 rounded-full">
                  <button title="btn" className="p-3" onClick={nextItem}>
                    <AiOutlineRight size={17} opacity={100} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-4 flex justify-center h-4 space-x-3 items-center">
              {item.map((i, index) => (
                <>
                  <div
                    key={index}
                    className={
                      index === currentItem
                        ? 'w-[12px] h-[12px] bg-gray-500 rounded-full transition-all duration-500'
                        : 'w-[9px] h-[9px] bg-gray-200 rounded-full'
                    }
                  ></div>
                </>
              ))}
            </div>
            {/* Bawah */}
            <h1 className="font-bold">Lomba yang Baru Saja Dibuat</h1>
            <div className="rounded-[10px] bg-gradient-to-r from-cardMateri to-[#1F7FB6] mt-4">
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">Front End Learning Path</h1>
                <AiOutlineRight size={16} />
              </div>
              <hr className="h-[2px] bg-white" />
              <div className="h-[156px] bg-cover rounded-b-[10px]">
                <Image
                  src={RecentLomba}
                  className="w-full h-full bg-cover rounded-b-[10px]"
                  alt="Recent Lomba"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="py-5 px-7 mt-3 md:mt-0 bg-profileCard rounded-[15px] shadow-md h-auto">
            <Schedules schedules={[]} divisionOptions={[]} />
          </div>
          <div className="mt-3 bg-profileCard rounded-[15px] shadow-md">
            <div className="pt-5 px-7 flex items-center justify-between mb-8">
              <h1 className="font-bold">Terakhir Online</h1>
              <div className="py-1 px-2 bg-[#7421DD] rounded-[10px]">
                <p className="text-sm">4 Anggota Baru</p>
              </div>
            </div>
            <div className="md:flex justify-center md:space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mb-2 bg-[#D9D9D9] mx-auto"></div>
                <h1 className="font-bold">Nama</h1>
                <p className="opacity-70 text-sm">Hari ini</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mb-2 bg-[#D9D9D9] mx-auto"></div>
                <h1 className="font-bold">Nama</h1>
                <p className="opacity-70 text-sm">Kemarin</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mb-2 bg-[#D9D9D9] mx-auto"></div>
                <h1 className="font-bold">Nama</h1>
                <p className="opacity-70 text-sm">2 Hari yg lalu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mb-2 bg-[#D9D9D9] mx-auto"></div>
                <h1 className="font-bold">Nama</h1>
                <p className="opacity-70 text-sm">1 Januari</p>
              </div>
            </div>
            <div className="mt-6 py-4 bg-darkTrans rounded-b-[15px]">
              <Link
                legacyBehavior
                href="#"
                className="inline-block text-center"
              >
                <a className="text-[#6222BD] block text-center text-xl">
                  View All Users
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-6 py-5 px-7 bg-profileCard rounded-[15px] shadow-md">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Transaksi Keuangan</h1>
              <Link legacyBehavior href="#">
                <div className="flex items-center space-x-3 text-[#6222BD]">
                  <a className="cursor-pointer">View All</a>
                  <div className="flex">
                    {/* <AiOutlineRight size={13} />
                    <AiOutlineRight size={13} /> */}
                    {'>'}
                    {'>'}
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mt-4">
              <div>
                <div className="flex space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                  <div>
                    <h1>VGA Adaptor</h1>
                    <p className="text-sm">Hari ini | 02:00 PM</p>
                    <p className="text-[#FE5050]">- Rp. 240.000</p>
                  </div>
                </div>
                <div className="flex space-x-3 mt-3">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                  <div>
                    <h1>VGA Adaptor</h1>
                    <p className="text-sm">Hari ini | 02:00 PM</p>
                    <p className="text-[#50FE62]">+ Rp. 240.000</p>
                  </div>
                </div>
              </div>
              <hr className="md:w-[1px] md:h-[150px] bg-white opacity-0 md:opacity-70" />
              <div>
                <div className="flex space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                  <div>
                    <h1>VGA Adaptor</h1>
                    <p className="text-sm">Hari ini | 02:00 PM</p>
                    <p className="text-[#FE5050]">- Rp. 240.000</p>
                  </div>
                </div>
                <div className="flex space-x-3 mt-3">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                  <div>
                    <h1>VGA Adaptor</h1>
                    <p className="text-sm">Hari ini | 02:00 PM</p>
                    <p className="text-[#FE5050]">- Rp. 240.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
