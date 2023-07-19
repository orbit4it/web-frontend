import { StrukturProps } from '@/helper/interfaces';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

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
            className="absolute top-5 md:top-0 -right-5 md:-right-40 w-36 md:w-60 z-10 "
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 391 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bd_19_929)">
                <path
                  d="M42.1811 25C42.1811 22.2386 44.4197 20 47.1811 20H362C364.761 20 367 22.2386 367 25V152.298C367 155.059 364.761 157.298 362 157.298H70.7963C70.4658 157.298 70.1361 157.331 69.812 157.396L30.9021 165.209C26.2763 166.137 23.0562 160.731 26.0764 157.106L41.0225 139.167C41.7711 138.268 42.1811 137.136 42.1811 135.966V25Z"
                  fill="url(#paint0_linear_19_929)"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M43.1811 25C43.1811 22.7909 44.972 21 47.1811 21H362C364.209 21 366 22.7909 366 25V152.298C366 154.507 364.209 156.298 362 156.298H70.7963C70.3997 156.298 70.004 156.337 69.6151 156.415L30.7053 164.228C27.0046 164.971 24.4286 160.646 26.8447 157.746L41.7908 139.807C42.6891 138.728 43.1811 137.369 43.1811 135.966V25Z"
                  stroke="url(#paint1_linear_19_929)"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bd_19_929"
                  x="-5.10059"
                  y="-10"
                  width="402.101"
                  height="205.314"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_19_929"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="12" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_19_929"
                    result="effect2_dropShadow_19_929"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_19_929"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_19_929"
                  x1="-6.54181"
                  y1="-7.03053"
                  x2="71.3398"
                  y2="204.469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.4" />
                  <stop offset="1" stop-color="white" stop-opacity="0.1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_19_929"
                  x1="53.3467"
                  y1="22.8961"
                  x2="98.0701"
                  y2="195.971"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#EE2ED1" stop-opacity="0.29" />
                </linearGradient>
              </defs>
            </svg>
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
