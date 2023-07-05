'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

export default function page() {
  const [currentItem, setCurrentItem] = useState(0);
  const item = [
    {
      title: 'HTML Development Basics',
      name: 'Arief Muhammad',
      time: '13.00',
      description:
        'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
    },
    {
      title: 'CSS Styling Techniques',
      name: 'Budi Setiawan',
      time: '15.30',
      description:
        'Pada materi kali ini, kita akan mempelajari teknik-teknik styling dengan CSS. Ikuti dengan seksama dan jangan ragu untuk bertanya!',
    },
    {
      title: 'Materi 3',
      name: 'Arief Muhammad',
      time: '13.00',
      description:
        'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
    },
    {
      title: 'Materi 4',
      name: 'Arief Muhammad',
      time: '13.00',
      description:
        'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
    },
    {
      title: 'Materi 5',
      name: 'Arief Muhammad',
      time: '13.00',
      description:
        'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
    },
  ];

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % item.length);
  };

  console.log(currentItem);

  return (
    <>
      {/* Route Section */}
      <section>
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Dashboard
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="flex justify-between mt-6 gap-6 pb-10">
        <div className="w-full">
          <div className="bg-profileCard py-5 px-7 rounded-[15px] shadow-md">
            <div className="flex justify-between mb-3">
              <div className="space-y-1">
                <h1 className="font-bold">Profile</h1>
                <h1>Nama Orang</h1>
                <p className="text-sm">X PPLG 1</p>
              </div>
              <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            </div>
            <h1 className="text-[#54FFC1] text-sm mb-10">Web development</h1>
            <Link legacyBehavior href="#">
              <a className="opacity-60 text-sm flex items-center">
                More
                <AiOutlineRight size={14} className="ml-1" />
              </a>
            </Link>
          </div>
          <div className="mt-6 py-5 px-7 bg-profileCard rounded-[15px] shadow-md">
            <h1 className="font-bold">Materi Terbaru</h1>
            <div className="rounded-[11px] relative bg-sky-500 mt-4 flex items-center justify-between">
              <div>
                <div className="flex justify-between items-center p-5">
                  <div>
                    <h1 className="font-bold">{item[currentItem].title}</h1>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <p className="font-bold">{item[currentItem].name}</p>
                        <div className="w-[4px] h-[4px] bg-[#F0C93F] rounded-full"></div>
                        <p>{item[currentItem].time}</p>
                      </div>
                    </div>
                  </div>
                  <Link legacyBehavior href="#">
                    <a>
                      <AiOutlineRight size={17} />
                    </a>
                  </Link>
                </div>
                <hr className="h-[3px] bg-white" />
                <p className="pl-5 pr-16 pt-5 pb-10 text-sm">
                  {item[currentItem].description}
                </p>
              </div>
              <div className="bg-black absolute mt-8 -right-5 opacity-70 rounded-full">
                <button className="p-3" onClick={nextItem}>
                  <AiOutlineRight size={17} opacity={100} />
                </button>
              </div>
            </div>
            <div className="mt-3 flex justify-center space-x-3 items-center">
              {item.map((item, index) => (
                <>
                  <div
                    key={index}
                    className={
                      index === currentItem
                        ? 'w-[12px] h-[12px] bg-gray-500 rounded-full transition-all duration-500'
                        : 'w-[9px] h-[9px] bg-gray-200 rounded-full'
                    }
                  ></div>
                </>
              ))}
            </div>
            <div className="mt-6">
              <h1 className="font-bold">Top Materi</h1>
              <div className="rounded-[11px] relative bg-sky-500 mt-4 flex items-center justify-between">
                <div>
                  <div className="flex justify-between items-center p-5">
                    <div>
                      <h1 className="font-bold">HTML Development Basics</h1>
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <p className="font-bold">Arief Muhammad</p>
                          <div className="w-[4px] h-[4px] bg-[#F0C93F] rounded-full"></div>
                          <p>13.00</p>
                        </div>
                      </div>
                    </div>
                    <Link legacyBehavior href="#">
                      <a>
                        <AiOutlineRight size={17} />
                      </a>
                    </Link>
                  </div>
                  <hr className="h-[3px] bg-white" />
                  <p className="pl-5 pr-16 pt-5 pb-8 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officiis perspiciatis maiores iste minima saepe culpa
                    debitis ex rem vel eos, animi aperiam totam pariatur alias
                    reiciendis! Itaque ea in natus dolores porro fugiat vitae
                    architecto?
                  </p>
                  <p className="font-bold px-5 pb-3 flex items-center">
                    <AiFillStar size={15} className="mr-3" /> 5.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="space-y-3">
            <div className="py-5 px-7 bg-profileCard rounded-[15px] shadow-md">
              calendar
            </div>
            <div className="py-5 px-7 bg-profileCard rounded-[15px] shadow-md">
              <h1 className="font-bold">Info Lomba</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
