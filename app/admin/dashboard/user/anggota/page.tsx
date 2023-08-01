/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Apicall from '@/helper/apicall';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineTrash } from 'react-icons/hi';
import UserPageLink from '@/components/admin/UserPageLink';
import { User, UsersRes } from '@/helper/interfaces';
import { updateToast } from '@/helper/toaster';
import useObserveToken from '@/hooks/useObserveToken';
import { toast } from 'react-toastify';

interface AxiosUsersRes {
  data: UsersRes;
}

export default function page() {
  const axiosInstance = useObserveToken();
  const [data, setData] = useState<User[]>([]);
  const router = useRouter();

  const fetch = async () => {
    const id = toast.loading('Mengambil Data...');
    try {
      const getUsers: AxiosUsersRes = await axiosInstance({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `query {
            users{
              id
              name
              role
              division {
                id
                name
              }
              grade {
                id
                name
              }
            }
          }`,
        },
      });

      if (getUsers.data.errors) {
        updateToast(
          id,
          'Terjadi Kesalahan Saat Mengambil Data',
          'error',
          false,
          5000
        );
        throw new Error(getUsers.data.errors[0].message);
      }

      if (getUsers.data.data == null || getUsers.data == null) {
        updateToast(id, 'Terjadi Kesalahan', 'error', false, 5000);
        throw new Error('Something went wrong');
      }

      updateToast(id, 'Data Berhasil Diambil', 'success', false, 5000);
      setData(getUsers.data.data.users);
    } catch (error: any) {
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
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className=" flex items-center gap-2 text-xs md:text-lg font-semibold md:font-bold">
              User
              <span className=" text-[#DFDFDF] font-semibold text-sm">
                <IoIosArrowForward />
              </span>
              <span className=" text-[#DFDFDF] font-semibold text-sm">
                {' '}
                Anggota
              </span>
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 md:flex-col justify-between items-center gap-6 pb-10 w-full h-full">
        <UserPageLink />
        <div className=" bg-cardDashboard rounded-lg p-3 mt-5 text-sm">
          <form className=" block lg:flex items-center gap-3">
            <div className=" relative flex items-center gap-2">
              <h1>Search</h1>
              <div className=" relative text-white">
                <input
                  type="text"
                  placeholder="Search..."
                  className=" border-[1px] border-white rounded-md bg-transparent px-8 p-1 outline-none"
                />
              </div>
              <div className=" absolute top-[5px] left-14">
                <BiSearch className=" text-lg" />
              </div>
            </div>
            <h1 className=" mt-3 lg:mt-0">Range From:</h1>
            <input
              type="date"
              className=" py-1 px-4 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none mt-2 lg:mt-0 w-full lg:w-auto"
            />
            <h1 className=" mt-3 lg:mt-0">Until: </h1>
            <input
              type="date"
              className=" py-1 px-4 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none mt-2 lg:mt-0 pr-3 lg:pr-0 w-full lg:w-auto"
            />
            <div className=" w-full lg:w-auto mt-2 lg:mt-0">
              <button className=" py-1 px-3 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none w-full lg:w-auto">
                Reset
              </button>
            </div>
          </form>
          <div className=" mt-5 overflow-auto">
            <table className=" w-full h-full overflow-auto">
              <thead>
                <tr>
                  <td align="center" className=" pb-3  text-sm">
                    No
                  </td>
                  <td align="center" className=" pb-3  text-sm">
                    Nama
                  </td>
                  <td align="center" className=" pb-3  text-sm">
                    Email
                  </td>
                  <td align="center" className=" pb-3  text-sm">
                    NIS
                  </td>
                  <td align="center" className=" pb-3  text-sm">
                    Kelas
                  </td>
                  <td align="center" className=" pb-3  text-sm">
                    Divisi
                  </td>
                  <td align="center" className=" pb-3 text-sm">
                    Kehadiran
                  </td>
                  <td align="center" className=" pb-3 text-sm opacity-0">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.map((person, index) => {
                  return (
                    <tr
                      key={index}
                      className="odd:bg-[#3B405B] cursor-pointer"
                      onClick={(e) => {
                        router.push(
                          `/admin/dashboard/user/anggota/detail?id=${person.id}`
                        );
                      }}
                    >
                      <td align="center" className="text-xs py-3 px-2">
                        {index}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.name}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        in-development
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.nis ? person.nis : '2122119131'}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.grade?.name}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.division?.name}
                      </td>
                      <td align="center" className=" text-xs p-5">
                        /\
                      </td>
                      <td align="center">
                        <HiOutlineTrash className=" cursor-pointer text-red-500 text-lg" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
