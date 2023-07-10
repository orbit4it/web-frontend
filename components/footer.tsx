import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TfiEmail } from 'react-icons/tfi';

// interface footerProps {
//   Router: string;
// }

const Footer = () => {
  const divisons = [
    {
      name: 'Web Development',
      link: '/divisi/web-development',
    },
    {
      name: 'Game Development',
      link: '/divisi/game-development',
    },
    {
      name: 'Cinematography',
      link: '/divisi/cinematography',
    },
    {
      name: 'Graphic Design',
      link: '/divisi/design-graphic',
    },
    {
      name: 'IT Support',
      link: '/divisi/it-support',
    },
  ];

  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname == '/login' ? 'hidden' : ''
      } w-full block md:flex items-center bg-purple p-10`}
    >
      <div className=" w-1/3 flex items-center justify-center md:justify-normal gap-6">
        <div className=" flex items-center text-white gap-2">
          <div className=" bg-secondary  rounded-full p-1">
            <AiOutlineInstagram className=" text-lg" />
          </div>
          <Link href={'https://www.instagram.com/orbit4it/'} target="blank">
            <p className=" text-xs font-light">@orbit4it</p>
          </Link>
        </div>
        <div className=" flex items-center text-white gap-2">
          <div className=" bg-secondary  rounded-full p-1">
            <TfiEmail className=" text-lg" />
          </div>
          <Link
            href={'mailto:orbit4it@gmail.com?subject=Tanya-tanya'}
            target="blank"
          >
            <p className=" text-xs font-light">orbit4it@gmail.com</p>
          </Link>
        </div>
      </div>
      <div className="w-1/3 flex md:block flex-col  mt-3 md:mt-0">
        <div className="w-full flex items-center justify-center">
          <Image
            src={'/assets/logo/LogoPrimary.png'}
            width={68}
            height={68}
            alt="ORBIT"
          />
          <Image
            src={'/assets/img/smkn4.png'}
            width={76}
            height={78}
            alt="SMKN 4 Bandung"
          />
        </div>
        <p className=" w-full text-xs text-center font-bold text-white pt-2">
          SMK Negeri 4 Bandung
        </p>
      </div>
      {/* UNTUK DEKSTOP  */}
      <div className="w-1/3 mt-4 md:mt-0 hidden md:flex flex-col justify-end items-end">
        {divisons.map((data, key) => {
          return (
            <Link
              href={data.link}
              key={key}
              className=" w-max text-xs font-medium text-white"
            >
              {data.name}
            </Link>
          );
        })}
        <Link href={'/credit'}>
          <h1 className=" text-white text-lg font-semibold mt-2">
            Crew Developer
          </h1>
        </Link>
      </div>
      {/* UNTUK DEKSTOP END */}

      {/* UNTUK MOBILE */}
      {/* <div className=" text-white mt-3 block md:hidden">
        <p className=" text-xs font-bold text-center">
          Web Development Game Development Cinematography Graphic Design IT
          Support
        </p>
        <Link href={'/credit'}>
          <h1 className=" text-white text-xl font-bold mt-2 text-center pt-2">
            Crew Developer
          </h1>
        </Link>
      </div> */}
      {/* UNTUK MOBILE END */}
    </div>
  );
};

export default Footer;
