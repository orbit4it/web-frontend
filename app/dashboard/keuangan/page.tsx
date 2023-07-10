'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { FaAngleDown } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface GraphData {
  labels: Array<string>;
  datasets: Array<GraphDataSetType>;
}

interface GraphDataSetType {
  label: string;
  data: Array<number>;
  fill: boolean;
  borderColor: string;
  pointBorderColor: string;
  pointBorderWidth: number;
  tension: number;
}

interface TranscData {
  income: Array<TransactionType>;
  outcome: Array<TransactionType>;
}

interface TransactionType {
  time: string;
  count: number;
}

interface AllTransType {
  balance: number;
  income: number;
  outcome: number;
}

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export default function page() {
  // animate
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, screenY: 20 },
    show: { opacity: 1, screenY: 0 },
  };

  // state
  const [selectedView, setSelectedView] = useState<string>('All');
  const [selectedTime, setSelectedTime] = useState<string>('Minggu');
  const [selectedMonth, setSelectedMonth] = useState<string>();
  const [selectedYear, setSelectedYear] = useState<string>('2023');
  const [optionHovered, setOptionHovered] = useState<string>('null');
  const [showViewOptions, setShowViewOptions] = useState<boolean>(false);
  const [showTimeOptions, setShowTimeOptions] = useState<boolean>(false);
  const [showMonthOptions, setShowMonthOptions] = useState<boolean>(false);
  const [showYearOptions, setShowYearOptions] = useState<boolean>(false);

  const [transcData, setTranscData] = useState<TranscData>({
    income: [
      { time: 'Minggu 1', count: 100000 },
      { time: 'Minggu 2', count: 120000 },
      { time: 'Minggu 3', count: 200000 },
      { time: 'Minggu 4', count: 300000 },
    ],
    outcome: [
      { time: 'Minggu 1', count: 100000 },
      { time: 'Minggu 2', count: 200000 },
      { time: 'Minggu 3', count: 200000 },
      { time: 'Minggu 4', count: 150000 },
    ],
  });
  const [graphData, setGraphData] = useState<GraphData>({
    labels: transcData.income.map((item) => item.time),
    datasets: [
      {
        label: 'Income',
        data: transcData.income.map((item) => item.count),
        fill: false,
        borderColor: 'rgba(120, 117, 242, 1)',
        pointBorderColor: 'rgba(120, 117, 242, 1)',
        pointBorderWidth: 10,
        tension: 0.1,
      },
      {
        label: 'Outcome',
        data: transcData.outcome.map((item) => item.count),
        fill: false,
        borderColor: 'rgba(226, 144, 144, 1)',
        pointBorderColor: 'rgba(226, 144, 144, 1)',
        pointBorderWidth: 10,

        tension: 0.1,
      },
    ],
  });
  const [allTrans, setAllTrans] = useState<AllTransType>({
    balance: 1294000,
    income: 1836000,
    outcome: 540000,
  });

  // res api example
  const timeByWeeks = {
    income: [
      { time: 'Minggu 1', count: 100000 },
      { time: 'Minggu 2', count: 120000 },
      { time: 'Minggu 3', count: 200000 },
      { time: 'Minggu 4', count: 300000 },
    ],
    outcome: [
      { time: 'Minggu 1', count: 100000 },
      { time: 'Minggu 2', count: 200000 },
      { time: 'Minggu 3', count: 200000 },
      { time: 'Minggu 4', count: 150000 },
    ],
  };

  const timeByWeekUncomoleted = {
    //  untuk bulan yang blm selesai contoh hari ini bulan july tanggal 8 berarti baru 1 minggu
    income: [{ time: 'Minggu 1', count: 100000 }],
    outcome: [{ time: 'Minggu 1', count: 100000 }],
  };
  const timeByMonths = {
    income: [
      { time: 'Januari', count: 100000 },
      { time: 'Februari', count: 120000 },
      { time: 'Maret', count: 200000 },
      { time: 'April', count: 300000 },
      { time: 'Mei', count: 200000 },
      { time: 'Juni', count: 150000 },
      { time: 'Juli', count: 130000 },
      { time: 'Agustus', count: 500000 },
      { time: 'September', count: 200000 },
      { time: 'Oktober', count: 100000 },
      { time: 'November', count: 140000 },
      { time: 'Desember', count: 290000 },
    ],
    outcome: [
      { time: 'Januari', count: 100000 },
      { time: 'Februari', count: 200000 },
      { time: 'Maret', count: 200000 },
      { time: 'April', count: 150000 },
      { time: 'Mei', count: 100000 },
      { time: 'Juni', count: 70000 },
      { time: 'Juli', count: 50000 },
      { time: 'Agustus', count: 50000 },
      { time: 'September', count: 20000 },
      { time: 'Oktober', count: 10000 },
      { time: 'November', count: 14000 },
      { time: 'Desember', count: 29000 },
    ],
  };
  const timeByYear = {
    income: [
      { time: '2020', count: 1000000 },
      { time: '2021', count: 1200000 },
      { time: '2022', count: 2000000 },
      { time: '2023', count: 3000000 },
    ],
    outcome: [
      { time: '2020', count: 500000 },
      { time: '2021', count: 500000 },
      { time: '2022', count: 600000 },
      { time: '2023', count: 150000 },
    ],
  };

  // trigger
  useEffect(() => {
    switch (selectedTime) {
      case 'Minggu':
        setTranscData(timeByWeeks);
        break;
      case 'Bulan':
        setTranscData(timeByMonths);
        break;
      case 'Tahun':
        setTranscData(timeByYear);
        break;
      default:
        setTranscData(timeByWeeks);
        break;
    }
  }, [selectedTime]);

  useEffect(() => {
    switch (selectedView) {
      case 'All':
        setGraphData({
          labels: transcData.income.map((item) => item.time),
          datasets: [
            {
              label: 'Income',
              data: transcData.income.map((item) => item.count),
              fill: false,
              borderColor: 'rgba(120, 117, 242, 1)',
              pointBorderColor: 'rgba(120, 117, 242, 1)',
              pointBorderWidth: 10,
              tension: 0.1,
            },
            {
              label: 'Outcome',
              data: transcData.outcome.map((item) => item.count),
              fill: false,
              borderColor: 'rgba(226, 144, 144, 1)',
              pointBorderColor: 'rgba(226, 144, 144, 1)',
              pointBorderWidth: 10,
              tension: 0.1,
            },
          ],
        });
        break;
      case 'Income':
        setGraphData({
          labels: transcData.income.map((item) => item.time),
          datasets: [
            {
              label: 'Income',
              data: transcData.income.map((item) => item.count),
              fill: false,
              borderColor: 'rgba(120, 117, 242, 1)',
              pointBorderColor: 'rgba(120, 117, 242, 1)',
              pointBorderWidth: 10,
              tension: 0.1,
            },
          ],
        });
        break;
      case 'Outcome':
        setGraphData({
          labels: transcData.outcome.map((item) => item.time),
          datasets: [
            {
              label: 'Outcome',
              data: transcData.outcome.map((item) => item.count),
              fill: false,
              borderColor: 'rgba(226, 144, 144, 1)',
              pointBorderColor: 'rgba(226, 144, 144, 1)',
              pointBorderWidth: 10,
              tension: 0.1,
            },
          ],
        });
        break;
      default:
        setGraphData({
          labels: transcData.income.map((item) => item.time),
          datasets: [
            {
              label: 'Income',
              data: transcData.income.map((item) => item.count),
              fill: false,
              borderColor: 'rgba(120, 117, 242, 1)',
              pointBorderColor: 'rgba(120, 117, 242, 1)',
              pointBorderWidth: 10,
              tension: 0.1,
            },
            {
              label: 'Outcome',
              data: transcData.outcome.map((item) => item.count),
              fill: false,
              borderColor: 'rgba(226, 144, 144, 1)',
              pointBorderColor: 'rgba(226, 144, 144, 1)',
              pointBorderWidth: 10,
              tension: 0.1,
            },
          ],
        });
        break;
    }
  }, [selectedView, transcData]);

  const setLastMonth = () => {
    const lastMonth = new Date();
    const formatedMonth = format(lastMonth, 'MMMM', {
      locale: id,
    });
    useEffect(() => {
      setSelectedMonth(formatedMonth);
    }, []);
  };
  setLastMonth();

  // options data
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

  const monthOptions = () => {
    const currentMonth = new Date().getMonth();
    const options = Array.from(
      { length: currentMonth + 1 },
      (_, monthIndex) => {
        const date = new Date(0, monthIndex);
        return date.toLocaleString('id-ID', { month: 'long' });
      }
    );
    return options;
  };

  const yearOptions = () => {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const options = Array.from(
      { length: currentYear - startYear + 1 },
      (_, index) => startYear + index
    );
    const optionsFormatted = options.map((op) => op.toString());
    return optionsFormatted;
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
          className=" text-base text-white cursor-pointer"
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
  const mapTimeOptions = timeOptions.map((time) => (
    <>
      <motion.li
        variants={item}
        layout="position"
        onMouseEnter={() => setOptionHovered(time.label)}
        onMouseLeave={() => setOptionHovered('null')}
        onClick={() => {
          setSelectedTime(time.label);
          setShowTimeOptions(false);
        }}
        key={time.id}
      >
        <motion.p
          style={{ color: time.label == selectedTime ? '#EE2ED1' : 'white' }}
          className=" text-base text-white cursor-pointer"
        >
          {time.label}
        </motion.p>
        <motion.div
          layout="size"
          style={{ width: optionHovered == time.label ? '100%' : '0' }}
          className="h-[.5px] bg-secondary"
        />
      </motion.li>
    </>
  ));

  const mapMonthOptions = monthOptions().map((month) => (
    <>
      <motion.li
        variants={item}
        layout="position"
        onMouseEnter={() => setOptionHovered(month)}
        onMouseLeave={() => setOptionHovered('null')}
        onClick={() => {
          setSelectedMonth(month);
          setShowMonthOptions(false);
        }}
        key={month}
      >
        <motion.p
          style={{ color: month == selectedMonth ? '#EE2ED1' : 'white' }}
          className=" text-base text-white cursor-pointer"
        >
          {month}
        </motion.p>
        <motion.div
          layout="size"
          style={{ width: optionHovered == month ? '100%' : '0' }}
          className="h-[.5px] bg-secondary"
        />
      </motion.li>
    </>
  ));

  const mapYearOptions = yearOptions().map((year) => (
    <>
      <motion.li
        variants={item}
        layout="position"
        onMouseEnter={() => setOptionHovered(year)}
        onMouseLeave={() => setOptionHovered('null')}
        onClick={() => {
          setSelectedYear(year);
          setShowYearOptions(false);
        }}
        key={year}
      >
        <motion.p
          style={{ color: year == selectedYear ? '#EE2ED1' : 'white' }}
          className=" text-base text-white cursor-pointer"
        >
          {year}
        </motion.p>
        <motion.div
          layout="size"
          style={{ width: optionHovered == year ? '100%' : '0' }}
          className="h-[.5px] bg-secondary"
        />
      </motion.li>
    </>
  ));

  // graph config
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: 'rgba(223, 223, 223, 1)',
        },
        border: {
          color: 'rgba(226, 226, 226, 1)',
          dash: [10],
        },
      },
      y: {
        border: {
          color: 'rgba(226, 226, 226, 1)',
          dash: [10],
        },
        ticks: {
          color: 'rgba(223, 223, 223, 1)',
        },
      },
    },
  };

  // formatted data
  const { balance, income, outcome } = allTrans;
  const formattedBalance = balance.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });
  const formattedIncome = income.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });
  const formattedOutcome = outcome.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });
  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Keuangan
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section
        className="w-full h-[80vh] mt-4  flex flex-col 
       gap-4"
      >
        <div className="w-full 2xl:h-[600px] md:h-4/5 flex gap-2">
          {/* Chart */}
          <div className="w-full md:w-9/12 h-full rounded-lg px-4 py-4 border border-[#9E9E9E80] bg-d-secondary ">
            <div className=" relative w-full flex items-center justify-between">
              <hgroup className="w-max md:w-1/2 flex gap-2 items-center">
                <h1 className="text-sm md:text-base font-medium tracking-tight">
                  Grafik Keuangan
                </h1>
                <Link
                  href="/dashboard/keuangan/riwayat"
                  className="text-xs text-[#DFDFDF]"
                >
                  See History
                </Link>
              </hgroup>
              <div className="w-max md:w-1/2 absolute flex items-center justify-end top-0 right-0">
                {selectedTime == 'Minggu' && (
                  <motion.div
                    layout="size"
                    className={`bg-dark-blue ${
                      showMonthOptions ? 'rounded-xl' : 'rounded-full'
                    } px-4 py-1 flex flex-col items-center border border-white`}
                  >
                    <motion.div
                      layout="position"
                      className="w-full flex justify-between items-center cursor-pointer text-sm"
                    >
                      <h1>{selectedMonth}</h1>
                      <FaAngleDown
                        onClick={() => setShowMonthOptions(!showMonthOptions)}
                        color="white"
                        className="w-8 cursor-pointer"
                      />
                    </motion.div>
                    {showMonthOptions && (
                      <AnimatePresence>
                        <motion.ul
                          layout="position"
                          variants={container}
                          initial="hidden"
                          animate="show"
                          className="w-full"
                          transition={{ delay: 0.5 }}
                        >
                          {mapMonthOptions}
                        </motion.ul>
                      </AnimatePresence>
                    )}
                  </motion.div>
                )}
                {selectedTime == 'Bulan' && (
                  <motion.div
                    layout="size"
                    className={`bg-dark-blue ${
                      showMonthOptions ? 'rounded-xl' : 'rounded-full'
                    } px-4 py-1 flex flex-col items-center border border-white`}
                  >
                    <motion.div
                      layout="position"
                      className="w-full flex justify-between items-center cursor-pointer text-sm"
                    >
                      <h1>{selectedYear}</h1>
                      <FaAngleDown
                        onClick={() => setShowYearOptions(!showYearOptions)}
                        color="white"
                        className="w-8 cursor-pointer"
                      />
                    </motion.div>
                    {showYearOptions && (
                      <AnimatePresence>
                        <motion.ul
                          layout="position"
                          variants={container}
                          initial="hidden"
                          animate="show"
                          className="w-full"
                          transition={{ delay: 0.5 }}
                        >
                          {mapYearOptions}
                        </motion.ul>
                      </AnimatePresence>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
            <div className="w-full flex items-center justify-center h-[90%] mt-2">
              <Line options={options} data={graphData} />
            </div>
          </div>
          {/* Filter */}
          <div className="w-3/12 h-full rounded-lg px-4 py-4 hidden md:flex flex-col gap-4 border-b border-[#9E9E9E80] bg-d-secondary">
            <div className="text-sm text-white font-medium">
              <h1>View Graphic By:</h1>
              <motion.div
                layout="size"
                style={{
                  backgroundColor: showViewOptions
                    ? 'rgba(11, 1, 62, 0.64)'
                    : 'transparent',
                }}
                className="w-full rounded-xl mt-2 px-4 py-2 flex flex-col items-center border border-white"
              >
                <motion.div
                  layout="position"
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  <h1>{selectedView}</h1>
                  <FaAngleDown
                    onClick={() => setShowViewOptions(!showViewOptions)}
                    color="white"
                    className="w-8 cursor-pointer"
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
            <div className="text-sm text-white font-medium">
              <h1>Time:</h1>
              <motion.div
                layout="size"
                style={{
                  backgroundColor: showTimeOptions
                    ? 'rgba(11, 1, 62, 0.64)'
                    : 'transparent',
                }}
                className="w-full rounded-xl mt-2 px-4 py-2 flex flex-col items-center border border-white"
              >
                <motion.div
                  layout="position"
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  <h1>{selectedTime}</h1>
                  <FaAngleDown
                    onClick={() => setShowTimeOptions(!showTimeOptions)}
                    color="white"
                    className="w-8 cursor-pointer"
                  />
                </motion.div>
                {showTimeOptions && (
                  <AnimatePresence>
                    <motion.ul
                      layout="position"
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="w-full"
                      transition={{ delay: 0.5 }}
                    >
                      {mapTimeOptions}
                    </motion.ul>
                  </AnimatePresence>
                )}
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[90%] 2xl:h-[194px] md:h-1/5 
        px-3 py-2 md:py-0 md:px-0 flex flex-wrap md:flex-nowrap md:gap-2 rounded-lg bg-d-secondary md:bg-primary md:rounded-none"
        >
          {/* Filter Mobile */}
          <div className="w-1/2 md:w-4/12 h-1/2 md:h-full p-2 md:p-0 md:hidden">
            <div className="relative  w-full h-1/2 text-sm text-white font-medium z-20">
              <h1>View Graphic By:</h1>
              <motion.div
                layout="size"
                style={{
                  backgroundColor: showViewOptions ? '#1A1944' : 'transparent',
                }}
                className="absolute top-4 w-full rounded-xl mt-2 px-4 py-2 flex flex-col items-center border border-white"
              >
                <motion.div
                  layout="position"
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  <h1>{selectedView}</h1>
                  <FaAngleDown
                    onClick={() => setShowViewOptions(!showViewOptions)}
                    color="white"
                    className="w-8 cursor-pointer"
                  />
                </motion.div>
                {showViewOptions && (
                  <AnimatePresence>
                    <motion.ul
                      layout="position"
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="w-full "
                      transition={{ delay: 0.5 }}
                    >
                      {mapViewOptions}
                    </motion.ul>
                  </AnimatePresence>
                )}
              </motion.div>
            </div>
            <div className="relative  w-full h-1/2 pt-1 text-sm text-white font-medium z-10">
              <h1>Time:</h1>
              <motion.div
                layout="size"
                style={{
                  backgroundColor: showTimeOptions
                    ? 'rgba(11, 1, 62, 0.64)'
                    : 'transparent',
                  zIndex: showViewOptions ? '10px' : '0px',
                }}
                className="absolute top-4 w-full rounded-xl mt-2 px-4 py-2 flex flex-col items-center border border-white"
              >
                <motion.div
                  layout="position"
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  <h1>{selectedTime}</h1>
                  <FaAngleDown
                    onClick={() => setShowTimeOptions(!showTimeOptions)}
                    color="white"
                    className="w-8 cursor-pointer"
                  />
                </motion.div>
                {showTimeOptions && (
                  <AnimatePresence>
                    <motion.ul
                      layout="position"
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="w-full"
                      transition={{ delay: 0.5 }}
                    >
                      {mapTimeOptions}
                    </motion.ul>
                  </AnimatePresence>
                )}
              </motion.div>
            </div>
          </div>
          {/* Balance */}
          <div className="w-1/2 md:w-4/12 h-1/2 md:h-full p-2 md:p-0">
            <div className="w-full h-full rounded-lg px-2 py-2 md:px-4 md:py-4 flex flex-col md:flex-row justify-center md:justify-start md:items-center 2xl:items-start 2xl:flex-col 2xl:justify-center md:gap-4 gap-2 border-b border-[#9E9E9E80] bg-gradient-to-t from-[#8961DE] to-[#5922CE]">
              <div className="2xl:w-20 2xl:h-20 md:w-16 md:h-16 w-10 h-10">
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
              <div className="text-white font-medium">
                <h2 className="2xl:text-lg md:text-sm">Balance</h2>
                <h1 className="2xl:text-xl 2xl:font-semibold md:text-lg">
                  {formattedBalance}
                </h1>
              </div>
            </div>
          </div>
          {/* Income */}
          <div className="w-1/2 md:w-4/12 h-1/2 md:h-full p-2 md:p-0">
            <div className="w-full h-full rounded-xl md:rounded-lg  px-2 py-2 md:px-4 md:py-4 flex flex-col  md:flex-row justify-center md:justify-start md:items-center 2xl:items-start 2xl:flex-col 2xl:justify-center md:gap-4 gap-2 border-b border-[#9E9E9E80] bg-[#9e9e9e34] md:bg-d-secondary">
              <div className="2xl:w-[70px] 2xl:h-[70px] md:w-16 md:h-16 w-10 h-10 rounded-full bg-dark-blue p-1">
                <svg
                  width="auto"
                  height="auto"
                  viewBox="0 0 63 63"
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
              </div>
              <div className="text-white font-medium">
                <h2 className="2xl:text-lg md:text-sm">Total Income</h2>
                <h1 className="2xl:text-xl 2xl:font-semibold md:text-lg">
                  {formattedIncome}
                </h1>
              </div>
            </div>
          </div>
          {/* Outcome */}
          <div className="w-1/2 md:w-4/12 h-1/2 md:h-full p-2 md:p-0">
            <div className="w-full h-full rounded-xl md:rounded-lg  px-2 py-2 md:px-4 md:py-4 flex flex-col  md:flex-row justify-center md:justify-start md:items-center 2xl:items-start 2xl:flex-col 2xl:justify-center md:gap-4 gap-2 border-b border-[#9E9E9E80] bg-[#9e9e9e34] md:bg-d-secondary">
              <div className="2xl:w-[70px] 2xl:h-[70px] md:w-16 md:h-16 w-10 h-10 rounded-full bg-dark-blue p-1">
                <svg
                  width="auto"
                  height="auto"
                  viewBox="0 0 82 82"
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
              </div>
              <div className="text-white font-medium">
                <h2 className="2xl:text-lg md:text-sm">Total Outcome</h2>
                <h1 className="2xl:text-xl 2xl:font-semibold md:text-lg">
                  {formattedOutcome}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
