'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiOutlineLeft } from 'react-icons/ai';
export default function UnderConstruction({}: {}) {
  const route = useRouter();
  return (
    <main className="w-full h-screen py-10 flex flex-col items-center  bg-primary  bg-blend-screen bg-cover bg-center text-white overflow-x-hidden relative">
      <motion.div
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
        className="glassmorphism before:rounded-xl rounded-xl bg-clip-padding backdrop-blur-md h-[50vh] py-10 px-20 flex flex-col items-center justify-center z-10 relative"
      >
        <h1 className="text-5xl font-semibold z-10">
          Error
          <span>🚧</span>
        </h1>
        <h2 className="text-2xl font-bold my-5 z-10">
          Maaf halaman ini masih dalam tahap pengembangan
        </h2>
        <button
          className="flex bg-secondary rounded-full text-sm  px-4 py-2 mt-3 text-white z-10 absolute bottom-5"
          onClick={() => route.push('/')}
        >
          <AiOutlineLeft size={17} className="mr-2" />
          Kembali ke Beranda
        </button>
      </motion.div>
      <Image
        src={'/assets/img/BgSword.png'}
        width={500}
        height={500}
        className="h-[70vh] w-auto 2xl:w-1/2 mx-auto absolute top-0 left-0 -rotate-45 z-0 "
        alt="ORBIT Moon Castle"
        priority
      />
      <Image
        src={'/assets/img/BgSword.png'}
        width={500}
        height={500}
        className="h-[70vh] w-auto 2xl:w-1/2 mx-auto absolute top-0 right-0 rotate-45 z-0 "
        alt="ORBIT Moon Castle"
        priority
      />
      <Image
        src={'/assets/img/BgPortal.png'}
        width={500}
        height={500}
        className="lg:h-auto w-full h-64 absolute bottom-0 z-0"
        alt="ORBIT Port"
        priority
      />
    </main>
  );
}
