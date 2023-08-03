"use client"

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineInstagram } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import Link from 'next/link'


const TambahLomba = ( { closeEdit }:{closeEdit:(showEdit : boolean) => void} ) => {

  const [lombaTitle, setLombaTitle] = useState<string>()
  const [lombaDate, setLombaDate] = useState<string>()
  const [lombaFollow, setLombaFollow] = useState<string>()
  const [lombaRegist, setLombaRegist] = useState<string>()
  const [lombaCost, setLombaCost] = useState<string>()
  const [lombaNumber, setLombaNumber] = useState<string>()
  const [lombaIG, setLombaIG] = useState<string>()
  const [lombaRequire, setLombaRequire] = useState<string>()
  const [lombaInfo, setLombaInfo] = useState<string>()


  return (
    <>
     <section className='sm:p-5'>
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='box-border h-[40rem] md:w-[40rem] bg-space bg-cover bg-white md:flex-row p-14 md:mb-6 rounded-[30px] overflow-hidden shadow-md'>
          {/*Header*/}
          <div className='flex justify-between'>
            <h1 className='font-semibold'>Tambah Lomba</h1>
            <AiOutlineClose 
              size={20}
              onClick={() => closeEdit(false)}
            />
          </div>
          {/*End Header*/}

          {/*Content*/}
          <div className='box-border h-[35rem] md:w-[35rem] p-2 px-8 py-10 pr-10'>
            {/*Line Input 1*/}
            <div className='md:w-[30rem] h-[3rem] flex space-x-3'>
              <div className="inputBox relative w-[60%]">
              <input 
                className="shadow appearance-none border bg-transparent rounded-[10px] w-full h-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                id="username" 
                type="text" 
                placeholder="Nama Lomba"
                />
              </div>
              <div className="inputBox relative w-[40%]">
                <input
                  type="date"
                  name="rangeFrom"
                  id="rangeFrom"
                  className="w-full h-full px-3 py-2 rounded-[10px] border bg-transparent text-white flex gap-2 items-center text-sm  focus:outline-none"
                />
              </div>
            </div>
            {/*End Line Input 1*/}

            {/*Line Input 2*/}
              <div className='md:w-[30rem] h-[3rem] flex space-x-3 relative top-5'>
                <div className="inputBox relative w-[30%]">
                  <input
                    className="shadow appearance-none border bg-transparent rounded-[10px] w-full h-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Ikuti Lomba"
                  />
                </div>
                <div className="inputBox relative w-[30%]">
                  <input
                    className="shadow appearance-none border bg-transparent rounded-[10px] w-full h-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Pendaftaran"
                  />
                  
                </div>
                <div className="inputBox relative w-[40%]">
                  <input
                    className="shadow appearance-none border bg-transparent rounded-[10px] w-full h-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Biaya Pendaftaran"
                  />
                   
                </div>
              </div>
            {/*End Line Input 2*/}

            {/*Line Input 3*/}
              <div className='md:w-[30rem] h-[8rem] flex space-x-3 relative top-10'>
                <div className="inputBox relative w-[45%]">
                  <input
                    className="shadow appearance-none border border-b-transparent rounded-b-none bg-transparent rounded-[10px] w-full h-[50%] pt-6 pl-16 text-white leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Nomor Telp."
                  />
                  <div className='flex absolute left-0 top-0 width-[40px] justify-center'>
                    <span className='flex text-xl space-x-3 ml-5 relative top-9'>
                      <BsTelephone 
                        size={20}
                        className='space-x-3'
                      />
                      <div className='relative -top-2'>
                        |
                      </div>
                    </span>
                  </div>
                  
                  <div className="inputBox relative w-[100%] h-[4rem]">
                  <input 
                    className="shadow appearance-none border border-t-transparent rounded-t-none bg-transparent rounded-[10px] w-full h-full pb-6 pl-16 text-white leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Akun IG"
                  />
                  <div className='flex absolute left-0 top-0 width-[40px] justify-center'>
                     <span className='flex text-xl space-x-2 ml-5 relative top-2'>
                      <AiOutlineInstagram 
                        size={24}
                        className='space-x-2'
                      />
                      <div className='relative -top-1'>
                        |
                      </div>
                    </span>
                  </div>
                 
                  </div>
                </div>
                
                <div className="inputBox relative w-[55%]">
                  <textarea
                    className="shadow appearance-none border  bg-transparent rounded-[10px] w-full h-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    typeof="text" 
                    placeholder="Syarat Lomba (opsional)"
                    onChange={(e) => setLombaRequire(e.target.value)}
                    maxLength={100}
                  />
                    
                    <h1 className='block absolute bottom-0 right-0 mb-2 text-sm font-inter text-white mr-3'>
                      {lombaRequire? lombaRequire.length : 0}/100
                    </h1>
                </div>
              </div>
            {/*End Line Input 3*/}

            {/*Line Input 4*/}
              <div className='md:w-[30rem] h-[8rem] flex space-x-3 relative top-16'>
                <div className="inputBox relative w-[100%]">
                  <textarea
                    className="shadow appearance-none border bg-transparent rounded-[10px] w-full h-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    typeof="text" 
                    placeholder="Informasi Lomba"
                    maxLength={300}
                    onChange={(e) => setLombaInfo(e.target.value)}
                  />
                    
                    <h1 className='block absolute bottom-0 right-0 mb-2 text-sm font-inter text-white mr-3'>
                      {lombaInfo? lombaInfo.length : 0}/300
                    </h1>
                </div>
              </div>
            {/*End Line Input 4*/}

            {/*Upload Button*/}
            <div className='flex justify-center'>
              <button className='w-[180px] h-[44px] flex justify-center relative top-20'>
                <Link legacyBehavior href="#">
                  <a className="mt-7 rounded-[15px] font-bold block bg-gradient-to-b from-[#071590] to-[#4B58CF] py-3 text-center w-full">
                    Upload
                  </a>
                </Link>
              </button>
            </div>
            {/*End Upload Button*/}
          </div>
          {/*End Content */}
        </div>
      </div>
    </section>
    </>
  )
}

export default TambahLomba