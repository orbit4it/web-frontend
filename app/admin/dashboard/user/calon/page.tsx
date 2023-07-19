'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaSquareCheck } from 'react-icons/fa6';
import UserPageLink from '@/components/admin/UserPageLink';

export default function page() {
  const [terima, setTerima] = useState<boolean>(false);
  const [tolak, setTolak] = useState<boolean>(false);
  const [terimaDisable, setTerimaDisable] = useState<boolean>(false);
  const [tolakDisable, setTolakDisable] = useState<boolean>(false);

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
                Calon Anggota
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
          <div className=" mt-5">
            <table className=" w-full h-full ">
              <thead>
                <tr>
                  <td align="center" className=" pb-3 text-sm">
                    No.
                  </td>
                  <td align="center" className=" pb-3 text-sm">
                    No Pendaftaran
                  </td>
                  <td align="center" className=" pb-3 text-sm">
                    Nama
                  </td>
                  <td align="center" className=" pb-3 text-sm">
                    Email
                  </td>
                  <td align="center" className=" pb-3 text-sm">
                    NIS
                  </td>
                  <td align="center" className=" pb-3 text-sm">
                    Kelas
                  </td>
                  <td align="center" className=" pb-3 text-sm">
                    Divisi
                  </td>
                  <td align="center" className=" pb-3 text-sm ">
                    Terima
                  </td>
                  <td align="center" className=" pb-3 text-sm ">
                    Tolak
                  </td>
                  <td align="center" className=" pb-3 text-sm ">
                    Detail
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-[#3B405B]">
                  <td align="center" className=" text-xs p-5">
                    1
                  </td>
                  <td align="center" className=" text-xs p-5">
                    1212121212
                  </td>
                  <td align="center" className=" text-xs p-5">
                    Ambafish
                  </td>
                  <td align="center" className=" text-xs p-5">
                    jawir@gmail.com
                  </td>
                  <td align="center" className=" text-xs p-5">
                    37732736236
                  </td>
                  <td align="center" className=" text-xs p-5">
                    X-RPL-1
                  </td>
                  <td align="center" className=" text-xs p-5">
                    Game Development
                  </td>
                  <td align="center" className=" text-xs p-5">
                    <div
                      className={` ${
                        terima ? 'hidden' : 'block'
                      } w-5 h-5 bg-transparent border-2 border-white rounded-md cursor-pointer`}
                      onClick={(e) => {
                        setTerima(!terima);
                      }}
                    ></div>
                    <FaSquareCheck
                      className={` ${
                        terima ? ' block' : ' hidden'
                      } text-white text-[21px]`}
                      onClick={(e) => {
                        setTerima(!terima);
                      }}
                    />
                  </td>
                  <td align="center" className=" text-xs p-5">
                    <div
                      className={` ${
                        tolak ? 'hidden' : 'block'
                      } w-5 h-5 bg-transparent border-2 border-white rounded-md cursor-pointer`}
                      onClick={(e) => {
                        setTolak(!tolak);
                      }}
                    ></div>
                    <FaSquareCheck
                      className={` ${
                        tolak ? ' block' : ' hidden'
                      } text-white text-[21px]`}
                      onClick={(e) => {
                        setTolak(!tolak);
                      }}
                    />
                  </td>
                  <td align="center">
                    <AiOutlineInfoCircle className=" cursor-pointer text-white text-lg" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
