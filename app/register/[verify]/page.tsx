'use client';
import { useEffect, useState } from 'react';
import styles from '../../../helper/page.module.css';
import Apicall from '@/helper/apicall';
import { showToast, updateToast } from '@/helper/toaster';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function page({ params }: { params: { verify: string } }) {
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [handlePass, setHandlePass] = useState<boolean>(true);
  const router = useRouter();

  const passHandle = () => {
    if (password == confirmPass) {
      setHandlePass(false);
    } else {
      setHandlePass(true);
    }

    // console.log(handlePass);
  };

  useEffect(() => {
    passHandle();
  });

  const createUser = async () => {
    const id = toast.loading('Please Wait...');
    const res = await Apicall(
      `
    mutation {
     createUser(password: "${password}", 
     registrationToken: "${params.verify}"
     ) {
        ... on Success {
        message
      }
        ... on Error {
        error
      }
    }
  }`,
      false
    );

    if (res) {
      if (res.data.createUser.error) {
        updateToast(id, res.data.createUser.error, 'error', false, 5000);
      } else if (res.data.createUser.message) {
        updateToast(id, res.data.createUser.message, 'success', false, 5000);
        router.push('/login');
      } else {
        updateToast(id, 'Berhasil Membuat User', 'success', false, 5000);
        router.push('/login');
      }
    }
  };

  return (
    <>
      <div
        className={`${styles.gradientVerifyCard} h-screen w-screen flex justify-center items-center relative p-5 md:p-0`}
      >
        <div
          className={` relative bg-white/20 backdrop-filter backdrop-blur-lg shadow-lg w-auto md:w-[1000px] h-auto border-[1px] border-white rounded-3xl`}
        >
          <div className=" mt-16">
            <h1 className=" text-lg md:text-4xl text-white font-bold text-center mx-16">
              Congratulations! You are part of Orbit now
            </h1>
          </div>
          <p className=" text-[#C8C8C8] text-center text-sm md:text-lg pt-5">
            Please create your password to join our web community
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createUser();
            }}
            action=""
            className=" flex flex-col items-center justify-center gap-5 mt-10 "
          >
            <div className=" w-full md:w-auto px-5">
              <input
                type="password"
                title="password"
                placeholder="Account Password"
                className=" outline-none w-full md:w-[400px] bg-[#FDFDFD] bg-opacity-[0.35] rounded-3xl p-3 text-[#D7D7D7] text-sm md:text-lg"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className=" w-full md:w-auto px-5">
              <input
                type="password"
                title="password"
                placeholder="Re-Type Password"
                className=" outline-none w-full md:w-[400px] bg-[#FDFDFD] bg-opacity-[0.35] rounded-3xl p-3 text-[#D7D7D7] text-sm md:text-lg"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <div className=" mt-8 md:mt-14 w-full px-5">
              <button
                type="submit"
                title="button"
                className={` ${
                  password == confirmPass
                    ? 'border-white text-white'
                    : 'text-white/70 border-white/70'
                } block mx-auto border-[1px]  rounded-3xl w-full md:w-[300px] p-2 text-center  text-sm md:text-lg font-bold mb-16`}
                disabled={handlePass}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
