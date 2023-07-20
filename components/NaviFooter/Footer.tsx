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
      link: '/divisi/Cinematography',
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
      } w-full flex flex-col gap-2 md:gap-0 md:flex-row items-center bg-purple p-10`}
    >
      <div className=" w-[90%] md:w-1/3 flex items-center justify-between md:justify-normal gap-6">
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
      <div className="w-1/2 md:w-1/3 flex flex-col mt-3 md:mt-0">
        <div className="w-full flex items-center justify-center">
          <Image
            src={'/assets/logo/LogoPrimary.png'}
            width={68}
            height={68}
            alt="ORBIT"
            className="w-12 md:w-16"
          />
          <Link href={'https://smkn4bdg.sch.id/'}>
            <Image
              src={'/assets/logo/LogoSmkn4.png'}
              width={76}
              height={78}
              className="w-12 md:w-16"
              alt="SMKN 4 Bandung"
            />
          </Link>
        </div>
        <Link
          href={'https://smkn4bdg.sch.id/'}
          className=" w-full text-xs text-center mx-auto text-medium md:font-bold text-white pt-2"
        >
          SMK Negeri 4 Bandung
        </Link>
      </div>
      {/* UNTUK DEKSTOP  */}
      <div className="w-[90%] md:w-1/3 mt-4 md:mt-0 flex flex-col md:justify-end justify-center md:items-end items-center">
        <div className="md:w-40 w-full flex md:flex-col flex-row flex-wrap justify-center items-center md:items-start">
          {divisons.map((data, key) => {
            return (
              <Link
                href={data.link}
                key={key}
                className=" w-max text-xs font-medium text-white"
              >
                {data.name},{' '}
              </Link>
            );
          })}
        </div>
        <Link href={'/credit'}>
          <h1 className="w-40 text-white text-lg font-semibold mt-2">
            Crew Developer
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
