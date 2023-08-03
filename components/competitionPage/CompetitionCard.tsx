import { spawn } from 'child_process';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsTrashFill } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
interface CompetitionCardProps {
  id: number,
  classname?: string;
  title: string;
  speaker: string;
  createdAt: string;
  cover: string;
  desc: string;
  textLink: string;
  alt: string;
  admin?: boolean;
}
const CompetitionCard: React.FC<CompetitionCardProps> = ({
  id,
  title,
  speaker,
  createdAt,
  cover,
  desc,
  textLink,
  classname,
  alt,
  admin = false
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
          src={cover}
          width={500}
          height={270}
          alt={alt}
          className=" ml-1 rounded-xl"
        />
      </div>
      <div className="pt-2 px-5 pb-5 md:p-5">
        <div className='flex'>
        <h1 className=" text-sm md:text-xl font-semibold">{title}</h1>
        {admin && ( <BsTrashFill size={20} fill='#F43838' className='ml-5 relative top-1'/> )}
        </div>
        <div className=" flex items-center gap-2">
          <p className=" text-xs md:text-[16px] font-semibold">{speaker} </p>
          <div className=" w-1 h-1 bg-[#F0C93F] rounded-full mt-1"></div>
          <p className=" text-xs md:text-[16px] font-medium">{createdAt}</p>
        </div>
        <p className=" py-3 md:py-5 text-xs md:text-[15px] font-medium text-[#DFDFDF]">
          {desc}
        </p>
        <Link href={`/admin/dashboard/lomba/${id}`}>
          <div className=" text-xs md:text-lg bg-darkBlue rounded-2xl py-2 px-3 w-full flex items-center justify-between border-white border-[1px] cursor-pointer">
            {textLink}
            <MdKeyboardArrowRight className=" text-lg" />
          </div>
        </Link>
      </div>
      <div className=" hidden md:block">
        <Image
          src={cover}
          width={500}
          height={270}
          alt={alt}
          className=" ml-1"
        />
      </div>
    </div>
  );
};

export default CompetitionCard;
