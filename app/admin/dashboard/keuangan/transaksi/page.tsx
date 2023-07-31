'use client';

import TableTransactions from '@/components/financePage/TableTransactions';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import Apicall from '@/helper/apicall';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default async function page() {
  // const router = useRouter();

  // const checkAuth = async () => {
  //   const res = await Apicall(`
  //  query {
  //        me {
  //   id
  //   name
  //   role
  // }
  //         }
  //   `);

  //   if (!res) {
  //     router.push('/login');
  //   }
  // };

  // useEffect(() => {
  //   checkAuth();
  // });
  return (
    <>
      {/* Route Section */}
      <header className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <Link
            href={'/admin/dashboard/keuangan'}
            className="text-xs md:text-lg font-semibold md:font-bold"
          >
            Keuangan
          </Link>
          <FaAngleRight
            size={10}
            className="w-3 h-3 md:w-4 md:h-4"
            color="#DFDFDF"
          />
          <h2 className="text-[0.6rem] md:text-base font-semibold md:font-semibold text-[#DFDFDF]">
            Riwayat
          </h2>
        </ul>
      </header>
      {/* Another Content */}
      <main
        className="w-full h-max mt-4  flex flex-col 
       gap-4"
      >
        <section className="w-full h-max px-5 py-4 rounded-lg align-middle inline-block overflow-hidden shadow-md bg-d-secondary">
          <header className="w-full py-1 flex gap-4 items-center">
            <div className="w-56 rounded-md border-[1px] border-white flex items-center relative">
              <input
                id="search"
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-2 py-1 bg-transparent text-white text-sm font-extralight focus:outline-none placeholder:text-white"
              />
              <label htmlFor="search" className="absolute left-4 ">
                <BsSearch size={16} color="white" className="cursor-pointer" />
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center select-none">
                <label htmlFor="rangeFrom" className="text-sm font-semibold">
                  Range From:
                </label>
                <input
                  type="date"
                  name="rangeFrom"
                  id="rangeFrom"
                  className="w-36 px-3 py-1 rounded-md bg-[#7585BF] text-white flex gap-2 items-center text-sm font-normal focus:outline-none"
                />
              </div>

              <div className="flex gap-1 items-center select-none">
                <label htmlFor="until" className="text-sm font-semibold">
                  Until:
                </label>
                <input
                  type="date"
                  name="until"
                  id="until"
                  className="w-36 px-3 py-1 rounded-md bg-[#7585BF] text-white flex gap-2 items-center text-sm font-normal focus:outline-none"
                />
              </div>
            </div>
            <button className="px-3 py-1 rounded-md bg-[#7585BF] text-white flex items-center justify-center text-sm font-normal ">
              Reset
            </button>
          </header>
          <TableTransactions />
        </section>
      </main>
    </>
  );
}
