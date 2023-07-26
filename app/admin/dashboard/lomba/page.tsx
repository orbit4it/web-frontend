'use client';
import Apicall from '@/helper/apicall';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
//import Poster from '@/public/assets/img/Poster.png';
import Image from 'next/image';
//import Link from 'next/link';
import { Fragment, useState } from 'react';
//import { AiOutlineClockCircle, AiOutlineRight } from 'react-icons/ai';
//import { BsCurrencyDollar, BsInstagram, BsTelephone, BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import TambahLomba from '@/components/dashboard/TambahLomba';
import CompetitionCard from '@/components/competitionPage/CompetitionCard';
//import dummyHTML from '@/public/assets/img/learnHTML.png'
//import Poster from '@/public/assets/img/Poster.png'
//import { BsFillTrashFill } from 'react-icons/bs'

export default function page() {
  const [showEdit, setShowEdit] = useState(false);

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

  return (
    <>
      {/* Route Section */}

      <section>
        <ul className="flex gap-4 items-center route">
          <li>
            <div className="flex items-center space-x-2 text-sm">
              <h1 className="text-xs md:text-lg font-semibold md:font-bold">
                Info Lomba
              </h1>
            </div>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <Fragment>
        <section className="pb-10">
          <div className="bg-profileCard flex flex-col md:flex-row py-10 px-8 mt-6 md:mb-6 rounded-[15px] overflow-hidden shadow-md">
            <div className="pr-5">
              <div className="lg:w-[58rem] opacity-50">
                {/*Add Lomba*/}
                <div className="w-full h-[272px] border-dashed border-2 border-white rounded-[15px]">
                  <div className="flex justify-center items-center relative top-20">
                    <button>
                      <IoIosAdd size={50} onClick={() => setShowEdit(true)} />
                    </button>
                  </div>
                  <div className="flex justify-center items-center relative top-20">
                    Tambah Lomba
                  </div>
                </div>
              </div>
              {/*End Add Lomba*/}

              {/*Lomba*/}
              <div className="mt-6">
                <CompetitionCard
                  id={1}
                  title="HTML Development Basics"
                  speaker="Arief Muhammad"
                  createdAt="13.00"
                  desc="Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!"
                  textLink="Front-End Essentials & Learning Path"
                  cover="/assets/img/learnHTML.png"
                  alt="Learn HTML"
                  admin={true}
                />

                <CompetitionCard
                  classname="mt-3"
                  id={1}
                  title="Front End Learning Path"
                  speaker="Arief Muhammad"
                  createdAt="13.00"
                  desc="Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!"
                  textLink="Front-End Essentials & Learning Path"
                  cover="/assets/img/FeTraining.png"
                  alt="FE Training"
                  admin={true}
                />
              </div>
              {/*End Lomba*/}
            </div>
          </div>
        </section>
        {showEdit && <TambahLomba closeEdit={setShowEdit} />}
      </Fragment>
    </>
  );
}
