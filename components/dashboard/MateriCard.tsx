import { MateriCardProps } from '@/helper/interfaces';
import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

const MateriCard: React.FC<MateriCardProps> = ({
  judul,
  publisher,
  waktu,
  img,
  desc,
  textLink,
  classname,
  link,
  alt,
}) => {
  return (
    <div
      className={twMerge(
        ' rounded-lg border-[1px] border-white block md:flex items-center',
        classname
      )}
    >
      <div className=" block md:hidden p-5">
        <Image
          src={img}
          width={500}
          height={270}
          alt={alt}
          className=" ml-1 rounded-xl"
        />
      </div>
      <div className="pt-2 px-5 pb-5 md:p-5">
        <h1 className=" text-sm md:text-xl font-semibold">{judul}</h1>
        <div className=" flex items-center gap-2">
          <p className=" text-xs md:text-[16px] font-semibold">{publisher} </p>
          <div className=" w-1 h-1 bg-[#F0C93F] rounded-full mt-1"></div>
          <p className=" text-xs md:text-[16px] font-medium">{waktu}</p>
        </div>
        <p className=" py-3 md:py-5 text-xs md:text-[15px] font-medium text-[#DFDFDF]">
          {desc}
        </p>
        <Link href={link + `?leason=${judul}`}>
          <div className=" text-xs md:text-lg bg-darkBlue rounded-2xl py-2 px-3 w-full flex items-center justify-between border-white border-[1px] cursor-pointer">
            {textLink}
            <MdKeyboardArrowRight className=" text-lg" />
          </div>
        </Link>
      </div>
      <div className=" hidden md:block">
        <Image src={img} width={500} height={270} alt={alt} className=" ml-1" />
      </div>
    </div>
  );
};

export default MateriCard;
