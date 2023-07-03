'use client';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import ButtonLandingPage from '@/components/ButtonLandingPage';
import { motion as m } from 'framer-motion';
import Awan from '@/components/Awan';
import styles from '../helper/page.module.css';
import CardLanding from '@/components/CardLanding';
import VisiMisiCard from '@/components/VisiMisiCard';

export default function Home() {
  return (
    <div className="relative bg-primary overflow-x-hidden">
      <Navbar />

      {/* Greetings  */}
      <div
        className=" bg-home bg-[length:100%_100%] md:bg-[length:100%_100%] h-screen"
        id="beranda"
      >
        <div className="  h-screen text-white flex flex-col items-center justify-center">
          <div className=" flex flex-col justify-center items-center">
            <m.div className=" mt-0 md:mt-24">
              {/* UNTUK SELAIN MOBILE  */}
              <svg
                width="311"
                height="75"
                viewBox="0 0 311 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" hidden md:block"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M225.25 0.833984H240.75V74.6961H225.25V0.833984ZM39.25 0.833984C60.6917 0.833984 78 17.3791 78 37.765C78 58.151 60.6917 74.6961 39.25 74.6961C17.86 74.6961 0.5 58.151 0.5 37.765C0.5 17.3791 17.86 0.833984 39.25 0.833984ZM39.25 15.6064C52.115 15.6064 62.5 25.5532 62.5 37.765C62.5 50.0261 52.115 59.9237 39.25 59.9237C26.4367 59.9237 16 50.0261 16 37.765C16 25.5532 26.4367 15.6064 39.25 15.6064ZM85.75 0.833984H124.5C137.365 0.833984 147.75 10.7807 147.75 22.9926C147.75 32.0038 142.17 39.7347 134.058 43.1816L147.75 74.6961H131.01L118.145 45.1512H101.25V74.6961H85.75V45.1512V30.3788H101.25H124.5C128.788 30.3788 132.25 27.0796 132.25 22.9926C132.25 18.9056 128.788 15.6064 124.5 15.6064C111.583 15.6064 98.6667 15.6064 85.75 15.6064V0.833984ZM155.5 0.833984H194.25C207.115 0.833984 217.5 10.7807 217.5 22.9926C217.5 28.6554 215.278 33.875 211.61 37.765C215.278 41.7043 217.5 46.8747 217.5 52.5374C217.5 64.7985 207.115 74.6961 194.25 74.6961H171H155.5V59.9237V45.1512V30.3788H171H194.25C198.538 30.3788 202 27.0796 202 22.9926C202 18.9056 198.538 15.6064 194.25 15.6064C181.333 15.6064 168.417 15.6064 155.5 15.6064V0.833984ZM194.25 59.9237C198.538 59.9237 202 56.6245 202 52.5374C202 48.4504 198.538 45.1512 194.25 45.1512H171V59.9237H194.25ZM271.75 0.833984H287.25H295C303.577 0.833984 310.5 7.43233 310.5 15.6064H287.25V74.6961H271.75V15.6064H248.5V0.833984H271.75ZM302.75 59.9237C298.513 59.9237 295 63.2228 295 67.3099C295 71.3969 298.513 74.6961 302.75 74.6961C307.038 74.6961 310.5 71.3969 310.5 67.3099C310.5 63.2228 307.038 59.9237 302.75 59.9237Z"
                  fill="white"
                />
              </svg>
              {/* UNTUK SELAIN MOBILE END */}

              {/* UNTUK MOBILE  */}
              <svg
                width="200"
                height="75"
                viewBox="0 0 311 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" block md:hidden"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M225.25 0.833984H240.75V74.6961H225.25V0.833984ZM39.25 0.833984C60.6917 0.833984 78 17.3791 78 37.765C78 58.151 60.6917 74.6961 39.25 74.6961C17.86 74.6961 0.5 58.151 0.5 37.765C0.5 17.3791 17.86 0.833984 39.25 0.833984ZM39.25 15.6064C52.115 15.6064 62.5 25.5532 62.5 37.765C62.5 50.0261 52.115 59.9237 39.25 59.9237C26.4367 59.9237 16 50.0261 16 37.765C16 25.5532 26.4367 15.6064 39.25 15.6064ZM85.75 0.833984H124.5C137.365 0.833984 147.75 10.7807 147.75 22.9926C147.75 32.0038 142.17 39.7347 134.058 43.1816L147.75 74.6961H131.01L118.145 45.1512H101.25V74.6961H85.75V45.1512V30.3788H101.25H124.5C128.788 30.3788 132.25 27.0796 132.25 22.9926C132.25 18.9056 128.788 15.6064 124.5 15.6064C111.583 15.6064 98.6667 15.6064 85.75 15.6064V0.833984ZM155.5 0.833984H194.25C207.115 0.833984 217.5 10.7807 217.5 22.9926C217.5 28.6554 215.278 33.875 211.61 37.765C215.278 41.7043 217.5 46.8747 217.5 52.5374C217.5 64.7985 207.115 74.6961 194.25 74.6961H171H155.5V59.9237V45.1512V30.3788H171H194.25C198.538 30.3788 202 27.0796 202 22.9926C202 18.9056 198.538 15.6064 194.25 15.6064C181.333 15.6064 168.417 15.6064 155.5 15.6064V0.833984ZM194.25 59.9237C198.538 59.9237 202 56.6245 202 52.5374C202 48.4504 198.538 45.1512 194.25 45.1512H171V59.9237H194.25ZM271.75 0.833984H287.25H295C303.577 0.833984 310.5 7.43233 310.5 15.6064H287.25V74.6961H271.75V15.6064H248.5V0.833984H271.75ZM302.75 59.9237C298.513 59.9237 295 63.2228 295 67.3099C295 71.3969 298.513 74.6961 302.75 74.6961C307.038 74.6961 310.5 71.3969 310.5 67.3099C310.5 63.2228 307.038 59.9237 302.75 59.9237Z"
                  fill="white"
                />
              </svg>
              {/* UNTUK MOBILE END */}
            </m.div>
            <m.h1 className=" py-3 md:py-8 text-center px-1">
              Organization of Basic Information Technology
            </m.h1>
            <m.h1
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: -5 }}
              className=" text-xl md:text-2xl text-center pb-8"
            >
              Mari Belajar IT Bersama Kami Sekarang Juga!
            </m.h1>
            <ButtonLandingPage
              link="/login"
              title="Mulai"
              textSize="text-lg"
              animate={true}
              viewportOnce={false}
            />
          </div>
        </div>
      </div>
      {/* Greetings  END*/}

      {/* APA ITU ORBIT */}
      <div className=" bg-home2 bg-[length:100%_100%] md:bg-[length:100%_100%] h-screen relative p-5 md:p-0">
        <div className=" pt-1  md:pt-10">
          <m.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: -5 }}
            className="  w-auto md:w-[618px]"
          >
            <CardLanding
              judul="Apa itu ORBIT?"
              desc="Orbit merupakan sebuah ekstrakurikuler yang fokus bergerak di bidang
							IT. Orbit merupakan sebuah wadah yang menampung 	siswa yang ingin
							mengembangkan bakatnya, terutama dalam IT, siapapun bisa masuk orbit
							tanpa melihat jurusannya."
              classname=" mt-0 md:mt-40 ml-0 md:ml-36"
              judulClassname=" pt-2"
              descClassname=""
            />
          </m.div>
        </div>
        <m.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: -5 }}
          className=" pt-5 relative md:absolute z-10 md:right-10  w-auto md:w-[492px]"
        >
          <CardLanding
            judul="Apa saja kegiatan yang dilakukan ORBIT?"
            desc="Orbit bersifat sebagai sarana siswa untuk mengembangkan dan mengasah bakat mereka. Para siswa dapat memilih untuk bergabung beragam divisi orbit, dimana mereka akan belajar bersama mentor, mengulas materi bersama teman, dan mengerjakan latihan soal/projek yang telah diberikan."
            classname=" mt-2 md:mt-9"
            judulClassname=" text-right pt-2"
            descClassname=""
          />
        </m.div>
      </div>

      <div className=" bg-home3 bg-[length:150%_100%] md:bg-[length:100%_100%] h-screen relative">
        <m.div
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: -20 }}
          className=" absolute -bottom-[120px]"
        >
          <Awan classname=" bottom-0 " />
        </m.div>

        <m.div className=" absolute bottom-0">
          <Awan classname=" -bottom-44" />
        </m.div>
      </div>
      {/* APA ITU ORBIT  END*/}

      {/* ABOUT  */}
      <div
        className=" bg-about h-screen w-full bg-[length:150%_100%] bg-center md:bg-[length:100%_100%] relative z-10"
        id="tentang"
      ></div>
      <div className=" bg-about2 h-screen w-full bg-[length:150%_100%] bg-center md:bg-[length:100%_100%] block relative z-10">
        <div className=" block md:flex items-center justify-center gap-5 p-5 md:p-0">
          <m.div
            initial={{ opacity: 0, translateX: -80 }}
            whileInView={{ opacity: 1, translateX: 2 }}
          >
            <Image
              src={'/assets/logo/LogoPrimaryV2.png'}
              width={372}
              height={372}
              alt="ORBIT"
            />
          </m.div>
          <m.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 2 }}
            className=" mt-5 md:mt-0"
          >
            <CardLanding
              judul="Tentang Kami"
              desc="Organization of Basic Information Technology (ORBIT) merupakan ekstrakurikuler yang fokus bergerak di bidang IT. Orbit merupakan sebuah wadah untuk menampung bakat siswa terutama di bidang IT. Terdapat beberapa divisi yang ada di dalam ORBIT, seperti Web Development, Game Development, Cinematography, Graphic Desain, dan IT Support. Kelima divisi tersebut disesuaikan dengan jurusan IT yang ada di SMK Negeri 4 Bandung."
              classname=" w-auto md:w-[694px] md:h-[300px]"
              judulClassname=" pt-8 "
              descClassname=" text-sm"
            />
          </m.div>
        </div>
      </div>
      <div className=" bg-about3 h-screen w-full bg-[length:150%_100%] bg-center md:bg-[length:100%_100%] flex flex-col items-center relative">
        <div className=" block md:flex items-center justify-center p-5 md:p-0 gap-5 relative z-10 mt-0">
          <VisiMisiCard
            img="/assets/logo/roket.png"
            imgWidth={75}
            imgHeight={72}
            alt="roket"
            judul="VISI"
            desc="Mencetak anggota ORBIT sesuai degan bidangnya unggul dan meningkatkan potensi anggota ORBIT sesuai dengan bidang divisinya."
            misi={false}
          />
          <VisiMisiCard
            img="/assets/logo/misison.png"
            imgWidth={76}
            imgHeight={72}
            alt="mission"
            judul="MISI"
            desc="Meningkatkan komunikasi baik antara anggota aktif dengan alumni Menciptakan lingkungan yang nyaman, efektif, dan efisien"
            misi={true}
          />
          <VisiMisiCard
            img="/assets/logo/values.png"
            imgWidth={76}
            imgHeight={72}
            alt="value"
            judul="VALUE"
            desc="ORBIT dapat mengembangkan kemampuan siswa dalam mencapai tujuan bersama yang lebih efektif dan efisien."
            misi={false}
          />
        </div>
        <div className=" bg-struktur bg-no-repeat w-full h-full bg-[length:150%_100%] bg-center md:bg-[length:100%_100%] absolute -bottom-16">
          <m.h1
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: -5 }}
            className=" text-white font-bold text-5xl text-center mt-96"
          >
            STRUKTUR <br /> ORGANISASI
          </m.h1>
        </div>
      </div>
      {/* ABOUT END */}

      {/* STRUKTUR  */}
      <div className=" bg-struktur2 h-screen w-full bg-[length:150%_100%] bg-center md:bg-[length:100%_100%]">
        <div className={` text-white flex items-center justify-center gap-5`}>
          <div className=" relative w-[300px] h-[200px] ">
            <Image
              src={'/assets/img/anggota/hasnatHalf.png'}
              alt="Hasnat -Ketua"
              width={278}
              height={271}
              className=" absolute bottom-0 block mx-auto"
            />
            <Image
              src={'/assets/img/anggota/hasnatFull.png'}
              alt="Hasnat -Ketua"
              width={278}
              height={376}
              className=" absolute -bottom-40 hover:bottom-0 hover:scale-[.75] duration-200"
            />
          </div>
          <div className=" relative w-[300px] h-[200px]">
            <Image
              src={'/assets/img/anggota/luqmanHalf.png'}
              alt="Hasnat -Ketua"
              width={278}
              height={271}
              className=" absolute bottom-0 z-10"
            />
            <Image
              src={'/assets/img/anggota/luqmanFull.png'}
              alt="Hasnat -Ketua"
              width={267}
              height={376}
              className=" absolute -bottom-40 hover:bottom-0 hover:scale-[.75] duration-200"
            />
          </div>
        </div>
      </div>
      {/* STRUKTUR END */}

      {/* <Footer /> */}
    </div>
  );
}
