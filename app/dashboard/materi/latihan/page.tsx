'use client';
import Apicall from '@/helper/apicall';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState('');

  const router = useRouter();

  const checkAuth = async () => {
    const res = await Apicall(`
   query {
         me {
    id
    name
    role
  }
          }
    `);

    if (!res) {
      router.push('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  });

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

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
              <p className=" text-[#DFDFDF] text-[9px] md:text-lg font-semibold mt-0 md:mt-1">
                {searchParams.get('leason')}
              </p>
            </Link>
          </li>
          <li>
            <MdKeyboardArrowRight className=" text-[#DFDFDF] text-[15px] mt-0 md:mt-1" />
          </li>
          <li>
            <Link
              href={`/dashboard/materi/detail?leason=${searchParams.get(
                'leason'
              )}&judul=${searchParams.get('judul')}`}
            >
              <p className=" text-[#DFDFDF] text-[9px] md:text-lg font-semibold mt-0 md:mt-1">
                {searchParams.get('judul')}
              </p>
            </Link>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className=" w-full relative">
        <div className=" bg-cardDashboard rounded-lg p-5 my-3 w-full relative">
          <div className="flex items-center justify-between">
            <h1 className=" text-[15px] md:text-2xl font-bold">
              {searchParams.get('judul')}
            </h1>
            <p className=" hidden md:block text-xs md:text-sm">100 point</p>
          </div>
          <p className=" absolute right-4 block md:hidden text-xs md:text-sm">
            100 point
          </p>
          <div className=" flex items-center gap-2 text-xs md:text-sm">
            <p>10 soal</p>
            <div className=" w-1 h-1 bg-[#F0C93F] rounded-full"></div>
            <p>Dibuat tanggal 13 Juni 2023</p>
          </div>
          <div className=" mt-5 mb-10">
            <form action="">
              <ol className="list-decimal px-4">
                <li className="">
                  <h1 className=" text-[16px] font-semibold">
                    HTML merupkan singkatan dari...
                  </h1>
                  <div className=" mt-1">
                    <label className=" text-[16px]" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className="mr-2 bg-transparent accent-secondary"
                      />
                      Hyper Text Markup Language
                    </label>
                    <br />
                    <label className=" text-[16px]" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className=" mr-2"
                      />
                      Hyper Text Markup Language
                    </label>
                    <br />
                    <label className=" text-[16px] font-normal" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className=" mr-2"
                      />
                      Hyper Text Markup Language
                    </label>
                    <br />
                    <label className=" text-[16px]" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className=" mr-2"
                      />
                      Hyper Text Markup Language
                    </label>
                  </div>
                </li>
                <li className=" mt-4">
                  <h1 className=" text-[16px] font-semibold">
                    HTML merupkan singkatan dari...
                  </h1>
                  <div className=" bg-dark-blue w-fit p-2 my-2 rounded-lg">
                    <Image
                      src={'/assets/img/code.png'}
                      width={250}
                      height={170}
                      alt="img question"
                    />
                  </div>
                  <div className="">
                    <label className=" text-[16px]" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className=" mr-2"
                      />
                      Hyper Text Markup Language
                    </label>
                    <br />
                    <label className=" text-[16px]" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className=" mr-2"
                      />
                      Hyper Text Markup Language
                    </label>
                    <br />
                    <label className=" text-[16px] font-normal" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className=" mr-2"
                      />
                      Hyper Text Markup Language
                    </label>
                    <br />
                    <label className=" text-[16px]" htmlFor="">
                      <input
                        type="radio"
                        title="Soal"
                        name="option"
                        value={'value'}
                        className=" mr-2"
                      />
                      Hyper Text Markup Language
                    </label>
                  </div>
                </li>
              </ol>
              <button
                title="submit"
                className="block mx-auto mt-5 md:absolute right-4 text-xs text-center text-white py-2 px-14 md:px-8 bg-[#6E64DD] rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
