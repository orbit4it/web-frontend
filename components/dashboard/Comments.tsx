import { CommentsProps } from '@/helper/interfaces';
import React from 'react';
import { RiStarSFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

const Comments: React.FC<CommentsProps> = ({
  nama,
  waktu,
  stars,
  comment,
  imgProfil,
  classname,
}) => {
  const starArray = Array.from({ length: stars });

  return (
    <div className={twMerge('mx-2', classname)}>
      <div className="flex items-center gap-2 relative">
        <div className="w-10 h-10 bg-[#D9D9D9] rounded-full"></div>
        <div>
          <p className=" text-xs md:text-[15px]">{nama}</p>
          <div className="  flex items-center gap-1 mt-1">
            {starArray.map((_, index) => (
              <RiStarSFill key={index} className=" text-[#F0C93F]" />
            ))}
          </div>
        </div>
        <p className="text-[#6F6F6F] text-xs absolute right-0 bottom-0 top-1">
          {waktu}
        </p>
      </div>
      <div className=" mt-3 w-auto md:w-[420px]">
        <p className="text-[#DFDFDF] text-xs md:text-[15px]">{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
