import { DetailCalon } from '@/helper/interfaces';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const DetailCalon: React.FC<DetailCalon> = ({
  division,
  email,
  grade,
  name,
  nis,
  motivasi,
  classname,
  show,
}) => {
  return (
    <div
      className={twMerge(
        `fixed w-screen h-screen flex justify-center items-center inset-0 z-10 ${
          show ? 'block' : 'hidden'
        }`,
        classname
      )}
    >
      <div className=" w-screen h-screen">
        <div className="glassmorphism bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1>Halo</h1>
          <h1>{email}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailCalon;
