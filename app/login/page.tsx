'use client';
import CredentialsInput from '@/components/LogReg/CredentialsInput';
import Apicall from '@/helper/apicall';
import styles from '@/helper/page.module.css';
import { updateToast } from '@/helper/toaster';
import { store } from '@/store';
import { setAccessToken } from '@/store/authSlice';
import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
axios.defaults.withCredentials = true;

export default function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleEmail = (e: string) => {
    setEmail(e);
  };
  const handlePass = (e: string) => {
    setPassword(e);
  };

  const fetch = async () => {
    const id = toast.loading('Please wait...');
    const login = await Apicall(
      ` 
    {
        userAuth(email: "${email}",
         password: "${password}"
         ) {
        ... on Token {accessToken}
        ... on Error {error}
      }   
    }`,
      false
    );

    if (login) {
      const checkUser = (token = '') => {
        let decoded: any = jwt_decode(token);
        if (decoded.role == 'admin' || decoded.role == 'superadmin') {
          Cookies.set('user_token', token);
          router.push('/admin/dashboard');
        } else {
          router.push('/dashboard');
        }
      };

      if (login.errors) {
        updateToast(id, login.errors[0].message, 'error', false, 5000);
      } else if (login.data.userAuth.accessToken) {
        let token = login.data.userAuth.accessToken;
        store.dispatch(setAccessToken(token));
        updateToast(id, 'Login Berhasil', 'success', false, 5000);
        checkUser(token);
      } else if (login.data.userAuth.error) {
        updateToast(id, login.data.userAuth.error, 'error', false, 5000);
      } else {
        updateToast(id, login.errors[0].message, 'error', false, 5000);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-normal md:justify-between text-white relative">
        <div className={`${styles.gradientLogin} h-screen w-full`}>
          <div className="">
            <div className=" w-full h-screen flex flex-col justify-normal md:justify-center items-center">
              <div className="flex items-center gap-0 md:gap-5 mt-14 md:mt-0">
                <Image
                  src={'/assets/logo/LogoPrimary.png'}
                  width={100}
                  height={100}
                  alt="logo"
                  className=" absolute top-6 md:top-0 md:relative"
                />
                <h1 className=" text-3xl md:text-6xl font-bold">Masuk</h1>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  fetch();
                }}
                action=""
                className=" mt-10 w-full md:w-auto px-10 md:px-0"
              >
                <CredentialsInput
                  type="email"
                  placeholder="Email"
                  required={true}
                  labelText="Email"
                  onchange={handleEmail}
                />
                <CredentialsInput
                  classname="mt-6"
                  type="password"
                  placeholder="Password"
                  required={true}
                  labelText="Kata sandi"
                  onchange={handlePass}
                />
                <div className=" mt-10">
                  <button
                    type="submit"
                    className=" border-2 border-secondary p-2 w-full md:w-[350px] bg-transparent text-secondary font-bold text-center rounded-full hover:bg-secondary hover:text-white duration-200"
                  >
                    Masuk
                  </button>
                </div>
                <h1 className=" text-sm text-center mt-5">
                  Belum punya akun?{' '}
                  <span className=" text-[#6587FF]">
                    <Link href={'/register'}>Daftar</Link>
                  </span>
                </h1>
              </form>
            </div>
          </div>
        </div>
        <div className=" w-screen md:w-[634px] h-[150px] md:h-screen bg-primary">
          <div className=" bg-homeMobile md:bg-homeFull bg-[length:100%_100%] md:bg-[length:200%_100%] bg-center h-[150px] md:h-screen w-full"></div>
        </div>
        <div
          className=" flex gap-1 items-center text-white absolute bottom-5 left-5  cursor-pointer"
          onClick={(e) => {
            router.push('/');
          }}
        >
          <IoChevronBackOutline size={20} color="white" />
          <h1 className=" text-sm">Kembali</h1>
        </div>
      </div>
    </>
  );
}
