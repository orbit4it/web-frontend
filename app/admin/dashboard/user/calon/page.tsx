'use client';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaSquareCheck } from 'react-icons/fa6';
import UserPageLink from '@/components/admin/UserPageLink';
import { data } from 'autoprefixer';
import Apicall from '@/helper/apicall';
import { toast } from 'react-toastify';
import { updateToast } from '@/helper/toaster';

export default function page() {
  const [data, setData] = useState([{}]);
  const id = toast.loading('Mengambil Data...');

  const fetch = async () => {
    const id = toast.loading('Mengambil Data...');
    const fetchData = await Apicall(
      `{
        pendingUsers {
        id
        name
        email
        nis
        gradeId
        divisionId
        }
      },`,
      true
    );
    console.log(fetchData);

    if (fetchData.errors) {
      updateToast(id, fetchData.errors[0].message, 'error', false, 5000);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const [rows, setRows] = useState([
    {
      id: 1,
      noPen: 2121212,
      nama: 'Dimas Ukin',
      email: 'Dimas@gmail.com',
      nis: 2121212,
      kelas: 'XI PPLG 2',
      divisi: 'IT Support',
      terima: false,
      tolak: false,
    },
    {
      id: 2,
      noPen: 2121212,
      nama: 'Dimas Ukin',
      email: 'Dimas@gmail.com',
      nis: 2121212,
      kelas: 'XI PPLG 2',
      divisi: 'IT Support',
      terima: false,
      tolak: false,
    },
    // Add more rows here if needed
  ]);

  const handleCheckboxChange = (id: number, type: any) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        if (type === 'terima') {
          return {
            ...row,
            terima: !row.terima,
            tolak: false,
          };
        } else if (type === 'tolak') {
          return {
            ...row,
            terima: false,
            tolak: !row.tolak,
          };
        }
      }
      return row;
    });

    setRows(updatedRows);
  };

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
            <table className=" w-full h-full overflow-auto">
              <thead>
                <tr>
                  <td align="center" className=" pb-3  text-sm">
                    No.
                  </td>
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
                {rows.map((row) => (
                  <tr key={row.id} className="odd:bg-[#3B405B]">
                    <td align="center">{row.id}</td>
                    <td align="center">{row.noPen}</td>
                    <td align="center">{row.nama}</td>
                    <td align="center">{row.email}</td>
                    <td align="center">{row.nis}</td>
                    <td align="center">{row.kelas}</td>
                    <td align="center">{row.divisi}</td>
                    <td align="center" className=" text-xs p-5">
                      <input
                        type="checkbox"
                        className="w-[22px] h-[22px] bg-transparent rounded-md"
                        onChange={() => handleCheckboxChange(row.id, 'terima')}
                        checked={row.terima}
                        disabled={row.tolak}
                      />
                    </td>
                    <td align="center" className=" text-xs p-5">
                      <input
                        type="checkbox"
                        className="w-[22px] h-[22px] bg-transparent rounded-md"
                        onChange={() => handleCheckboxChange(row.id, 'tolak')}
                        checked={row.tolak}
                        disabled={row.terima}
                      />
                    </td>
                    <td align="center">
                      <AiOutlineInfoCircle className=" cursor-pointer text-white text-lg" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
