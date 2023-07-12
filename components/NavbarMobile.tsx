import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link as ToId } from 'react-scroll';

export default function NavbarMobile({ active }: { active: string }) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navLinks = [
    {
      name: 'beranda',
      link: 'home',
      title: 'Beranda',
    },
    {
      name: 'tentang',
      link: 'about',
      title: 'Tentang',
    },
    {
      name: 'divisi',
      link: 'divisions',
      title: 'Divisi',
    },
  ];

  const router = useRouter();

  return (
    <motion.nav
      style={{ backgroundColor: showMenu ? 'rgba(0,0,0,0.5)' : 'transparent' }}
      className="flex md:hidden flex-col items-center fixed top-0 z-50 w-screen py-2  bg-transparent select-none"
    >
      <section className="w-full px-5 py-2 flex items-center justify-between">
        <Image
          src="/assets/logo/LogoPrimary.png"
          width={100}
          height={100}
          alt="ORBIT"
          className="w-12"
        />
        <div
          className={`block md:hidden text-2xl text-white ${
            showMenu ? 'hidden' : 'block'
          }`}
        >
          <RxHamburgerMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
        <div
          className={`block md:hidden text-2xl text-white ${
            showMenu ? 'block' : 'hidden'
          }`}
        >
          <IoMdClose
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
      </section>
      <AnimatePresence>
        {showMenu && (
          <motion.section
            layout="size"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '30vh' }}
            className="w-full h-[30vh] px-5"
          >
            <ul className="w-full h-full relative flex flex-col justify-between items-center text-white text-sm">
              <motion.div
                layout="position"
                style={{
                  display: active == 'null' ? 'none' : 'block',
                  top:
                    active == 'home'
                      ? '0%'
                      : active == 'about'
                      ? '25%'
                      : active == 'divisions'
                      ? '50%'
                      : '0%',
                }}
                className="absolute top-0 left-0 w-1/4 h-1/4 rounded-md bg-gradient-to-b from-transparent to-white/30 bg-opacity-30 z-0"
              />
              {navLinks.map((navLink, index) => (
                <ToId
                  to={navLink.link}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  key={index}
                  className="cursor-pointer z-10 w-full h-1/4 flex items-center justify-start px-3"
                  onClick={() => {
                    setShowMenu(false);
                    router.push(`/#${navLink.link}</ul>`);
                  }}
                >
                  <p className="cursor-pointer ">{navLink.title}</p>
                </ToId>
              ))}
              <div className="w-full h-1/4 px-3 flex justify-start items-center">
                <Link
                  href="/register"
                  className="text-sm text-start text-secondary"
                >
                  Daftar
                </Link>
              </div>
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
