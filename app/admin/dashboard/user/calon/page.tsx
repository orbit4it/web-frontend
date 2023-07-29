/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import DetailCalon from '@/components/admin/DetailCalon';
import UserPageLink from '@/components/admin/UserPageLink';
import Apicall from '@/helper/apicall';
import {
  DetailCalonState,
  PendingUser,
  PendingUserRes,
} from '@/helper/interfaces';
import { updateToast } from '@/helper/toaster';
import useObserveToken from '@/hooks/useObserveToken';
import { useEffect, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { toast } from 'react-toastify';

interface AxiosPendingUser {
  data: PendingUserRes;
}

export default function page() {
  const axiosInstance = useObserveToken();
  const [data, setData] = useState<PendingUser[]>([]);
  const [detailCalon, setDetailCalon] = useState<DetailCalonState>({
    division: '',
    email: '',
    grade: '',
    name: '',
    nis: '',
    motivasi: '',
  });
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const fetch = async () => {
    const id = toast.loading('Mengambil Data...');
    try {
      const getPendingUser: AxiosPendingUser = await axiosInstance({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `query {
            pendingUsers {
              id
              name
              email
              nis
              grade {
                id
                name
              }
              division {
                id
                name
              }
              motivation
            }
          }`,
        },
      });

      if (getPendingUser.data.errors) {
        updateToast(
          id,
          'Terjadi Kesalahan Saat Mengambil Data',
          'error',
          false,
          5000
        );
        throw new Error(getPendingUser.data.errors[0].message);
      }

      if (getPendingUser.data.data == null || getPendingUser.data == null) {
        updateToast(id, 'Terjadi Kesalahan', 'error', false, 5000);
        throw new Error('Something went wrong');
      }

      updateToast(id, 'Data Berhasil Diambil', 'success', false, 5000);
      setData(getPendingUser.data.data.pendingUsers);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const confirmUser = async (id: number) => {
    const idToast = toast.loading('Mengambil Data...');
    const post = await Apicall(
      `
    mutation {
      confirmUser(id: ${id}) {
      ... on Success {
      message
      }
     ... on Error {
     error
    }
  }
}
`
    );
    fetch();
    console.log(post);
    if (post.errors) {
      updateToast(idToast, post.errors[0].message, 'error', false, 5000);
    } else if (post.data) {
      updateToast(
        idToast,
        post.data.confirmUser.message,
        'success',
        false,
        5000
      );
    }
  };

  const rejectUser = async (id: number) => {
    const idToast = toast.loading('Please Wait...');
    const post = await Apicall(
      ` 
        mutation {
          deletePendingUser(id: ${id}) {
          ... on Success {
             message
          }
          ... on Error {
          error
          }
        }
      }`
    );
    fetch();

    if (post.errors) {
      updateToast(idToast, post.errors[0].message, 'error', false, 5000);
    } else if (post.data) {
      updateToast(
        idToast,
        post.data.deletePendingUser.message,
        'error',
        false,
        5000
      );
    }
  };

  const detailUser = (
    division: string,
    email: string,
    grade: string,
    name: string,
    nis: any,
    motivasi: string
  ) => {
    setDetailCalon({
      division: division,
      email: email,
      grade: grade,
      name: name,
      nis: nis,
      motivasi: motivasi,
    });
  };
  return (
    <>
      {showDetail && (
        <DetailCalon
          division={detailCalon.division}
          email={detailCalon.email}
          grade={detailCalon.grade}
          name={detailCalon.name}
          nis={detailCalon.nis}
          motivasi={detailCalon.motivasi}
          setShow={setShowDetail}
        />
      )}
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
        <div className=" bg-cardDashboard rounded-lg p-3 mt-5 text-sm ">
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
              className=" py-3 px-4 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none"
            />
            <h1>Until: </h1>
            <input
              type="date"
              className=" py-3 px-4 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none"
            />
            <button className=" py-3 px-3 rounded-lg bg-[#7585BF] text-white text-xs font-semibold outline-none">
              Reset
            </button>
          </form>
          <div className=" mt-5">
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
                  <td align="center" className=" pb-3  text-sm ">
                    Terima
                  </td>
                  <td align="center" className=" pb-3  text-sm ">
                    Tolak
                  </td>
                  <td align="center" className=" pb-3  text-sm ">
                    Detail
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.map((person, key) => {
                  return (
                    <tr key={key} className="odd:bg-[#3B405B]">
                      <td align="center" className="text-xs py-3 px-2">
                        {person.id}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.name}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.email}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.nis ? person.nis : '2122119131'}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.grade.name}
                      </td>
                      <td align="center" className="text-xs py-3 px-2">
                        {person.division.name}
                      </td>
                      <td align="center" className=" text-xs py-3 px-2">
                        <button
                          className=" py-2  px-2 bg-green-600 rounded-md text-white text-sm cursor-pointer hover:scale-95 duration-200 font-semibold"
                          onClick={(e) => {
                            confirmUser(person.id);
                          }}
                        >
                          Terima
                        </button>
                      </td>
                      <td align="center" className=" text-xs py-3 px-2">
                        <button
                          className=" py-2 px-2 bg-red-600 rounded-md text-white text-sm cursor-pointer hover:scale-95 duration-200 font-semibold"
                          onClick={(e) => {
                            rejectUser(person.id);
                          }}
                        >
                          Tolak
                        </button>
                      </td>
                      <td
                        align="center"
                        className="py-3 px-2"
                        onClick={(e) => {
                          detailUser(
                            person.division.name,
                            person.email,
                            person.grade.name,
                            person.name,
                            person.nis,
                            person.motivation
                          );
                          setShowDetail(!showDetail);
                        }}
                      >
                        <AiOutlineInfoCircle className=" cursor-pointer text-white text-lg" />
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
