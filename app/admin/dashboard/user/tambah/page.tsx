'use client';
import Apicall from '@/helper/apicall';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import UserPageLink from '@/components/admin/UserPageLink';
import styles from '../../../../../helper/page.module.css';
import Image from 'next/image';

export default function page() {
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
        <div className=" bg-cardDashboard h-screen rounded-lg p-3 mt-5 text-sm">
          <form>
            <div className=" flex gap-7 justify-between">
              <div className=" flex gap-7 ">
                <div className=" relative">
                  <label
                    htmlFor="foto"
                    className=" bg-[#575757] rounded-full w-48 h-48 flex justify-center items-center cursor-pointer "
                  >
                    <div className=" w-[100px] h-16 rounded-sm border-[1px] border-dashed border-[#828282] bg-transparent text-[#8D8D8D] flex-row items-center justify-center">
                      <p className=" text-lg text-center pt-2">+</p>
                      <p className=" text-sm text-center">Add Photo</p>
                    </div>
                  </label>
                  <input
                    type="file"
                    className=" absolute -z-10 opacity-0"
                    id="foto"
                    name="foto"
                  />
                  <div className=" block mx-auto">
                    <button
                      type="submit"
                      className={` bg-[#3240B8] block mx-auto mt-3 rounded-2xl py-1 px-5 text-center text-xs`}
                    >
                      Simpan Profile
                    </button>
                  </div>
                </div>
                <div className=" mt-8">
                  <div className="flex text-white items-center">
                    <input
                      type="text"
                      placeholder="Nama"
                      className=" text-2xl bg-transparent border-transparent outline-none font-bold placeholder:text-white placeholder:font-bold w-24"
                    />
                    <div className=" flex items-center">
                      <BsTelephone className=" text-xl" />
                      <input
                        type="number"
                        placeholder="No Telepon"
                        className={`${styles.hiddenInnerButton} placeholder:text-white placeholder:text-sm text-sm text-[#E3E3E3] appearance-none bg-transparent border-transparent outline-none pl-3`}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                      className=" text-xs bg-transparent border-transparent outline-none font-semibold text-[#DFDFDF] placeholder:text-[#DFDFDF]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="NIS"
                      className=" text-xs bg-transparent border-transparent outline-none font-semibold text-[#DFDFDF] placeholder:text-[#DFDFDF]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Bio"
                      className=" text-xs bg-transparent border-transparent outline-none font-semibold text-green-500 placeholder:text-green-500"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-7 pr-10 cursor-pointer">
                <div className=" bg-[#3D4470] w-[1px] h-60 rounded-md"></div>
                <div>
                  <div className=" flex items-center gap-3 font-semibold">
                    <MdOutlineLocationOn />
                    <p>Alamat Anggota</p>
                  </div>
                  <div className=" relative rounded-md mt-10">
                    <div className=" rounded-md">
                      <Image
                        src={'/assets/img/maps.png'}
                        alt="maps"
                        width={192}
                        height={192}
                        className=" rounded-lg"
                      />
                    </div>
                    <div className=" bg-[#3240B8] font-semibold w-full p-[2px] absolute bottom-0 rounded-bl-lg rounded-br-lg">
                      <p className=" text-center">Open in Maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <h1 className=" text-lg font-semibold">User Details</h1>
              <div className=" border-[1px] border-white rounded-md mt-3">
                <div className=" flex items-center border-b-[1px] border-b-white">
                  <div className=" w-[106px] bg-[#071590] py-2 px-5 rounded-tl-md rounded-bl-md">
                    <h1>Kelas</h1>
                  </div>
                  <div className="  p-2 bg-[#4B58CF] w-full rounded-tr-md ">
                    <input
                      type="text"
                      className=" border-transparent bg-transparent text-white placeholder:text-white outline-none text-sm placeholder:text-sm"
                      placeholder="Kelas Anggota"
                    />
                  </div>
                </div>
                <div className=" flex items-center border-b-[1px] border-b-white">
                  <div className=" w-[106px] bg-[#071590] py-2 px-5 rounded-tl-md rounded-bl-md">
                    <h1>Divisi</h1>
                  </div>
                  <div className="  p-2 bg-[#4B58CF] w-full rounded-tr-md ">
                    <input
                      type="text"
                      className=" border-transparent bg-transparent text-white placeholder:text-white outline-none text-sm placeholder:text-sm"
                      placeholder="Divisi Yang Dipilih"
                    />
                  </div>
                </div>
                <div className=" flex items-center bg-[#071590] border-b-[1px] border-b-white ">
                  <div className=" w-[106px] bg-[#071590] py-2 px-5 h-full">
                    <h1>
                      Social <br /> Media
                    </h1>
                  </div>
                  <div className=" p-2 bg-[#4B58CF] w-full ">
                    <div className=" flex items-center gap-2">
                      <FaGithub className=" text-lg" />
                      <input
                        type="text"
                        className=" border-transparent bg-transparent text-white placeholder:text-white outline-none text-sm placeholder:text-sm"
                        placeholder="Insert Akun"
                      />
                    </div>
                    <div className=" flex items-center gap-2 my-2">
                      <BsInstagram className=" text-lg" />
                      <input
                        type="text"
                        className=" border-transparent bg-transparent text-white placeholder:text-white outline-none text-sm placeholder:text-sm"
                        placeholder="Insert Akun"
                      />
                    </div>
                    <div className=" flex items-center gap-2">
                      <LuMail className=" text-lg" />
                      <input
                        type="text"
                        className=" border-transparent bg-transparent text-white placeholder:text-white outline-none text-sm placeholder:text-sm"
                        placeholder="Insert Akun"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex items-center border-b-[1px] border-b-white">
                  <div className=" w-[106px] bg-[#071590] py-7 px-5 rounded-bl-lg">
                    <h1>Motivasi</h1>
                  </div>
                  <div className=" px-2 py-7 bg-[#4B58CF] w-full rounded-br-md ">
                    <input
                      type="text"
                      className=" border-transparent bg-transparent text-white placeholder:text-white outline-none text-sm placeholder:text-sm w-52"
                      placeholder="Masukan Motivasi Anggota"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
