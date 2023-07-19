import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface StrukturProps {
  image: string;
  name: string;
  fullName: string;
  jabatan: string;
  imgWidth: string;
  imgHeight: string;
}

const Person: React.FC<StrukturProps> = (props) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className="relative grid justify-center w-1/2 md:w-1/3 h-full cursor-pointer"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {onHover && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -100, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, type: 'tween' }}
            className="absolute top-7 md:top-3 -right-2 md:-right-36 w-28 h-12 md:w-48 md:h-20  md:px-1 py-1 z-10 flex flex-col justify-center"
          >
            <h1 className="text-[0.5rem] w-full text-center md:text-start md:text-xs text-white">
              Hai! Saya {props.fullName}
            </h1>
            <p className="text-[0.5rem] md:text-xs text-white/60 hidden md:block">
              Senang berkenalan dengan anda
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, type: 'tween' }}
            className="absolute top-5 md:-top-14 -right-5 md:-right-40 w-36 md:w-60 z-10 "
          >
            <Image
              src={'/assets/svg/bubleChat.svg'}
              alt="Buble Chat"
              width={200}
              height={200}
              className="w-full h-full select-none"
            />
          </motion.div>
        </AnimatePresence>
      )}
      <motion.div
        layout="preserve-aspect"
        className="relative flex items-center justify-center"
      >
        <div
          className="w-28 h-4/5 md:w-48 z-10 absolute bottom-0"
          style={{
            borderRadius: '0px 0px 10px 10px',
            background:
              'linear-gradient(180deg, rgba(35, 1, 61, 0.00) 67.99%, rgba(107, 29, 204, 0.50) 99.98%, rgba(116, 33, 221, 0.78) 99.99%, rgba(0, 0, 0, 0.30) 100%)',
          }}
        ></div>
        <motion.div
          layout="preserve-aspect"
          style={{
            overflowY: onHover ? 'visible' : 'hidden',
            scaleX: onHover ? 0.7 : 1,
            scaleY: onHover ? 0.7 : 1,
          }}
          transition={{ duration: 1, type: 'tween' }}
          className={twMerge(
            `w-28 md:w-48 h-40 md:h-64 md:${props.imgHeight} relative`
          )}
        >
          <Image
            src={props.image}
            width={500}
            height={500}
            className={`w-28 h-40 md:w-52 md:h-80  md:${
              props.imgHeight
            } absolute bottom-0 left-1/2 -translate-x-1/2 ${
              onHover ? 'translate-y-10 ' : 'translate-y-16 md:translate-y-36'
            } transition-all duration-300 ease-in-out`}
            alt="elite"
            priority
          />
        </motion.div>
        <h3 className="font-bold text-xl md:text-3xl text-white text-center w-40 absolute mx-auto left-1/2 -translate-x-1/2 right-0 -bottom-4 z-20">
          {props.name}
        </h3>
      </motion.div>

      <p className="text-sm md:text-lg text-white/70 text-center mt-4 w-full z-20">
        {props.jabatan}
      </p>
    </div>
  );
};

export default Person;
