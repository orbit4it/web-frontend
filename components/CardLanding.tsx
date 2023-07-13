import { CardLandingProps } from '@/helper/interfaces';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const CardLanding: React.FC<CardLandingProps> = ({
  judul,
  desc,
  cardRef,
  classname,
  judulClassname,
  descClassname,
}) => {
  return (
    <div
      ref={cardRef}
      className={twMerge(
        `glassmorphism bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 before:rounded-3xl rounded-3xl text-white px-5 py-3 md:p-5`,
        classname
      )}
    >
      <h1
        className={twMerge(
          `text-sm md:text-3xl tracking-wide font-semibold md:font-bold`,
          judulClassname
        )}
      >
        {judul}
      </h1>
      <p
        className={twMerge(
          `opacity-60 text-xs md:text-base font-normal text-start pt-2 md:pt-4`,
          descClassname
        )}
      >
        {desc}
      </p>
    </div>
  );
};

export default CardLanding;
