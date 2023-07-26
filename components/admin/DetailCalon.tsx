import { DetailCalon } from '@/helper/interfaces';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { RiCloseFill } from 'react-icons/ri';

const DetailCalon: React.FC<DetailCalon> = ({
  division,
  email,
  grade,
  name,
  nis,
  motivasi,
  classname,
  show,
  close,
}) => {
  const closeDetail = () => {
    show = !show;
  };

  return (
    <div
      className={twMerge(
        `fixed w-screen h-screen flex justify-center items-center inset-0 z-10 ${
          show ? 'block' : 'hidden'
        }`,
        classname
      )}
    >
      <div
        className={` ${
          show ? 'opacity-100' : 'opacity-0'
        } w-screen h-screen flex justify-center items-center`}
      >
        <div
          className={` ${
            show ? 'opacity-100' : 'opacity-0'
          } glassmorphism backdrop-filter backdrop-blur-lg bg-opacity-10 w-auto h-auto mx-auto my-auto duration-200 text-white p-3 relative`}
        >
          <h1 className=" font-bold text-3xl text-center px-5">{name}</h1>
          <RiCloseFill
            className=" text-white text-xl absolute right-10 top-[25px] cursor-pointer z-10"
            onClick={(e) => {
              close();
            }}
          />
          <div className=" mt-3 flex items-center gap-3 text-white/70">
            <p>{division}</p>
            <p>{grade}</p>
            <p>{nis ? nis : 'Tidak ada NIS'}</p>
            <p>{email}</p>
          </div>
          <div className=" flex gap-3 text-white/70 w-auto md:w-[450px] h-72 mt-4">
            <h1>Motivasi: </h1>
            <div className=" px-3">
              <h1 className="overflow-auto w-full h-full text-justify">
                {motivasi ? motivasi : 'null'}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCalon;
