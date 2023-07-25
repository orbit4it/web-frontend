import React from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import getSchedules from '@/api/getSchedules';
import AdminSchedule from '@/components/admin/AdminSchedules';
import Bell from '@/public/assets/icons/Bell.png';
import Image from 'next/image';

export default async function page() {
  const schedules = await getSchedules();

  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li className="flex items-center space-x-3">
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Dashboard
            </h1>
            <p className="text-sm font-normal">{'>'}</p>
            <p className="text-sm font-normal"> Jadwal</p>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 md:flex justify-between pb-10">
        <div className="w-full mb-4 pb-10 items-center bg-[#262B49] py-3 px-10 rounded-[15px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-5">
              <h1 className="py-1 px-3 bg-[#7585BF] rounded-[8px]">Today</h1>
              <div className="flex items-center">
                <button className="mr-4">
                  <AiOutlineLeft />{' '}
                </button>
                <button>
                  <AiOutlineRight />
                </button>
              </div>
              <h1>Dropdown</h1>
            </div>
            <div className="flex items-center space-x-5">
              <h1>Dropdown</h1>
              <Link legacyBehavior href="#">
                <a className="p-2 rounded-[8px] bg-[#7421DD] bg-opacity-[78] text-sm">
                  + Tambah Jadwal
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-10 bg-white bg-opacity-10">
            {/* Schedules */}
            <AdminSchedule schedules={schedules} />
            <div className="bg-[#7421DD] py-3 px-6 border-t-[1px] border-white bg-opacity-[51] flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image src={Bell} alt="Bell Icons" />
                <div>
                  <h1 className="font-bold">Pertemuan ORBIT Rutin</h1>
                  <p className="text-sm flex items-center">
                    Kamis, 13 Juni 2023
                    <div className="w-1 h-1 bg-[#F0C93F] rounded-full mx-5"></div>
                    16.00
                  </p>
                </div>
              </div>
              <div>
                <Link legacyBehavior href="/admin/dashboard/jadwal">
                  <a className="py-1 px-3 bg-[#7585BF] rounded-[8px]">
                    Open Attendance
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
