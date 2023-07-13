'use client';
import CredentialsInput from '@/components/LoginRegister/CredentialsInput';
import Apicall from '@/helper/apicall';
import { DivisionsProps, KelasProps } from '@/helper/interfaces';
import { showToast } from '@/helper/toaster';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import styles from '../../helper/page.module.css';
import Head from '../head';

export default function page() {
  const [nama, setNama] = useState<string>('');
  const [divisi, setDivisi] = useState<number>(0);
  const [listDivisions, setListDivisions] = useState<DivisionsProps[]>([]);
  const [kelas, setKelas] = useState<number>(0);
  const [listkelas, setListKelas] = useState<KelasProps[]>([]);
  const [nis, setNis] = useState<string>('');
  const [motivasi, setMotivasi] = useState<string>('');
  const [motivasiColor, setMotivasiColor] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleNama = (e: string) => {
    setNama(e);
  };
  const handleNis = (e: string) => {
    setNis(e);
  };
  const handleEmai = (e: string) => {
    setEmail(e);
  };

  const fetching = async () => {
    const divisions = await Apicall(`
          query {
            divisions {
              id
              name
            }
          }
         `);

    if (divisions) {
      setListDivisions(divisions.data.divisions);
    }
    console.log(listDivisions);

    const kelas = await Apicall(`
          query {
            grades {
              grade
              id
              name
              vocational
            }
          }
         `);

    if (kelas) {
      setListKelas(kelas.data.grades);
    }
  };

  const postData = async () => {
    if (divisi == 0) {
      showToast('Silahkan Pilih divisi', 'warning');
      return;
    }

    if (kelas == 0) {
      showToast('Silahkan Pilih kelas', 'warning');
      return;
    }

    const post = await Apicall(`
    mutation {
      createUserPending (
        userPending:{
          name: "${nama}", 
          email: "${email}", 
          motivation: "${motivasi}", 
          nis: "${nis}", 
          divisionId: ${divisi}, 
          gradeId: ${kelas}
      }
  ) {
    ... on Success {message}
    ... on Error {error}
  }
}`);

    console.log(post);

    if (post.data) {
      if (post.data.createUserPending) {
        if (post.data.createUserPending.message) {
          showToast(post.data.createUserPending.message, 'success');
          router.push(`register/waiting?nama=${nama}`);
        } else if (post.data.createUserPending.error) {
          showToast(post.data.createUserPending.error, 'danger');
        }
      }
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  const handleMotivasiColor = () => {
    if (motivasi.length >= 50 && motivasi.length <= 80) {
      setMotivasiColor('warning');
    } else if (motivasi.length > 80) {
      setMotivasiColor('danger');
    } else {
      setMotivasiColor('white');
    }
  };

  useEffect(() => {
    handleMotivasiColor();
  }, [motivasi]);

  const halfData = [
    {
      type: 'text',
      placeholder: 'Nama',
      required: true,
      labelText: 'Nama Lengkap',
      onchange: handleNama,
      optional: false,
    },
    {
      type: 'text',
      placeholder: 'NIS',
      required: false,
      labelText: 'NIS',
      onchange: handleNis,
      optional: true,
    },
    {
      type: 'email',
      placeholder: 'Email',
      required: true,
      labelText: 'Email',
      onchange: handleEmai,
      optional: false,
    },
  ];

  return (
    <>
      <Head title="Daftar Dulu Yuk ;)" />

      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-normal md:justify-between text-white relative">
        <div className={` h-screen w-full`}>
          <div>
            <div
              className={`${styles.gradientLogin} w-full h-screen flex flex-col justify-center items-center md:relative`}
            >
              <div className="flex items-center gap-0 md:gap-5 mt-0 md:mt-0">
                <Image
                  src={'/assets/logo/LogoPrimary.png'}
                  width={80}
                  height={80}
                  alt="logo"
                  className=" absolute top-6 md:top-0 md:relative"
                />
                <h1 className=" text-2xl md:text-5xl font-bold">Daftar</h1>
              </div>
              <form
                action=""
                className=" mt-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  postData();
                }}
              >
                {halfData.map((data, key) => {
                  return (
                    <div key={key} className=" mb-5 relative">
                      <CredentialsInput
                        type={data.type}
                        placeholder={data.placeholder}
                        required={data.required}
                        labelText={data.labelText}
                        onchange={data.onchange}
                      />
                      <p
                        className={`${
                          data.optional ? ' block' : 'hidden'
                        } absolute right-3 top-5 text-xs text-[#75629A]`}
                      >
                        (opsional)
                      </p>
                    </div>
                  );
                })}

                <div className="relative">
                  <select
                    name="kelas"
                    id="kelas"
                    title="Kelas"
                    className={` ${
                      kelas != 0
                        ? ' border-white text-white'
                        : 'border-[#75629A] text-[#75629A]'
                    }
          'peer py-2 px-3  border-[1px] rounded-2xl bg-transparent outline-none w-[350px]  
        `}
                    onChange={(e) => {
                      setKelas(parseInt(e.target.value));
                    }}
                  >
                    <option value="0">
                      {listkelas.length ? 'Pilih Kelas' : 'Loading...'}
                    </option>
                    {listkelas.map((data, key) => {
                      return (
                        <option
                          value={data.id}
                          key={key}
                          className={`${
                            listkelas.length
                              ? 'bg-[#75629A] text-white'
                              : 'bg-white'
                          }`}
                        >
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <select
                    name="divisi"
                    id="divisi"
                    title="Divisi"
                    className={` $${
                      divisi != 0
                        ? ' border-white text-white'
                        : ' border-[#75629A] text-[#75629A]'
                    }
          'peer mt-4 py-2 px-3  border-[1px] rounded-2xl bg-transparent outline-none w-[350px]
        `}
                    onChange={(e) => {
                      setDivisi(parseInt(e.target.value));
                    }}
                  >
                    <option value="0">
                      {listDivisions.length ? 'Pilih Divisi' : 'Loading...'}
                    </option>

                    {listDivisions.map((data, key) => {
                      return (
                        <option
                          value={data.id}
                          key={key}
                          className={`${
                            listDivisions.length
                              ? 'bg-[#75629A] text-white'
                              : 'bg-white'
                          }`}
                        >
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className=" relative">
                  <textarea
                    title="Motivasi"
                    placeholder="Motivasi"
                    value={motivasi}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) {
                        setMotivasi(e.target.value);
                      }
                      handleMotivasiColor();
                    }}
                    className={` ${
                      'border-' + motivasiColor
                    } resize-none w-[350px] h-[80px] bg-transparent border-[1px] rounded-2xl mt-5 p-3 outline-none relative z-0 peer placeholder-shown:border-[#75629A] placeholder-transparent placeholder-shown:z-10`}
                  />
                  <label
                    className={`  ${
                      'text-' + motivasiColor
                    } absolute left-3 top-2 px-2 bg-[#221538]  peer-placeholder-shown:text-[#75629A] peer-placeholder-shown:top-8 peer-placeholder-shown:bg-transparent duration-200`}
                  >
                    Motivasi <span className=" text-purple">*</span>
                  </label>
                  <p
                    className={` ${
                      motivasiColor == 'white'
                        ? ` text-[#75629A]`
                        : `text-${motivasiColor}`
                    }  absolute  text-xs right-3 bottom-4`}
                  >
                    {motivasi.length}/100
                  </p>
                </div>
                <div className=" mt-8">
                  {/* <Link
                  href={{
                    pathname: '/register/waiting',
                    query: {
                      nama: nama,
                    },
                  }}
                > */}
                  <button
                    type="submit"
                    className=" border-2 border-secondary p-2 w-[350px] bg-transparent text-secondary font-bold text-center rounded-full hover:bg-secondary hover:text-white duration-200"
                  >
                    Daftar
                  </button>
                  {/* </Link> */}
                </div>
                <h1 className=" text-sm text-center mt-5">
                  Sudah punya akun?{' '}
                  <span className=" text-[#6587FF]">
                    <Link href={'/login'}>Masuk</Link>
                  </span>
                </h1>
              </form>
              <div
                className=" flex gap-1  items-center text-white absolute bottom-5 left-5  cursor-pointer"
                onClick={(e) => {
                  router.push('/');
                }}
              >
                <IoChevronBackOutline className="" />
                <h1 className=" text-sm">Kembali</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-screen md:w-[634px] h-[150px] md:h-screen bg-primary">
          <div className=" bg-homeMobile md:bg-home bg-[length:100%_100%] md:bg-cover bg-primary bg-blend-hard-light bg-center h-[150px] md:h-screen w-full"></div>
        </div>
      </div>
    </>
  );
}
