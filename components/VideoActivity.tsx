'use client';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import Foto from '@/public/assets/img/FotoDummy.png';

const VideoActivity = ({ title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButton = () => {
    if (isOpen == true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleButton}
        className="border border-[#EE2ED1] border-opacity-40 flex items-center font-bold bg-whiteTransparent py-3 px-4 rounded-[40px] w-full"
      >
        {isOpen ? (
          <RiArrowDownSLine size={30} />
        ) : (
          <RiArrowRightSLine size={30} />
        )}
        <h1 className="text-sm lg:text-md">{title}</h1>
      </button>
      {isOpen ? (
        <>
          <div className="my-3 space-x-3 flex overflow-auto">
            <Image src={Foto} alt="Foto" />
            <Image src={Foto} alt="Foto" />
            <Image src={Foto} alt="Foto" />
          </div>
          <div className="my-3 flex items-center space-x-2">
            <AiFillYoutube size={25} />
            <p className="font-bold">Check it out!</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default VideoActivity;
