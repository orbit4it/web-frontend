'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import ButtonLandingPage from '@/components/ButtonLandingPage';
import { motion as m } from 'framer-motion';
import Awan from '@/components/Awan';
import '../helper/page.module.css';
import CardLanding from '@/components/CardLanding';
import VisiMisiCard from '@/components/VisiMisiCard';
import CardTestimoni from '@/components/landingPage/CardTestimoni';
import Person from '@/components/landingPage/Person';
import Galery from '@/components/landingPage/Galery';
import Division from '@/components/landingPage/Division';

const StrukturData = [
  {
    image: '/assets/img/anggota/hasnatHalf.png',
    name: 'Hasnat',
    jabatan: 'Ketua',
  },
  {
    image: '/assets/img/anggota/luqmanHalf.png',
    name: 'Luqman',
    jabatan: 'Wakil Ketua',
  },
  {
    image: '/assets/img/anggota/najwanHalf.png',
    name: 'Najwan',
    jabatan: 'Ketua Divisi Umum',
  },
  {
    image: '/assets/img/anggota/bintangHalf.png',
    name: 'Bintang',
    jabatan: 'Sekretaris',
  },
  {
    image: '/assets/img/anggota/raihanaHalf.png',
    name: 'Raihana',
    jabatan: 'Bendahara',
  },
  {
    image: '/assets/img/anggota/adeRiriHalf.png',
    name: 'Riri',
    jabatan: 'HRD',
  },
  {
    image: '/assets/img/anggota/rafliHalf.png',
    name: 'M. Rafly',
    jabatan: 'Public Relation',
  },
  {
    image: '/assets/img/anggota/fawwazHalf.png',
    name: 'Fawwaz',
    jabatan: 'Membership',
  },
  {
    image: '/assets/img/anggota/diazHalf.png',
    name: 'Diaz',
    jabatan: 'Education',
  },
  {
    image: '/assets/img/anggota/naufalHalf.png',
    name: 'Naufal',
    jabatan: 'Event Organizer',
  },
  {
    image: '/assets/img/anggota/nizarHal.png',
    name: 'Nizar',
    jabatan: 'Media Informasi',
  },
];

