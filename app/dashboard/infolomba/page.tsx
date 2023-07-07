import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Poster from '@/public/assets/img/Poster.png';

export default function page() {
  return (
    <>
      {/* Route Section */}
      <section>
        <ul className="flex gap-4 items-center route">
          <li>
            <div className="flex items-center space-x-2 text-sm">
              <h1 className="text-xs md:text-lg font-semibold md:font-bold">
                Dashboard
              </h1>
              <AiOutlineRight />
              <p>Info Lomba</p>
              <AiOutlineRight />
              <p>Front-end Essentials & Learning Path</p>
            </div>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="pb-10">
        <div className="bg-profileCard flex flex-col md:flex-row py-10 px-8 mt-6 rounded-[15px] shadow-md">
          <div className="pr-5">
            <h1 className="text-xl font-bold">
              Front-end Essentials & Learning Path
            </h1>
            <p className="text-sm opacity-80 mt-2">Posted by ORBIT'23</p>
            <div className="flex space-x-3 mt-4">
              <div className="bg-[#D4D9F4] rounded-[10px] text-center text-[#21117E] px-10 py-5 font-bold">
                <AiOutlineClockCircle
                  fill="#21117E"
                  className="mx-auto font-bold mb-3"
                  size={25}
                />
                <p>14.00 WIB</p>
                <p>26 Mei 2023</p>
              </div>
              <div className="bg-gradient-to-br from-[#89FF76] to-[#C1F0B970] rounded-[10px] text-center text-[#4AA12B] px-10 py-5 font-bold">
                <BsCurrencyDollar
                  className="mx-auto font-bold mt-3 mb-1"
                  size={40}
                />
                <h1>Free Entry</h1>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-textDashboard mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi repellat possimus illum, harum vero architecto
                eligendi eaque tenetur aliquam sunt expedita officia facere
                corrupti, placeat ad quibusdam voluptate laudantium provident.
              </p>
              <h1 className="mb-2 font-bold">Syarat Lomba</h1>
              <p className="text-sm mb-7">Tidak ada persyaratan khusus</p>
              <ul>
                <h1 className="font-bold mb-2">Detail lebih lanjut :</h1>
                <li>
                  <p className="flex items-center">
                    <BsTelephone className="mr-3" /> 0857-7368-7666
                  </p>
                  <p className="flex space-x-2 items-center">
                    <BsInstagram className="mr-3" /> smkdev.official
                  </p>
                </li>
              </ul>
              <Link legacyBehavior href="#">
                <a className="mt-7 rounded-[15px] font-bold block bg-gradient-to-b from-[#071590] to-[#4B58CF] py-3 text-center w-full">
                  Daftar Sekarang
                </a>
              </Link>
            </div>
          </div>
          <Image
            src={Poster}
            alt="Poster"
            className="order-1 bg-cover w-[435px] h-[435px] border-[4px] rounded-md border-[#262B49]"
          />
        </div>
        <div></div>
      </section>
    </>
  );
}
