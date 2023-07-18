'use client';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserPageLink from '@/components/admin/UserPageLink';
import { BiSearch } from 'react-icons/bi';

export default function page() {
  const pathname = usePathname();

  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className=" flex items-center gap-2 text-xs md:text-lg font-semibold md:font-bold">
              User
              <span className=" text-[#DFDFDF] font-semibold text-sm">
                <IoIosArrowForward />
              </span>
              <span className=" text-[#DFDFDF] font-semibold text-sm">
                {' '}
                Tambah Anggota
              </span>
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 md:flex-col justify-between items-center gap-6 pb-10 w-full h-full">
        <UserPageLink />
        <div className=" bg-cardDashboard rounded-lg p-3 mt-5 text-sm">
          <form className=" flex items-center gap-3">
            <h1>Search</h1>
            <div className=" relative text-white">
              <input
                type="text"
                placeholder="Search..."
                className=" border-[1px] border-white rounded-md bg-transparent px-8 p-1 outline-none"
              />
              <div className=" absolute top-[5px] left-2">
                <BiSearch className=" text-lg" />
              </div>
            </div>
            <h1>Range From:</h1>
            <input
              type="date"
              className=" py-1 px-4 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none"
            />
            <h1>Until: </h1>
            <input
              type="date"
              className=" py-1 px-4 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none"
            />
            <button className=" py-1 px-3 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none">
              Reset
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
