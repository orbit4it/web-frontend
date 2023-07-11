'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Link } from 'react-scroll';
import ButtonLandingPage from './ButtonLandingPage';

export default function Navbar({ active }: { active: string }) {
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
    <div className="w-screen max-w-[1440px] hidden md:flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-50  px-5 py-2 md:px-36 bg-transparent scroll-smooth select-none">
      <Image
        src="/assets/logo/LogoPrimary.png"
        width={100}
        height={100}
        alt="ORBIT"
        className="w-12 md:w-16"
      />
      <ul className="w-2/5 h-12 relative flex items-center text-white text-sm">
        <motion.div
          layout="position"
          style={{
            display: active == 'null' ? 'none' : 'block',
            left:
              active == 'home'
                ? '0%'
                : active == 'about'
                ? '25%'
                : active == 'divisions'
                ? '50%'
                : '0%',
          }}
          className="absolute top-0 left-0 w-1/4 h-full rounded-md bg-gradient-to-b from-transparent to-white/30 bg-opacity-30 z-0"
        />
        {navLinks.map((navLink, index) => (
          <Link
            onClick={() => router.push(`/#${navLink.link}`)}
            to={navLink.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            key={index}
            className="cursor-pointer z-10 w-1/4 flex items-center justify-center px-2"
          >
            <p className="cursor-pointer">{navLink.title}</p>
          </Link>
        ))}
        <div className="w-1/4 px-2">
          <ButtonLandingPage
            animate={false}
            viewportOnce={false}
            link="/register"
            title="Daftar"
            textSize="text-xs"
          />
        </div>
      </ul>
    </div>
  );
}
