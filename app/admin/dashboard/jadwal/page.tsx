'use client';
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import getSchedules from '@/api/getSchedules';
import AdminSchedule from '@/components/admin/AdminSchedules';
import Bell from '@/public/assets/icons/Bell.png';
import Image from 'next/image';
import AdminDropDown from '@/components/admin/AdminDropDown';
import Option from '@/components/Option';

import { Positions } from '@/helper/interfaces';
import ExpandDropdown from '@/components/ExpandDropdown';

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [judulPertemuan, setJudulPertemuan] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [token, setToken] = useState('');
  const [text, setText] = useState('');
  const [selectedTime, setSelectedTime] = useState<string>('Minggu');
  const [optionHovered, setOptionHovered] = useState<string>('null');
  const [showTimeOptions, setShowTimeOptions] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>('Juli 2023');
  const [showMonthOptions, setShowMonthOptions] = useState<boolean>(false);

  const maxLength = 300;

  const schedules = getSchedules();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDeskripsi(event.target.value);
    const { value } = event.target;
    if (value.length <= maxLength) {
      setText(value);
    }
  };

  const handleSubmit = () => {
    console.log(`Judul: ${judulPertemuan}`);
    console.log(`Token: ${token}`);
    console.log(`Deskripsi: ${deskripsi}`);
  };

  const timeOptions = [
    { id: 11, label: 'Minggu' },
    { id: 11, label: 'Senin' },
    { id: 11, label: 'Selasa' },
    { id: 11, label: 'Rabu' },
    { id: 11, label: 'Kamis' },
    { id: 11, label: 'Jumat' },
    { id: 11, label: 'Sabtu' },
  ];

  const monthOptions = [{ id: 14, label: 'Juli 2023' }];

  const mapMonthOptions = monthOptions.map((month) => (
    <Option
      key={month.id}
      handleHovered={setOptionHovered}
      handleSelected={setSelectedMonth}
      handleShowed={setShowMonthOptions}
      optionHovered={optionHovered}
      selectedValue={selectedMonth}
      value={month.label}
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
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li className="flex items-center space-x-3">
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Dashboard
            </h1>
            <p className="text-sm font-normal">{'>'}</p>
            <p className="text-sm font-normal"> Jadwal</p>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      {isOpen ? (
        <div className="mt-6 py-7 px-12 rounded-[30px] bg-bgJadwal bg-cover">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-bold">Tambah Jadwal</h1>
            <button onClick={closeModal}>X</button>
          </div>
          <input
            type="text"
            placeholder="Judul Pertemuan"
            className="border-[1px] rounded-[15px] p-3 w-full bg-transparent placeholder-opacity-60"
            onChange={(e) => setJudulPertemuan(e.target.value)}
          />
          <div className="flex gap-4 mt-6">
            <input
              type="text"
              placeholder="Tanggal"
              className="border-[1px] rounded-[15px] p-3 w-full bg-transparent placeholder-opacity-60"
            />
            <input
              type="text"
              placeholder="Token"
              className="border-[1px] rounded-[15px] p-3 w-full bg-transparent placeholder-opacity-60"
              onChange={(e) => setToken(e.target.value)}
            />
          </div>
          <div className="relative mt-8">
            <textarea
              className="w-full bg-transparent placeholder-opacity-60 p-3 h-40 border-[1px] rounded-[15px]"
              value={text}
              onChange={handleChange}
              placeholder="Deskripsi Pertemuan"
            ></textarea>
            <div className="absolute bottom-2 right-2 text-white opacity-60 pb-2 pr-1">
              {text.length}/{maxLength}
            </div>
          </div>
          <button
            className="mt-28 text-center mx-auto w-[180px] rounded-[15px] bg-gradient-to-b from-[#071590] to-[#4B58CF] py-2 block"
            onClick={handleSubmit}
          >
            Tambah
          </button>
        </div>
      ) : null}
      <section className="mt-4 md:flex justify-between pb-10">
        <div className="w-full mb-4 pb-10 items-center bg-[#262B49] py-3 px-10 rounded-[15px]">
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-5">
              <h1 className="py-1 px-3 bg-[#7585BF] rounded-[8px]">Today</h1>
              <div className="flex items-center">
                <button className="mr-4">
                  <AiOutlineLeft />{' '}
                </button>
                <button>
                  <AiOutlineRight />
                </button>
              </div>
              <div className="relative">
                <AdminDropDown
                  colorNotShowed="bg-transparent"
                  colorShowed="bg-d-primary"
                  mapOptions={mapMonthOptions}
                  position={Positions.topleft}
                  selectedOption={selectedMonth}
                  showOptions={showMonthOptions}
                  size="xl"
                  options={monthOptions}
                  handleShowOptions={setShowMonthOptions}
                />
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="relative">
                <ExpandDropdown
                  colorNotShowed="bg-transparent"
                  colorShowed="bg-d-primary"
                  mapOptions={mapTimeOptions}
                  position={Positions.topright}
                  selectedOption={selectedTime}
                  showOptions={showTimeOptions}
                  size="xl"
                  options={timeOptions}
                  handleShowOptions={setShowTimeOptions}
                />
              </div>
              <Link legacyBehavior href="#">
                <button
                  onClick={openModal}
                  className="p-2 rounded-[8px] bg-[#7421DD] bg-opacity-[78] text-sm"
                >
                  + Tambah Jadwal
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-10 bg-white bg-opacity-10">
            {/* Schedules */}
            <AdminSchedule schedules={[]} />
            <div className="bg-[#7421DD] py-3 px-6 border-t-[1px] border-white bg-opacity-[51] flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image src={Bell} alt="Bell Icons" />
                <div>
                  <h1 className="font-bold">Pertemuan ORBIT Rutin</h1>
                  <p className="text-sm flex items-center">
                    Kamis, 13 Juni 2023
                    <span className="w-1 h-1 bg-[#F0C93F] rounded-full mx-5"></span>
                    16.00
                  </p>
                </div>
              </div>
              <div>
                <Link legacyBehavior href="/admin/dashboard/jadwal">
                  <a className="py-1 px-3 bg-[#7585BF] rounded-[8px]">
                    Open Attendance
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
