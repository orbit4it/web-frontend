'use client';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UserPageLink() {
  const pathname = usePathname();

  return (
    <div className=" flex justify-between items-center gap-5">
      <Link href={'/admin/dashboard/user/anggota'}>
        <div
          className={` ${
            pathname == '/admin/dashboard/user/anggota'
              ? ' bg-[#394699]'
              : 'bg-[#3C405B] hover:bg-[#394699]'
          }  text-white font-semibold text-xl p-4 rounded-lg w-auto md:w-72 cursor-pointer`}
        >
          <h1>Anggota</h1>
        </div>
      </Link>
      <Link href={'/admin/dashboard/user/calon'}>
        <div
          className={`${
            pathname == '/admin/dashboard/user/calon'
              ? ' bg-[#394699]'
              : 'bg-[#3C405B] hover:bg-[#394699]'
          }  text-white font-semibold text-xl p-4 rounded-lg w-auto md:w-72 cursor-pointer`}
        >
          <h1>Calon Anggota</h1>
        </div>
      </Link>
      <Link href={'/admin/dashboard/user/tambah'}>
        <div
          className={`${
            pathname == '/admin/dashboard/user/tambah'
              ? ' bg-[#394699]'
              : 'bg-[#3C405B] hover:bg-[#394699]'
          }  text-white font-semibold text-xl p-[10px] rounded-lg w-auto md:w-72 cursor-pointer`}
        >
          <h1 className=" flex items-center justify-between ">
            Tambah Anggota <span className=" text-4xl">+</span>
          </h1>
        </div>
      </Link>
    </div>
  );
}
