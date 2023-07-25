'use client';
import { Division, Positions, Schedule } from '@/helper/interfaces';
import React, { useState } from 'react';
import Calendar from './DashboardCalendar';

interface ScheduleComponentProps {
  schedules: Schedule[];
  divisionOptions: Division[];
}

const Schedules: React.FC<ScheduleComponentProps> = ({
  schedules,
  divisionOptions,
}) => {
  const [divisions, setDivisions] = useState<Division[]>(divisionOptions);
  const [showDivisionsOption, setShowDivisionsOption] = useState(false);
  const [selectedDivision, setSelectedDivision] =
    useState<string>('Web Development');
  const [hoveredDivision, setHoveredDivision] = useState(null);

  return (
    <>
      <header className="relative w-full flex justify-between items-center">
        <h1 className="text-lg text-white font-semibold">Jadwal</h1>
      </header>
      <Calendar schedules={schedules} filterBy={selectedDivision} />
    </>
  );
};

export default Schedules;