export default function Home() {
  const cardDeftRef = useRef(null);
  const cardActvRef = useRef(null);

  return (
    <main className="relative bg-primary overflow-x-hidden">
      {/* Home */}
      <section
        className="relative w-full md:h-[270vh] h-[200vh] bg-[url(/assets/img/bg-home.png)] bg-primary bg-center bg-blend-screen bg-opacity-70 bg-[length:200vw_200vh] md:bg-[length:110vw_270vh] flex flex-col"
        id="beranda"
      >
        {/* Greetings */}
        <div className="w-full h-screen flex flex-col items-center justify-center  z-10">
          <m.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: -5 }}
            transition={{
              duration: 1,
              ease: [0.075, 0.82, 0.165, 1],
            }}
            viewport={{ once: true }}
            className=" mt-0 md:mt-24"
          >
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
              width="125"
              height="50"
              viewBox="0 0 300 100"
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
          <m.h1
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: -5 }}
            transition={{
              duration: 1,
              ease: [0.075, 0.82, 0.165, 1],
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className=" text-xs md:text-lg text-white/70 md:mt-8 font-light tracking-wide text-center"
          >
            Organization of Basic Information Technology
          </m.h1>
          <m.h1
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: -5 }}
            transition={{
              duration: 1,
              ease: [0.075, 0.82, 0.165, 1],
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className=" text-sm font-medium md:font-normal md:text-2xl text-center text-white mb-8 md:mt-8"
          >
            Mari Belajar IT Bersama Kami Sekarang Juga!
          </m.h1>
          <ButtonLandingPage
            link="/login"
            title="Mulai"
            textSize="text-sm"
            animate={true}
            viewportOnce={true}
          />
        </div>
        {/* Orbit Explanation */}
        <div className="w-full h-screen flex flex-col items-center px-5">
          <m.div
            initial={{ opacity: 0, translateX: -100, translateY: 70 }}
            whileInView={{ opacity: 1, translateX: -5, translateY: -5 }}
            transition={{ duration: 0.5, type: 'spring' }}
            viewport={{ once: true, amount: 0.5, root: cardDeftRef }}
            className="w-4/5 md:w-[500px] mr-auto md:ml-10 
            mt-5 md:mt-10"
          >
            <CardLanding
              ref={cardDeftRef}
              judul="Apa itu ORBIT?"
              desc="Orbit merupakan sebuah ekstrakurikuler yang fokus bergerak di bidang
							IT. Orbit merupakan sebuah wadah yang menampung 	siswa yang ingin
							mengembangkan bakatnya, terutama dalam IT, siapapun bisa masuk orbit
							tanpa melihat jurusannya."
              classname=""
              judulClassname=" pt-2"
              descClassname=""
            />
          </m.div>
          <m.div
            initial={{ opacity: 0, translateX: 100, translateY: 150 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, amount: 0.5, root: cardActvRef }}
            className="w-4/5 md:w-[500px] mt-20 md:mt-20  
            ml-auto mr-1 md:mr-10"
          >
            <CardLanding
              ref={cardActvRef}
              judul="Apa saja kegiatan yang dilakukan ORBIT?"
              desc="Orbit bersifat sebagai sarana siswa untuk mengembangkan dan mengasah bakat mereka. Para siswa dapat memilih untuk bergabung beragam divisi orbit, dimana mereka akan belajar bersama mentor, mengulas materi bersama teman, dan mengerjakan latihan soal/projek yang telah diberikan."
              classname=" mt-2 md:mt-9"
              judulClassname=" text-right pt-2"
              descClassname=""
            />
          </m.div>
        </div>

        <div className="w-full h-96 absolute bottom-0">
          <m.div
            initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: -20 }}
            className="absolute -bottom-32"
          >
            <Awan classname=" bottom-0 " />
          </m.div>

          <m.div className=" absolute bottom-0">
            <Awan classname=" -bottom-44" />
          </m.div>
        </div>
      </section>

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
      <div className=" bg-about3 h-screen w-full bg-[length:150%_100%] bg-center md:bg-[length:100%_100%] flex flex-col justify-center items-center relative">
        <div className=" block md:flex items-center justify-center p-5 md:p-0 gap-5 relative z-10">
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
        <div className=" absolute bottom-0 left-0">
          <Image
            src={'/assets/img/BgStruktur-1.png'}
            width={1000}
            height={300}
            alt="img"
          />
        </div>
      </div>
      {/* ABOUT END */}

      {/* STRUKTUR  */}
      <section className="grid px-4 md:px-40 py-40 justify-items-center max-w-screen-xl mx-auto">
        <h2 className="text-center text-white font-bold text-2xl md:text-4xl">
          STRUKTUR
          <br />
          ORGANISASI
        </h2>

        <div className="grid justify-items-center gap-6 grid-cols-2 md:grid-cols-3 w-full">
          {StrukturData &&
            StrukturData.map((data, id) => {
              return (
                <Person
                  image={data.image}
                  name={data.name}
                  jabatan={data.jabatan}
                  key={id}
                />
              );
            })}
        </div>
      </section>
      {/* STRUKTUR END */}

      {/* DIVISI */}
      <section className="bg-gradient-to-b from-[#0B013E] from-60% to-[#EF2ED2]">
        <Image
          src={'/assets/img/sword.png'}
          width={500}
          height={500}
          className="h-auto w-full"
          alt="ORBIT Moon Castle"
          priority
        />

        <div className="h-fit">
          <h2 className="text-center text-white font-bold text-2xl md:text-4xl mb-24">
            DIVISI KAMI
          </h2>

          <div className="grid">
            <Division />
          </div>
        </div>

        <Image
          src={'/assets/img/portal.png'}
          width={500}
          height={500}
          className="h-auto w-full"
          alt="ORBIT Moon Castle"
          priority
        />
      </section>

      {/* GALERY */}
      <section className="bg-cave bg-center bg-cover w-full relative">
        {/* DECORATION */}
        <Image
          src={'/assets/img/cloud.svg'}
          width={500}
          height={500}
          className="w-full h-auto absolute top-0 right-0 rotate-180"
          alt="cloud"
          priority
        />
        <Image
          src={'/assets/img/cloud.svg'}
          width={500}
          height={500}
          className="w-full h-auto absolute top-0 right-0 rotate-180 -scale-x-100"
          alt="cloud"
          priority
        />

        <Image
          src={'/assets/img/cloud.svg'}
          width={500}
          height={500}
          className="w-full h-auto absolute -bottom-2.5 right-0"
          alt="cloud"
          priority
        />
        <Image
          src={'/assets/img/cloud.svg'}
          width={500}
          height={500}
          className="w-full h-auto absolute -bottom-2.5 right-0 -scale-x-100"
          alt="cloud"
          priority
        />

        <div className="grid gap-2 justify-items-center px-4 md:px-40 py-72 max-w-screen-xl mx-auto">
          <h2 className="text-center text-white font-bold text-2xl md:text-4xl z-10 mb-24">
            GALERI
          </h2>

          <Galery />
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="bg-darkPurple px-4 md:px-32 pt-48 pb-5">
        <div className="relative p-8 lg:px-24 grid gap-8 max-w-screen-xl mx-auto">
          {/* DECORATION */}
          <div
            className="absolute top-0 left-0 rounded-5xl w-full h-80 lg:h-96"
            style={{
              background:
                'linear-gradient(144deg, rgba(255, 255, 255, 55) 0%, rgba(255, 255, 255, 0.15) 100%)',
              backdropFilter: 'blur(15px)',
            }}
          ></div>
          <div className="grid gap-2 z-10">
            <h2 className="text-center text-white font-bold text-3xl md:text-5xl">
              Eksplor Dunia IT Bersama Kami!
            </h2>
            <p className="text-white/60 text-center">
              ORBIT adalah organisasi terbesar ke-dua setelah OSIS di SMK Negeri
              <br />4 Bandung
            </p>
          </div>

          <div className="grid justify-items-center z-10">
            <iframe
              className="rounded-3xl w-full h-40 md:h-96"
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/dDxe7CBgbAs"
              title="YouTube video player"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="bg-primary grid justify-center items-center mx-auto relative">
        {/* DECORATION */}
        <Image
          src={'/assets/img/cloud.svg'}
          width={500}
          height={500}
          className="w-full h-auto absolute -top-1 right-0 rotate-180"
          alt="cloud"
          priority
        />
        <Image
          src={'/assets/img/cloud.svg'}
          width={500}
          height={500}
          className="w-full h-auto absolute -top-1 right-0 rotate-180 -scale-x-100"
          alt="cloud"
          priority
        />

        <div className="max-w-screen-xl grid gap-24 pt-48 px-4 lg:px-32">
          <h2 className="text-center text-white font-bold text-2xl md:text-4xl z-10">
            FEEDBACK
          </h2>

          <CardTestimoni />
        </div>
      </section>

      {/* BULAN CASTLE */}
      <Image
        src={'/assets/img/BulanCastle.png'}
        width={500}
        height={500}
        className="h-auto w-full"
        alt="ORBIT Moon Castle"
        priority
      />
    </main>
  );
}
