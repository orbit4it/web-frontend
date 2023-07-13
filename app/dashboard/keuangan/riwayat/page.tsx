'use client';
import { container, item } from '@/helper/animate';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
export default function page() {
  // state
  const [selectedView, setSelectedView] = useState<string>('All');

  const [optionHovered, setOptionHovered] = useState<string>('null');
  const [showViewOptions, setShowViewOptions] = useState<boolean>(false);

  const [transaction, setTransaction] = useState({
    balance: 1294000,
    transactions: [
      {
        type: 'Pemasukan',
        title: 'Menang Lomba',
        desc: 'Compfest UI',
        transactioner: [
          'Hasnat Ferdiananda',
          'Diaz Adriansyah',
          'Raihana Aisha Az-Zahra',
        ],
        date: '23 Juni 2023',
        count: 255000,
        level: null,
      },
      {
        type: 'Pengeluaran',
        title: 'Meeting Pertemuan Game Dev',
        desc: 'Makanan dan Equipment',
        transactioner: ['Ghazi Adila Ghifari'],
        date: '23 Juni 2023',
        count: 104000,
        level: 'Penting',
      },
      {
        type: 'Pengeluaran',
        title: 'Meeting Pertemuan Design Graphic',
        desc: 'Equipment dan Fotocopy',
        transactioner: ['Hasnat Ferdiananda'],
        date: '23 Juni 2023',
        count: 26000,
        level: 'Genting',
      },
      {
        type: 'Pemasukan',
        title: 'Kas Masuk',
        desc: null,
        transactioner: ['Raihana Aisha Az-Zahra'],
        date: '23 Juni 2023',
        count: 50000,
        level: null,
      },
      {
        type: 'Pemasukan',
        title: 'Kas Masuk',
        desc: null,
        transactioner: ['Raihana Aisha Az-Zahra'],
        date: '23 Juni 2023',
        count: 50000,
        level: null,
      },
    ],
  });
  const { balance, transactions } = transaction;

  // options
  const viewOptions = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Income' },
    { id: 3, label: 'Outcome' },
  ];

  // utils
  const currFormatter = (money: number) => {
    const formattedMoney = money.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    });
    return formattedMoney;
  };

  // map
  const mapViewOptions = viewOptions.map((view) => (
    <>
      <motion.li
        variants={item}
        layout="position"
        onMouseEnter={() => setOptionHovered(view.label)}
        onMouseLeave={() => setOptionHovered('null')}
        onClick={() => {
          setSelectedView(view.label);
          setShowViewOptions(false);
        }}
        key={view.id}
      >
        <motion.p
          style={{ color: view.label == selectedView ? '#EE2ED1' : 'white' }}
          className=" text-xs text-white cursor-pointer"
        >
          {view.label}
        </motion.p>
        <motion.div
          layout="size"
          style={{ width: optionHovered == view.label ? '100%' : '0' }}
          className="h-[.5px] bg-secondary"
        />
      </motion.li>
    </>
  ));
  const mapTransc = transactions.map((transc, index) => (
    <div
      className="w-full flex gap-0.5 md:gap-1 2xl:gap-3 items-center justify-between"
      key={index}
    >
      <div className="w-[10%] md:w-12 md:h-12 2xl:w-14 2xl:h-14 flex items-center  justify-center">
        {transc.type == 'Pemasukan' && (
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Trending_Up">
              <path
                id="Vector"
                d="M10.4988 44.625L25.845 29.0391C26.1207 28.759 26.2599 28.6189 26.3833 28.5085C28.3766 26.7243 31.3921 26.7243 33.3854 28.5085C33.5088 28.6189 33.648 28.759 33.9237 29.0391C34.1995 29.3192 34.3374 29.4592 34.4608 29.5697C36.4541 31.3538 39.4696 31.3538 41.4629 29.5697C41.5863 29.4592 41.7242 29.3191 42 29.0391L52.5 18.375M10.4988 44.625L10.5 28.875M10.4988 44.625L26.25 44.625"
                stroke="#54FFC1"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        )}

        {transc.type == 'Pengeluaran' && (
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Trending_Down">
              <path
                id="Vector"
                d="M60.6453 25.964L40.595 34.7054C40.2347 34.8624 40.054 34.9421 39.9067 35.0178C37.5267 36.2393 36.446 39.0545 37.3973 41.5548C37.4562 41.7096 37.5372 41.8897 37.6998 42.2475C37.8625 42.6054 37.9438 42.7843 38.0027 42.9391C38.954 45.4394 37.8734 48.2546 35.4934 49.4761C35.346 49.5517 35.1659 49.6303 34.8055 49.7874L21.0869 55.7683M60.6453 25.964L45.941 20.3208M60.6453 25.964L55.0006 40.669"
                stroke="#F8090F"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        )}
      </div>
      <div className="w-4/5  ">
        <div className="md:flex md:gap-2">
          <h1 className="text-xs md:text-base 2xl:text-lg font-semibold">
            {transc.title}
          </h1>
          <p className="text-base  hidden md:block">-</p>
          <h2 className="text-[.65rem] md:text-base">{transc.desc}</h2>
        </div>
        <div className="flex items-center gap-1 text-[0.5rem] md:text-xs text-[#DFDFDF]">
          <div className="md:flex md:gap-0.5">
            {transc.transactioner.map((person, key) => (
              <p key={key}>{person},</p>
            ))}
          </div>
          <div className="w-1 h-1 2xl:w-2 2xl:h-2 rounded-full bg-yellow-400" />
          <div>
            <p>{transc.date}</p>
          </div>
        </div>
      </div>
      <div className="w-[15%] md:w-[10%] 2xl:w-[5%] ">
        {transc.level != null && (
          <div
            className={`w-full md:w-max rounded-md py-1 md:px-2 md:py-1 text-[0.5rem] md:text-xs ${
              transc.level == 'Genting'
                ? 'bg-red-600'
                : transc.level == 'Penting'
                ? 'bg-orange-600'
                : 'bg-green-400'
            }`}
          >
            <p className="w-full text-center">{transc.level}</p>
          </div>
        )}
      </div>
      <div className="w-1/4 2xl:w-[15%] px-1 ">
        <h1 className="text-xs md:text-base text-white font-bold text-end">
          {currFormatter(transc.count)}
        </h1>
      </div>
    </div>
  ));

  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-2 items-center">
          <Link
            href={'/dashboard/keuangan'}
            className="text-xs md:text-lg font-semibold md:font-bold"
          >
            Keuangan
          </Link>
          <FaAngleRight
            size={10}
            className="w-3 h-3 md:w-4 md:h-4"
            color="#DFDFDF"
          />
          <h2 className="text-[0.6rem] md:text-base font-semibold md:font-semibold text-[#DFDFDF]">
            Riwayat
          </h2>
        </ul>
      </section>
      {/* Another Content */}
      <section
        className="w-full mt-4  flex flex-col 
    gap-4"
      >
        <div className="w-full rounded-lg bg-d-secondary">
          <div className="w-full h-20 md:h-40 2xl:h-48">
            <div className="w-full h-full rounded-lg px-2 py-2 md:px-4 md:py-4 2xl:p-6 flex justify-center md:items-center md:gap-4 gap-1 border-b border-[#9E9E9E80] bg-gradient-to-t from-[#8961DE] to-[#5922CE]">
              <div className="w-1/2 h-full">
                <div className="2xl:w-20 2xl:h-20 md:w-16 md:h-16 w-8 h-8 md:-ml-2">
                  <svg
                    width="auto"
                    height="auto"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="wallet">
                      <path
                        id="Icon"
                        d="M64.5 28.6666V25.7999C64.5 21.7862 64.5 19.7794 63.7189 18.2463C63.0318 16.8978 61.9354 15.8015 60.5869 15.1144C59.0539 14.3333 57.047 14.3333 53.0333 14.3333H22.2167C18.203 14.3333 16.1961 14.3333 14.6631 15.1144C13.3146 15.8015 12.2182 16.8978 11.5311 18.2463C10.75 19.7794 10.75 21.7862 10.75 25.7999V28.6666M75.25 42.9999H68.0833C64.1253 42.9999 60.9167 46.2085 60.9167 50.1666C60.9167 54.1246 64.1253 57.3333 68.0833 57.3333H75.25M10.75 28.6666V60.1999C10.75 64.2136 10.75 66.2205 11.5311 67.7535C12.2182 69.102 13.3146 70.1984 14.6631 70.8855C16.1961 71.6666 18.203 71.6666 22.2167 71.6666H63.7833C67.797 71.6666 69.8039 71.6666 71.3369 70.8855C72.6854 70.1984 73.7818 69.102 74.4689 67.7535C75.25 66.2205 75.25 64.2136 75.25 60.1999V40.1333C75.25 36.1195 75.25 34.1127 74.4689 32.5797C73.7818 31.2312 72.6854 30.1348 71.3369 29.4477C69.8039 28.6666 67.797 28.6666 63.7833 28.6666H10.75Z"
                        stroke="white"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-white ">
                  <h2 className="2xl:text-lg md:text-sm text-xs font-medium">
                    Balance
                  </h2>
                  <h1 className="2xl:text-xl 2xl:font-semibold md:text-lg text-sm font-semibold">
                    {currFormatter(balance)}
                  </h1>
                </div>
              </div>
              <div className="w-1/2 h-full">
                <motion.div
                  layout="size"
                  className="w-1/2 md:w-1/4 2xl:w-1/6  ml-auto rounded-xl mt-2 px-2 py-1 flex flex-col items-center justify-between bg-dark-blue/70 border border-white"
                >
                  <motion.div
                    layout="position"
                    className="w-full flex justify-between items-center cursor-pointer"
                  >
                    <h1 className="text-xs">{selectedView}</h1>
                    <FaAngleDown
                      onClick={() => setShowViewOptions(!showViewOptions)}
                      color="white"
                      className="w-5 cursor-pointer"
                    />
                  </motion.div>
                  {showViewOptions && (
                    <AnimatePresence>
                      <motion.ul
                        layout="position"
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="w-full"
                        transition={{ delay: 0.5 }}
                      >
                        {mapViewOptions}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-full mt-2 md:mt-4 px-[6px] py-2 md:px-3 flex flex-col gap-3 ">
            {mapTransc}
          </div>
        </div>
      </section>
    </>
  );
}
