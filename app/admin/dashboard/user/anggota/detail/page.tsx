/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { useParams, useSearchParams } from 'next/navigation';
import UserPageLink from '@/components/admin/UserPageLink';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import useObserveToken, { axiosInstance } from '@/hooks/useObserveToken';
import { updateToast } from '@/helper/toaster';
import { User, UsersRes } from '@/helper/interfaces';

interface AxiosUsersRes {
  data: UsersRes;
}

export default function page() {
  const axiosInstance = useObserveToken();
  const searchParams = useSearchParams();
  const [data, setData] = useState<User[]>([]);

  const fetch = async () => {
    const id = toast.loading('Mengambil Data...');
    try {
      const getUsers: AxiosUsersRes = await axiosInstance({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `query {
                    userById(id: "${searchParams.get('id')}") {
                    name
                    grade {
                      name
                    }
                    division {
                      name
                    }
                  }
                }`,
        },
      });

      console.log(getUsers);

      // if (getUsers.data.errors) {
      //   updateToast(
      //     id,
      //     'Terjadi Kesalahan Saat Mengambil Data',
      //     'error',
      //     false,
      //     5000
      //   );
      //   throw new Error(getUsers.data.errors[0].message);
      // }

      // if (getUsers.data.data == null || getUsers.data == null) {
      //   updateToast(id, 'Terjadi Kesalahan', 'error', false, 5000);
      //   throw new Error('Something went wrong');
      // }

      // updateToast(id, 'Data Berhasil Diambil', 'success', false, 5000);
      // setData(getUsers.data.data.users);
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-2 items-center route">
          <li>
            <h1 className=" flex items-center gap-2 text-xs md:text-lg font-semibold md:font-bold">
              <Link href={'/admin/dashboard/user/anggota'}>User</Link>
            </h1>
          </li>
          <li>
            <span className=" text-[#DFDFDF] font-semibold text-sm">
              <IoIosArrowForward />
            </span>
          </li>
          <li>
            <Link href={'/admin/dashboard/user/anggota'}>
              <h1 className=" text-[#DFDFDF] font-semibold text-sm">Anggota</h1>
            </Link>
          </li>
          <li>
            <span className=" text-[#DFDFDF] font-semibold text-sm">
              <IoIosArrowForward />
            </span>
          </li>
          <li>
            <Link
              href={`/admin/dashboard/user/anggota/detail?nama=${searchParams.get(
                'nama'
              )}`}
            >
              <h1 className=" text-[#DFDFDF] font-semibold text-sm">
                {searchParams.get('nama')}
              </h1>
            </Link>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 md:flex-col justify-between items-center gap-6 pb-10 w-full h-full">
        <UserPageLink />
        <div className=" bg-cardDashboard h-screen rounded-lg p-3 mt-5 text-sm">
          <div className=" flex gap-7 justify-between">
            <div className=" flex gap-7 ">
              <div className=" relative">
                <Image
                  src={'/assets/img/dummyDetailUser.jpg'}
                  width={230}
                  height={321}
                  alt="User"
                  className=" rounded-full"
                />
                <div className=" block mx-auto">
                  <button
                    className={` bg-[#3240B8] block mx-auto mt-3 rounded-2xl py-1 px-5 text-center text-xs`}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className=" mt-8">
                <div className="flex text-white items-center">
                  <h1 className=" text-2xl font-bold">
                    {searchParams.get('nama')}
                  </h1>
                  <div className=" pl-3 flex items-center">
                    <BsTelephone className=" text-xl" />
                    <h1 className="text-[#E3E3E3] text-sm pl-2">
                      0988-0923-9887
                    </h1>
                  </div>
                </div>
                <div>
                  <p className=" text-xsfont-semibold text-[#DFDFDF]">
                    Ambafish Poseidon
                  </p>
                </div>
                <div>
                  <p className=" text-xsfont-semibold text-[#DFDFDF]">
                    212288763
                  </p>
                </div>
                <div>
                  <p className=" text-[16px] font-semibold text-green-500">
                    Penguasa Samudera
                  </p>
                </div>
                <div className=" text-white mt-3 flex items-center gap-5">
                  <div>
                    <h1 className=" text-[16px] font-semibold">
                      Skor Kehadiran
                    </h1>
                    <div className=" flex items-center gap-3 mt-2">
                      <div className=" mt-2 border-2 bg-transparent border-[#54FFC1] rounded-xl py-3 px-4 text-center">
                        <span className=" text-4xl">/\</span>
                      </div>
                      <h1 className=" text-3xl font-semibold text-[#CCCCCC]">
                        99%
                      </h1>
                    </div>
                  </div>
                  <div className=" text-white">
                    <h1 className=" text-[16px] font-semibold">Leaderboard</h1>
                    <div className=" mt-2 border-t-2 border-b-2 border-white bg-[#3B405B] py-3 px-1">
                      <div className="flex items-center gap-2">
                        <p className=" text-[16px] font-semibold">
                          No.{' '}
                          <span className=" text-2xl font-semibold">17</span>
                        </p>
                        <p>All Division</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className=" text-[16px] font-semibold">
                          No.{' '}
                          <span className=" text-2xl text-[#F4CE46] font-semibold">
                            1
                          </span>
                        </p>

                        <p>in Web Dev</p>
                      </div>
                    </div>
                    <h1 className=" font-semibold text-[16px] pt-2">
                      Point : 1000
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-7 pr-10 cursor-pointer">
              <div className=" bg-[#3D4470] w-[1px] h-60 rounded-md"></div>
              <div>
                <div className=" flex items-center gap-3 font-semibold">
                  <MdOutlineLocationOn />
                  <p>Dirahasiakan</p>
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
          <div className=" w-full mt-3">
            <h1 className=" text-lg font-semibold">User Details</h1>
            <div className=" border-[1px] border-white rounded-md mt-3">
              <div className=" flex items-center border-b-[1px] border-b-white">
                <div className=" w-[106px] bg-[#071590] py-2 px-5 rounded-tl-md rounded-bl-md">
                  <h1>Kelas</h1>
                </div>
                <div className="  p-2 bg-[#4B58CF] w-full rounded-tr-md ">
                  <h1 className=" text-sm text-white">XI-RPL-2</h1>
                </div>
              </div>
              <div className=" flex items-center border-b-[1px] border-b-white">
                <div className=" w-[106px] bg-[#071590] py-2 px-5 rounded-tl-md rounded-bl-md">
                  <h1>Divisi</h1>
                </div>
                <div className="  p-2 bg-[#4B58CF] w-full rounded-tr-md ">
                  <h1 className=" text-sm text-white">Web Development</h1>
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
                    <h1 className=" text-sm text-white">Ambbbafish</h1>
                  </div>
                  <div className=" flex items-center gap-2 my-2">
                    <BsInstagram className=" text-lg" />
                    <h1 className=" text-sm text-white">amba_fish</h1>
                  </div>
                  <div className=" flex items-center gap-2">
                    <LuMail className=" text-lg" />
                    <h1 className=" text-sm text-white">ambafish@gmail.com </h1>
                  </div>
                </div>
              </div>
              <div className=" flex items-center border-b-[1px] border-b-white">
                <div className=" w-[106px] bg-[#071590] py-7 px-5 rounded-bl-lg">
                  <h1>Motivasi</h1>
                </div>
                <div className=" px-2 py-7 bg-[#4B58CF] w-full rounded-br-md ">
                  <h1 className=" text-sm text-white">
                    Doakan Web ini cepat selesai yah
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
