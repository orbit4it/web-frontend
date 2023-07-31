'use client';
import Apicall from '@/helper/apicall';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import UserPageLink from '@/components/admin/UserPageLink';
import { toast } from 'react-toastify';
import { updateToast } from '@/helper/toaster';
import { CalonUserProps, DetailCalonState } from '@/helper/interfaces';
import { useRouter } from 'next/navigation';
import DetailCalonUser from '@/components/admin/DetailCalon';

export default function page() {
  const [data, setData] = useState<CalonUserProps[]>([]);
  const [detailCalon, setDetailCalon] = useState<DetailCalonState>({
    division: '',
    email: '',
    grade: '',
    name: '',
    nis: '',
    motivation: '',
  });
  const [showDetail, setShowDetail] = useState<boolean>(false);

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

  const fetch = async () => {
    const id = toast.loading('Mengambil Data...');
    const fetchData = await Apicall(
      `{
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
      },`,
      true
    );
    console.log(fetchData);

    if (fetchData.errors) {
      updateToast(id, fetchData.errors[0].message, 'error', false, 5000);
    } else if (fetchData) {
      setData(fetchData.data.pendingUsers);
      updateToast(id, 'Data Berhasil Diambil', 'success', false, 5000);
    }
    // console.log(data);
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

    console.log(post);
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
    motivation: string
  ) => {
    setDetailCalon({
      division: division,
      email: email,
      grade: grade,
      name: name,
      nis: nis,
      motivation: motivation,
    });

    console.log(detailCalon);
  };

  const setClose = () => {
    setShowDetail(!showDetail);
  };
  return (
    <>
      <DetailCalonUser
        division={detailCalon.division}
        email={detailCalon.email}
        grade={detailCalon.grade}
        name={detailCalon.name}
        nis={detailCalon.nis}
        motivasi={detailCalon.motivation}
        show={showDetail}
        close={setClose}
      />
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
          {/* <form className=" flex items-center gap-3">
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
          </form> */}
          <div className=" mt-5 overflow-auto">
            <table className=" w-full h-full ">
              <thead>
                <tr>
                  <td align="center" className=" pb-3  text-sm">
                    No Pendaftaran
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
                {data.map((item, key) => {
                  return (
                    <tr key={key} className="odd:bg-[#3B405B]">
                      <td align="center">{item.id}</td>
                      <td align="center">{item.name}</td>
                      <td align="center">{item.email}</td>
                      <td align="center">{item.nis ? item.nis : 'null'}</td>
                      <td align="center">{item.grade.name}</td>
                      <td align="center">{item.division.name}</td>
                      <td align="center" className=" text-xs p-5">
                        <button
                          className=" py-2 px-3 bg-green-600 rounded-md text-white text-sm cursor-pointer hover:scale-95 duration-200 font-semibold"
                          onClick={(e) => {
                            confirmUser(item.id);
                          }}
                        >
                          Terima
                        </button>
                      </td>
                      <td align="center" className=" text-xs p-5">
                        <button
                          className=" py-2 px-3 bg-red-600 rounded-md text-white text-sm cursor-pointer hover:scale-95 duration-200 font-semibold"
                          onClick={(e) => {
                            rejectUser(item.id);
                          }}
                        >
                          Tolak
                        </button>
                      </td>
                      <td
                        align="center"
                        onClick={(e) => {
                          detailUser(
                            item.division.name,
                            item.email,
                            item.grade.name,
                            item.name,
                            item.nis,
                            item.motivation
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
