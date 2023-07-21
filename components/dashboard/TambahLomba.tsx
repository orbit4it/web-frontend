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
        <div className='box-border h-[40rem] w-[40rem] bg-space bg-cover bg-white md:flex-row p-14 md:mb-6 rounded-[30px] overflow-hidden shadow-md'>
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
          <div className='box-border h-[35rem] w-[35rem] p-2 px-8 py-10 pr-10'>
            {/*Line Input 1*/}
            <div className='w-[30rem] flex space-x-3'>
              <div className="inputBox relative w-[60%]">
                <input
                  type='text'
                  className=""
                  required
                  onChange={(e) => setLombaTitle(e.target.value)}
                />
                <span>Nama Lomba</span>
              </div>
              <div className="inputBox relative w-[40%]">
                <input
                  type='text'
                  className=''
                  required
                  onChange={(e) => setLombaDate(e.target.value)}
                />
                <span>Tanggal Lomba</span>
              </div>
            </div>
            {/*End Line Input 1*/}

            {/*Line Input 2*/}
              <div className='w-[30rem] flex space-x-3 relative top-5'>
                <div className="inputBox relative w-[25%]">
                  <input
                    type='text'
                    className=''
                    required
                    onChange={(e) => setLombaFollow(e.target.value)}
                  />
                 <span>Ikuti Lomba</span>
                </div>
                <div className="inputBox relative w-[25%]">
                  <input
                    type='text'
                    className=''
                    required
                    onChange={(e) => setLombaRegist(e.target.value)}
                  />
                  <span>Pendaftaran</span>
                </div>
                <div className="inputBox relative w-[50%]">
                  <input
                    type='text'
                    className=''
                    required
                    onChange={(e) => setLombaCost(e.target.value)}
                  />
                   <span>Biaya Pendaftaran</span>
                </div>
              </div>
            {/*End Line Input 2*/}

            {/*Line Input 3*/}
              <div className='w-[30rem] h-[8rem] flex space-x-3 relative top-10'>
                <div className="inputBox relative w-[45%]">
                  <input
                    type='text'
                    className=''
                    required
                    onChange={(e) => setLombaNumber(e.target.value)}
                  />
                  
                  <span>
                    Nomor Telp.
                  </span>
                  <div className="inputBox relative top-9 w-[100%]">
                  <input 
                    type="text"
                    className=''
                    required
                    onChange={(e) => setLombaIG(e.target.value)}
                  />
                  <span>Akun IG</span>
                  </div>
                </div>
                
                <div className="inputBox relative w-[55%]">
                  <textarea
                    typeof='text'
                    className=''
                    required
                    onChange={(e) => setLombaRequire(e.target.value)}
                    maxLength={100}
                  />
                    <span>Syarat Lomba (opsional)</span>
                    <h1 className='block absolute bottom-0 right-0 mb-2 text-sm font-inter text-white mr-3'>
                      {lombaRequire? lombaRequire.length : 0}/100
                    </h1>
                </div>
              </div>
            {/*End Line Input 3*/}

            {/*Line Input 4*/}
              <div className='w-[30rem] h-[8rem] flex space-x-3 relative top-16'>
                <div className="inputBox relative w-[100%]">
                  <textarea
                    typeof='text'
                    className=''
                    required
                    maxLength={300}
                    onChange={(e) => setLombaInfo(e.target.value)}
                  />
                    <span>Informasi Lomba</span>
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