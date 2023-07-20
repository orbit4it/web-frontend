'use client';
import Apicall from '@/helper/apicall';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  BsBarChart,
  BsBook,
  BsBoxArrowInLeft,
  BsClipboardCheck,
  BsGrid,
} from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { IoMedalOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  const Logout = async () => {
    const res = await Apicall(`
    {
      userLogout {
        ... on Success {
          message
      }
         ... on Error {
          error
       }
      }
    }
    `);

    if (res) {
      router.push('/login');
    }
  };

  return (
    <>
      <motion.div
        layout="position"
        className={`w-4/5 md:w-1/5 h-screen ${
          isActive ? 'translate-x-0' : ' -translate-x-[999px]'
        } fixed top-0 left-0 md:translate-x-0 flex flex-col items-center bg-d-secondary pl-3 pr-4 z-50 transition-all duration-150`}
      >
        <div
          className={`absolute top-4 right-4 block md:hidden text-2xl text-white `}
          onClick={() => setIsActive(false)}
        >
          <IoMdClose />
        </div>
        <hgroup className="mt-9">
          <svg
            width="120"
            height="75"
            viewBox="0 0 311 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M225.25 0.833984H240.75V74.6961H225.25V0.833984ZM39.25 0.833984C60.6917 0.833984 78 17.3791 78 37.765C78 58.151 60.6917 74.6961 39.25 74.6961C17.86 74.6961 0.5 58.151 0.5 37.765C0.5 17.3791 17.86 0.833984 39.25 0.833984ZM39.25 15.6064C52.115 15.6064 62.5 25.5532 62.5 37.765C62.5 50.0261 52.115 59.9237 39.25 59.9237C26.4367 59.9237 16 50.0261 16 37.765C16 25.5532 26.4367 15.6064 39.25 15.6064ZM85.75 0.833984H124.5C137.365 0.833984 147.75 10.7807 147.75 22.9926C147.75 32.0038 142.17 39.7347 134.058 43.1816L147.75 74.6961H131.01L118.145 45.1512H101.25V74.6961H85.75V45.1512V30.3788H101.25H124.5C128.788 30.3788 132.25 27.0796 132.25 22.9926C132.25 18.9056 128.788 15.6064 124.5 15.6064C111.583 15.6064 98.6667 15.6064 85.75 15.6064V0.833984ZM155.5 0.833984H194.25C207.115 0.833984 217.5 10.7807 217.5 22.9926C217.5 28.6554 215.278 33.875 211.61 37.765C215.278 41.7043 217.5 46.8747 217.5 52.5374C217.5 64.7985 207.115 74.6961 194.25 74.6961H171H155.5V59.9237V45.1512V30.3788H171H194.25C198.538 30.3788 202 27.0796 202 22.9926C202 18.9056 198.538 15.6064 194.25 15.6064C181.333 15.6064 168.417 15.6064 155.5 15.6064V0.833984ZM194.25 59.9237C198.538 59.9237 202 56.6245 202 52.5374C202 48.4504 198.538 45.1512 194.25 45.1512H171V59.9237H194.25ZM271.75 0.833984H287.25H295C303.577 0.833984 310.5 7.43233 310.5 15.6064H287.25V74.6961H271.75V15.6064H248.5V0.833984H271.75ZM302.75 59.9237C298.513 59.9237 295 63.2228 295 67.3099C295 71.3969 298.513 74.6961 302.75 74.6961C307.038 74.6961 310.5 71.3969 310.5 67.3099C310.5 63.2228 307.038 59.9237 302.75 59.9237Z"
              fill="white"
            />
          </svg>
        </hgroup>
        <ul className="list-none max-w-xl w-full h-4/6 max-h-[500px] relative flex flex-col mt-12 ">
          <motion.div
            layout="position"
            style={{
              top:
                pathname == '/dashboard'
                  ? '0%'
                  : pathname.startsWith('/dashboard/absensi')
                  ? '16.6666%'
                  : pathname.startsWith('/dashboard/materi')
                  ? '33.332%'
                  : pathname.startsWith('/dashboard/keuangan')
                  ? '49.998%'
                  : pathname.startsWith('/dashboard/leaderboard')
                  ? '66.664%'
                  : '83.33%',
            }}
            className="w-full h-1/6 py-2 absolute top-[0%] -z-10 "
          >
            <div className="w-full h-full rounded-lg bg-secondary"></div>
          </motion.div>
          <li className="h-1/6 flex items-center  gap-5 pl-7 py-0  text-base font-semibold text-white">
            <BsGrid size={20} color="white" />
            <Link onClick={() => setIsActive(false)} href={'/dashboard'}>
              Dashboard
            </Link>
          </li>
          <li className="h-1/6 flex items-center  gap-5 pl-7 py-0  text-base font-semibold text-white">
            <BsClipboardCheck size={20} color="white" />
            <Link
              onClick={() => setIsActive(false)}
              href={'/dashboard/absensi'}
            >
              Absensi
            </Link>
          </li>
          <li className="h-1/6 flex items-center  gap-5 pl-7 py-0  text-base font-semibold text-white">
            <BsBook size={20} color="white" />
            <Link onClick={() => setIsActive(false)} href={'/dashboard/materi'}>
              Materi
            </Link>
          </li>
          <li className="h-1/6 flex items-center  gap-5 pl-7 py-0  text-base font-semibold text-white">
            <BsBarChart size={20} color="white" />
            <Link
              onClick={() => setIsActive(false)}
              href={'/dashboard/keuangan'}
            >
              Keuangan
            </Link>
          </li>
          <li className="h-1/6 flex items-center  gap-5 pl-7 py-0  text-base font-semibold text-white">
            <IoMedalOutline size={20} color="white" />
            <Link
              onClick={() => setIsActive(false)}
              href={'/dashboard/leaderboard'}
            >
              Leaderboard
            </Link>
          </li>
          <button
            className="w-full h-1/6  flex gap-5 items-center pl-7 py-0 "
            onClick={(e) => {
              Logout();
            }}
          >
            <BsBoxArrowInLeft size={20} color="white" />
            <p className="text-base font-semibold text-white">Log out</p>
          </button>
        </ul>
      </motion.div>
      <div
        className={`absolute top-[60px] left-5 block md:hidden text-2xl text-white ${'block'}`}
        onClick={() => setIsActive(true)}
      >
        <RxHamburgerMenu />
      </div>
    </>
  );
}
