'use client';
import { Schedule } from '@/helper/interfaces';
import React, { useState } from 'react';
// import ExpandDropdown from '../ExpandDropdown';
// import Option from '../Option';
import Calendar from './AdminCalendar';

interface ScheduleComponentProps {
  schedules: Schedule[];
  //   divisionOptions: Division[];
}

const Schedules: React.FC<ScheduleComponentProps> = ({
  schedules,
  //   divisionOptions,
}) => {
  //   const [divisions, setDivisions] = useState<Division[]>(divisionOptions);
  const [showDivisionsOption, setShowDivisionsOption] = useState(false);
  const [selectedDivision, setSelectedDivision] =
    useState<string>('Web Development');
  const [hoveredDivision, setHoveredDivision] = useState(null);

  //   const mapDivisionOptions = divisions?.map((division) => (
  //     <Option
  //       key={division.id}
  //       value={division.name}
  //       selectedValue={selectedDivision}
  //       handleSelected={setSelectedDivision}
  //       handleShowed={setShowDivisionsOption}
  //       handleHovered={setHoveredDivision}
  //       optionHovered={hoveredDivision}
  //       textSize="text-xs"
  //     />
  //   ));
  return (
    <>
      <Calendar schedules={schedules} filterBy={selectedDivision} />
    </>
  );
};

export default Schedules;
