'use client';
import Apicall from '@/helper/apicall';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Map from '@/public/assets/img/map.png';
import Image from 'next/image';
import Link from 'next/link';
import { BiMap } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';

export default function page() {
  const router = useRouter();

  const checkAuth = async () => {
    const res = await Apicall(`
   query {
         me {
    id
    name
    role
  }
          }
    `);

    if (!res) {
      router.push('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  });
  return (
    <>
      {/* Route Section */}
      <section className="pl-10">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Profile
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 ">
        <div className="bg-[#262B49] p-5 rounded-[15px]">
          <div className="flex">
            <div className="flex">
              <div>
                <div className="w-[192px] h-[192px] bg-[#D9D9D9] rounded-full"></div>
                <Link legacyBehavior href="#" className="">
                  <a className="text-center mt-4 block text-sm py-1 w-[70%] mx-auto bg-gradient-to-b from-[#071590] to-[#4B58CF] rounded-[15px]">
                    Edit Profile
                  </a>
                </Link>
              </div>
              <div className="py-8 my-2 ml-8">
                <div className="flex items-center space-x-6">
                  <h1 className="font-bold text-xl">Username</h1>
                  <div className="flex items-center space-x-3">
                    <BsTelephone size={24} />
                    <p className="text-sm">0895-666-666</p>
                  </div>
                </div>
                <p className="my-1">Nama Lengkap</p>
                <p className="text-sm mt-1 text-[#54FFC1]">
                  Enthusiast in UI/UX Design
                </p>
                <h1 className="mt-10 mb-4">Skor Kehadiran</h1>
                <div className="flex mr-8 space-x-3">
                  <h1 className="py-5 px-6 border-2 border-[#54FFC1] rounded-[15px] text-3xl">
                    A
                  </h1>
                  <p className="text-[#DFDFDF]">
                    Nilai kehadiran kamu 87% Mantap, yang rajin ya eskulnya!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1px] bg-[#3D4470]"></div>
            <div>
              <div className="flex p-10">
                <BiMap size={33} className="mr-3" />
                <p className="text-sm">
                  Jl. Kliningan No.6, Turangga,
                  <br /> Kec. Lengkong, Kota Bandung, Jawa Barat 40264
                </p>
              </div>
              <div className="mt-2 flex flex-col justify-center w-[192px] mx-auto">
                <Image
                  src={Map}
                  alt="map"
                  className="mx-auto rounded-t-[15px]"
                />
                <Link legacyBehavior href="#">
                  <a className="text-center text-sm py-1 bg-gradient-to-b from-[#071590] to-[#4B58CF] rounded-b-[15px]">
                    Open in Maps
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-6 rounded-[15px]">
            <h1 className="my-3">User Details</h1>
            <div className="flex">
              <div className="bg-[#071590] border rounded-tl-[15px] py-3 pl-4 pr-[33px]">
                <h1>Kelas</h1>
              </div>
              <div className="bg-[#4B58CF] border w-full py-3 pl-4 rounded-tr-[15px]">
                <p>X PPLG 1</p>
              </div>
            </div>
            <div className="flex border">
              <div className="bg-[#071590] border py-3 pl-4 pr-8">
                <h1>Divisi</h1>
              </div>
              <div className="bg-[#4B58CF] border w-full py-3 pl-4">
                <p>Web Development</p>
              </div>
            </div>
            <div className="flex border">
              <div className="bg-[#071590] border pt-3 pl-4 pr-[26px]">
                <h1>
                  Social
                  <br /> Media
                </h1>
              </div>
              <div className="bg-[#4B58CF] border w-full py-3 pl-4">
                <p>X PPLG 1</p>
                <p>X PPLG 1</p>
                <p>X PPLG 1</p>
              </div>
            </div>
            <div className="flex border rounded-bl-[15px]">
              <div className="bg-[#071590] border py-3 pl-4 pr-[9px] rounded-bl-[15px]">
                <h1>Motivasi</h1>
              </div>
              <div className="bg-[#4B58CF] border w-full py-3 pl-4 rounded-br-[15px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  exercitationem quo voluptates ad velit nulla?
                </p>
              </div>
            </div>
            {/* <div className="grid grid-cols-2">
              <div className="border w-1/2">test</div>
              <div className="border">test2</div>
              <div className="border">test</div>
              <div className="border">test3</div>
              <div className="border">test</div>
              <div className="border">test4</div>
              <div className="border">test</div>
              <div className="border">test5</div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
