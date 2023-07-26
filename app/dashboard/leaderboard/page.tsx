'use client';
import Apicall from '@/helper/apicall';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function page() {
  const router = useRouter();

  const checkAuth = async () => {
    const res = await Apicall(`
   query {
         me {
    id
    name
    role
  }
          }
    `);

    if (!res) {
      router.push('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  });
  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Leaderboard
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 h-[70vh] max-h-[1800px] flex flex-col justify-center items-center">
        <div className="loading ">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </section>
    </>
  );
}
