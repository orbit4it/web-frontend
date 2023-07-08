'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

export default function page() {
  const searchParams = useSearchParams();

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
            <MdKeyboardArrowRight className=" text-[#DFDFDF] text-[15px] mt-1" />
          </li>
          <li>
            <Link
              href={`/dashboard/materi/detail?leason=${searchParams.get(
                'leason'
              )}`}
            >
              <p className=" text-[#DFDFDF] text-lg font-semibold mt-1">
                {searchParams.get('leason')}
              </p>
            </Link>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className=" w-full"></section>
    </>
  );
}
