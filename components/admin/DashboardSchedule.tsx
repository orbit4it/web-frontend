'use client';
import { Division, Schedule } from '@/helper/interfaces';
import React, { useState } from 'react';
import Calendar from './DashboardCalendar';
import { BiEdit } from 'react-icons/bi';
import Link from 'next/link';

interface ScheduleComponentProps {
  schedules: Schedule[];
  divisionOptions: Division[];
}

const Schedules: React.FC<ScheduleComponentProps> = ({
  schedules,
  // divisionOptions,
}) => {
  // const [divisions, setDivisions] = useState<Division[]>(divisionOptions);
  // const [showDivisionsOption, setShowDivisionsOption] = useState(false);
  const [selectedDivision, setSelectedDivision] =
    useState<string>('Web Development');
  // const [hoveredDivision, setHoveredDivision] = useState(null);

  return (
    <>
      <header className="relative w-full flex space-x-3 items-center">
        <h1 className="text-lg text-white font-semibold">Jadwal</h1>
        <Link legacyBehavior href="/admin/dashboard/jadwal">
          <a>
            <BiEdit size={22} />
          </a>
        </Link>
      </header>
      <Calendar schedules={schedules} filterBy={selectedDivision} />
    </>
  );
};

export default Schedules;
