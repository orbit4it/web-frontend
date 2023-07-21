"use client"

//import Poster from '@/public/assets/img/Poster.png';
import Image from 'next/image';
//import Link from 'next/link';
import { Fragment, useState } from 'react';
import { AiOutlineClockCircle, AiOutlineRight } from 'react-icons/ai';
//import { BsCurrencyDollar, BsInstagram, BsTelephone, BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io'
import EditLomba from '@/components/dashboard/EditLomba'
import dummyHTML from '@/public/assets/img/learnHTML.png'
import Poster from '@/public/assets/img/Poster.png'
import { BsFillTrashFill } from 'react-icons/bs'

export default function page() {
  const [showEdit, setShowEdit] = useState(false)

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
        <div className="md:h-[67rem] bg-profileCard flex flex-col md:flex-row py-10 px-8 mt-6 md:mb-6 rounded-[15px] overflow-hidden shadow-md">
          <div className="pr-5">
            <div className='lg:w-[58rem] opacity-50'>
              <div className='w-full h-[272px] border-dashed border-2 border-white rounded-[15px]'>
                <div className='flex justify-center items-center relative top-20'>
                  <button>
                    <IoIosAdd
                      size={50}
                      onClick={() => setShowEdit(true)}
                    />
                  </button>
                </div>
                <div className='flex justify-center items-center relative top-20'>Tambah Lomba</div>
              </div>
            </div>
            <div className='w-full md:flex justify-between relative top-10 rounded-[15px] border-solid border border-white'>
              <div className='px-7 py-10 mb-7'>
                <div className='flex items-center space-x-2'>
                  <h1 className='font-semibold relative -top-2'>HTML Development Basics</h1>
                  <BsFillTrashFill size={18} fill='#F43838' className='relative -top-2'/>
                </div>
                <div className='flex space-x-3'>
                  <p>Arief Muhammad</p>
                  <div className='w-[5px] h-[5px] rounded-[15px] bg-[#F0C93F] relative top-2.5'></div>
                  <p className=''>13.00</p>
                </div>
                <div className='relative top-7'>
                  <p>
                    Pada materi kali ini, kita akan belajar basics dari HTML Development.<br />Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!
                  </p>
                </div>
                <button className=' w-full rounded-[15px] relative top-10 p-3 bg-[#0A013D] border-solid border'>
                  <div className='flex justify-between'>
                    <h1>Front-End Essentials & Learning Path</h1>
                    <AiOutlineRight 
                      size={17}
                      className='relative top-1'
                    />
                  </div>
                </button>
              </div>
              <div className=''>
                <Image src={dummyHTML} alt="dummy" className='w-full h-full'/>
              </div>
            </div>
            <div className='w-full md:flex justify-between relative top-20 rounded-[15px] border-solid border border-white'>
              <div className='px-7 py-10 mb-7'>
                <div className='flex items-center space-x-2'>
                  <h1 className='font-semibold relative -top-2'>Front End Learning Path</h1>
                  <BsFillTrashFill size={18} fill='#F43838' className='relative -top-2'/>
                </div>
                <div className='flex space-x-3'>
                  <p>Arief Muhammad</p>
                  <div className='w-[5px] h-[5px] rounded-[15px] bg-[#F0C93F] relative top-2.5'></div>
                  <p className=''>13.00</p>
                </div>
                <div className='relative top-7'>
                  <p>
                    Pada materi kali ini, kita akan belajar basics dari HTML Development.<br />Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!
                  </p>
                </div>
                <button className=' w-full rounded-[15px] relative top-10 p-3 bg-[#0A013D] border-solid border'>
                  <div className='flex justify-between'>
                    <h1>Front-End Essentials & Learning Path</h1>
                    <AiOutlineRight 
                      size={17}
                      className='relative top-1'
                    />
                  </div>
                </button>
              </div>
              <div className=''>
                <Image src={dummyHTML} alt="dummy" className='w-full h-full'/>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {showEdit && <EditLomba closeEdit={setShowEdit}/>}
      </Fragment>
      
      
    </>
    
  );
}
