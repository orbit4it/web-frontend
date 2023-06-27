import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" bg-primary bg-opacity-70">
      <div className=" bg-home  h-screen" id="beranda">
        {/* <Image
					src={'/assets/img/BgHome.png'}
					width={1000}
					height={1000}
					alt="ORBIT"
				/> */}
      </div>
    </div>
  );
}
