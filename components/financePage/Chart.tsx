'use client';
import getFinanceGraph from '@/api/getFinanceGraph';
import Loading from '@/app/dashboard/loading';
import { today } from '@/helper/date';
import {
  Errors,
  FinanceGraph,
  FinanceGraphRes,
  Positions,
} from '@/helper/interfaces';
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { format } from 'date-fns';
import id from 'date-fns/locale/id';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import ErrorText from '../ErrorText';
import ExpandDropdown from '../ExpandDropdown';
import Option from '../Option';

interface ChartProps {
  selectedTime: string;
  selectedView: string;
}

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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const Chart: React.FC<ChartProps> = ({ selectedTime, selectedView }) => {
  const [error, setError] = useState<Errors>();

  const [selectedMonth, setSelectedMonth] = useState<string>(
    format(today, 'MMMM', { locale: id })
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    format(today, 'yyyy')
  );
  const [showMonthOptions, setShowMonthOptions] = useState<boolean>(false);
  const [showYearOptions, setShowYearOptions] = useState<boolean>(false);
  const [optionHovered, setOptionHovered] = useState<string>('null');

  const [transcData, setTranscData] = useState<FinanceGraph>();

  const [chartData, setChartData] = useState<GraphData>();

  useEffect(() => {
    async function fetchData(sortBy: string) {
      const res: FinanceGraphRes = await getFinanceGraph({ sortBy }); // must be changed with client side fetching if the api is ready
      if (res.errors) {
        setError(res.errors[0]);
      } else if (res.data) {
        setError(undefined);
        setTranscData(res.data.graph);
      } else {
        setError({ message: 'Something went wrong' });
      }
    }
    if (selectedTime == 'Minggu') {
      fetchData(selectedMonth);
    } else if (selectedTime == 'Bulan') {
      fetchData(selectedYear);
    } else {
      fetchData('Tahun');
    }
  }, [selectedMonth, selectedTime, selectedYear]);

  useEffect(() => {
    if (transcData) {
      switch (selectedView) {
        case 'All':
          setChartData({
            labels: transcData.income.map((graph) => graph.time),
            datasets: [
              {
                label: 'Income',
                data: transcData.income.map((graph) => graph.count),
                fill: false,
                borderColor: 'rgba(120, 117, 242, 1)',
                pointBorderColor: 'rgba(120, 117, 242, 1)',
                pointBorderWidth: 10,
                tension: 0.1,
              },
              {
                label: 'Outcome',
                data: transcData.outcome.map((graph) => graph.count),
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
          setChartData({
            labels: transcData.income.map((graph) => graph.time),
            datasets: [
              {
                label: 'Income',
                data: transcData.income.map((graph) => graph.count),
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
          setChartData({
            labels: transcData.outcome.map((graph) => graph.time),
            datasets: [
              {
                label: 'Outcome',
                data: transcData.outcome.map((graph) => graph.count),
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
          setChartData({
            labels: transcData.income.map((graph) => graph.time),
            datasets: [
              {
                label: 'Income',
                data: transcData.income.map((graph) => graph.count),
                fill: false,
                borderColor: 'rgba(120, 117, 242, 1)',
                pointBorderColor: 'rgba(120, 117, 242, 1)',
                pointBorderWidth: 10,
                tension: 0.1,
              },
              {
                label: 'Outcome',
                data: transcData.outcome.map((graph) => graph.count),
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
    }
  }, [selectedView, transcData]);

  // options
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
  const mapMonthOptions = monthOptions().map((month) => (
    <Option
      key={month}
      handleHovered={setOptionHovered}
      handleSelected={setSelectedMonth}
      handleShowed={setShowMonthOptions}
      optionHovered={optionHovered}
      selectedValue={selectedMonth}
      textSize="text-xs"
      value={month}
    />
  ));

  const mapYearOptions = yearOptions().map((year) => (
    <Option
      key={year}
      handleHovered={setOptionHovered}
      handleSelected={setSelectedYear}
      handleShowed={setShowYearOptions}
      optionHovered={optionHovered}
      selectedValue={selectedYear}
      textSize="text-xs"
      value={year}
    />
  ));
  return (
    <div className="w-full md:w-9/12 2xl:w-11/12 h-56 md:h-full rounded-lg px-4 py-4 bg-d-secondary shadow-md">
      <div className=" relative w-full flex items-center justify-between">
        <hgroup className="w-max md:w-1/2 md:flex md:gap-2 items-center">
          <h1 className="text-sm md:text-base font-medium tracking-tight">
            Grafik Keuangan
          </h1>
          <Link
            href="/dashboard/keuangan/riwayat"
            className="text-[0.6rem] md:text-xs text-[#DFDFDF]"
          >
            See History
          </Link>
        </hgroup>

        {selectedTime == 'Minggu' && (
          <ExpandDropdown
            mapOptions={mapMonthOptions}
            colorNotShowed="bg-transparent"
            colorShowed="bg-d-primary"
            handleShowOptions={setShowMonthOptions}
            position={Positions.topright}
            options={monthOptions()}
            selectedOption={selectedMonth}
            showOptions={showMonthOptions}
            className="border border-white"
          />
        )}
        {selectedTime == 'Bulan' && (
          <ExpandDropdown
            mapOptions={mapYearOptions}
            colorNotShowed="bg-transparent"
            colorShowed="bg-d-primary"
            handleShowOptions={setShowYearOptions}
            position={Positions.topright}
            options={yearOptions()}
            selectedOption={selectedYear}
            showOptions={showYearOptions}
            className="border border-white"
          />
        )}
      </div>
      <div className="w-full h-40 md:h-[90%] flex items-center justify-center md:mt-2">
        {error && (
          <main className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-14 h-auto font-semibold">
              <ErrorText />
            </div>
            <p className="text-2xl font-bold">{error.message}</p>
            <button
              className="bg-transparent text-white hover:bg-white hover:text-black rounded-full px-6 py-1 mt-6  transition-colors duration-300 border border-white text-sm"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>
          </main>
        )}
        {!error && chartData && (
          <Line
            options={{
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
            }}
            data={chartData}
          />
        )}
        {!chartData && <Loading />}
      </div>
    </div>
  );
};

export default Chart;
