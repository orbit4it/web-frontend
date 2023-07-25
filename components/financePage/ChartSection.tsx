'use client';
import { Positions } from '@/helper/interfaces';
import React, { useState } from 'react';
import ExpandDropdown from '../ExpandDropdown';
import Option from '../Option';
import Chart from './Chart';

type ChartSectionProps = {};

const ChartSection: React.FC<ChartSectionProps> = () => {
  const [selectedView, setSelectedView] = useState<string>('All');
  const [selectedTime, setSelectedTime] = useState<string>('Minggu');
  const [optionHovered, setOptionHovered] = useState<string>('null');
  const [showViewOptions, setShowViewOptions] = useState<boolean>(false);
  const [showTimeOptions, setShowTimeOptions] = useState<boolean>(false);
  const viewOptions = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Income' },
    { id: 3, label: 'Outcome' },
  ];

  const timeOptions = [
    { id: 11, label: 'Minggu' },
    { id: 12, label: 'Bulan' },
    { id: 13, label: 'Tahun' },
  ];
  // map
  const mapViewOptions = viewOptions.map((view) => (
    <Option
      key={view.id}
      handleHovered={setOptionHovered}
      handleSelected={setSelectedView}
      handleShowed={setShowViewOptions}
      optionHovered={optionHovered}
      selectedValue={selectedView}
      value={view.label}
      textSize="text-xs"
    />
  ));
  const mapTimeOptions = timeOptions.map((time) => (
    <Option
      key={time.id}
      handleHovered={setOptionHovered}
      handleSelected={setSelectedTime}
      handleShowed={setShowTimeOptions}
      optionHovered={optionHovered}
      selectedValue={selectedTime}
      value={time.label}
      textSize="text-xs"
    />
  ));
  return (
    <section className="w-full 2xl:h-[600px] md:h-4/5 flex justify-between gap-2 relative">
      {/* Chart */}
      <Chart selectedView={selectedView} selectedTime={selectedTime} />
      {/* Filter */}
      <div className="max-w-[14rem] w-1/2 h-max md:w-3/12 md:h-full rounded-lg pl-4 pr-2 md:px-4 py-4 absolute bottom-[-138px] left-0 md:static md:flex flex-col gap-4 md:shadow-md md:bg-d-secondary">
        <div className="text-sm text-white font-medium relative z-20">
          <h1>View Graphic By:</h1>
          <ExpandDropdown
            colorNotShowed="bg-transparent"
            colorShowed="bg-d-primary"
            mapOptions={mapViewOptions}
            position={Positions.topleft}
            selectedOption={selectedView}
            showOptions={showViewOptions}
            size="xl"
            className="border border-secondary mt-6 "
            options={viewOptions}
            handleShowOptions={setShowViewOptions}
          />
        </div>
        <div className="text-sm text-white font-medium relative mt-10 z-10">
          <h1>Time:</h1>
          <ExpandDropdown
            colorNotShowed="bg-transparent"
            colorShowed="bg-d-primary"
            mapOptions={mapTimeOptions}
            position={Positions.topleft}
            selectedOption={selectedTime}
            showOptions={showTimeOptions}
            size="xl"
            className="border border-secondary mt-6"
            options={timeOptions}
            handleShowOptions={setShowTimeOptions}
          />
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
