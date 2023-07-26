'use client';
import Apicall from '@/helper/apicall';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import getCompetitions from '@/api/getCompetitions';
import getDivisions from '@/api/getDivisions';
import getRecentSubjects from '@/api/getRecentSubjects';
import getSchedules from '@/api/getSchedules';
import getUser from '@/api/getUser';
import InformationCard from '@/components/dashboard/InformationCard';
import Schedules from '@/components/dashboard/Schedules';
import SubjectCard from '@/components/dashboard/SubjectCard';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

export default async function page() {
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

  // Get
  const divisions = await getDivisions();
  const user = await getUser();
  const schedules = await getSchedules();
  const subjects = await getRecentSubjects();
  const competitions = await getCompetitions();

  // Manipulation Data
  const divisionOptions = [
    { id: 0, name: 'All', waGroupLink: null },
    ...divisions,
  ];
  const recentSubjects = subjects.recent;
  const topSubject = subjects.top;

  return (
    <>
      {/* Route Section */}
      <header className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Dashboard
            </h1>
          </li>
        </ul>
      </header>
      {/* Main Content */}
      <main className="mt-4 md:flex justify-between gap-6 pb-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          {/* Profile Card */}
          <section className="bg-profileCard py-5 px-7 rounded-[15px] shadow-md">
            <div className="flex justify-between mb-3">
              <div className="space-y-1">
                <h1 className="font-bold">Profile</h1>
                <h1>{user.name}</h1>
                <p className="text-sm">{user.grade}</p>
              </div>
              <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            </div>
            <h1
              className={twMerge(
                user.division == 'Cinematography'
                  ? 'text-cinematography'
                  : user.division == 'Design Graphic'
                  ? 'text-design-graphic'
                  : user.division == 'IT Support'
                  ? 'text-it-support'
                  : user.division == 'Web Development'
                  ? 'text-web-dev'
                  : user.division == 'Game Development'
                  ? 'text-game-dev'
                  : 'text-primary',
                'text-sm mb-10'
              )}
            >
              {user.division}
            </h1>
            <Link legacyBehavior href="/dashboard/profile">
              <a className="opacity-60 text-sm flex items-center">
                More
                <AiOutlineRight size={14} className="ml-1" />
              </a>
            </Link>
          </section>
          {/* Subject */}
          <section className="mt-6 py-5 bg-profileCard rounded-[15px] shadow-md">
            {/* Recent Subject */}
            <h1 className="font-bold px-7">Materi Terbaru</h1>
            <div className="w-full">
              <SubjectCard recentSubjects={recentSubjects} />
            </div>

            {/* Top Subject */}
            <div className="mt-6 px-7">
              <h1 className="font-bold">Top Materi</h1>
              <div className="rounded-[11px] relative bg-gradient-to-r from-cardMateri to-[#1F7FB6] mt-4 flex items-center justify-between">
                <div>
                  <div className="flex justify-between items-center p-5">
                    <div>
                      <h1 className="font-bold">{topSubject.title}</h1>
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <p className="font-bold">{topSubject.speaker}</p>
                          <div className="w-[4px] h-[4px] bg-[#F0C93F] rounded-full"></div>
                          <p>
                            {format(parseISO(topSubject.createdAt), 'dd MMMM')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link legacyBehavior href="#">
                      <a>
                        <AiOutlineRight size={17} />
                      </a>
                    </Link>
                  </div>
                  <hr className="h-[3px] bg-gradient-to-r from-white via-[#E084CC] to-[#E133BB]" />
                  <p className="pl-5 pr-16 pt-5 pb-8 text-sm">
                    {topSubject.preView}
                  </p>
                  <p className="font-bold px-5 pb-3 flex items-center">
                    <AiFillStar size={15} className="mr-3" /> {topSubject.rate}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side */}

        <div className="w-full md:w-1/2">
          <div className="space-y-6">
            {/* Schedules */}
            <section className="relative py-5 px-7 mt-3 mb-6 md:mt-0 bg-profileCard rounded-[15px] shadow-md h-[424px]">
              <Schedules
                schedules={schedules}
                divisionOptions={divisionOptions}
              />
            </section>
            {/* Competition Info */}
            <section
              className="mt-10 rounded-2xl px-7 py-5 
            h-96 md:h-[600px] xl:h-[450px] flex flex-col gap-2  bg-d-secondary shadow-md"
            >
              <h1 className="font-bold">Info Lomba</h1>
              <InformationCard informations={competitions} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
