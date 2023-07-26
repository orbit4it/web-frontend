'use client';
import { Division, Positions, Schedule } from '@/helper/interfaces';
import React, { useState } from 'react';
import ExpandDropdown from '../ExpandDropdown';
import Option from '../Option';
import Calendar from './Calendar';

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

  const mapDivisionOptions = divisions?.map((division) => (
    <Option
      key={division.id}
      value={division.name}
      selectedValue={selectedDivision}
      handleSelected={setSelectedDivision}
      handleShowed={setShowDivisionsOption}
      handleHovered={setHoveredDivision}
      optionHovered={hoveredDivision}
      textSize="text-xs"
    />
  ));
  return (
    <>
      <header className="relative w-full flex justify-between items-center">
        <h1 className="text-lg text-white font-semibold">Jadwal</h1>
        <ExpandDropdown
          options={divisions}
          handleShowOptions={setShowDivisionsOption}
          showOptions={showDivisionsOption}
          selectedOption={selectedDivision}
          colorNotShowed="bg-transparent"
          colorShowed="bg-d-primary"
          position={Positions.topright}
          mapOptions={mapDivisionOptions}
          size="xl"
          className={`${
            selectedDivision === 'Game Development'
              ? 'border-game-dev'
              : selectedDivision == 'Web Development'
              ? 'border-web-dev'
              : selectedDivision == 'Cinematography'
              ? 'border-cinematography'
              : selectedDivision == 'Design Graphic'
              ? 'border-design-graphic'
              : selectedDivision == 'IT Support'
              ? 'border-it-support'
              : 'border-secondary'
          }`}
        />
      </header>
      <Calendar schedules={schedules} filterBy={selectedDivision} />
    </>
  );
};

export default Schedules;
