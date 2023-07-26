'use client';
import getFinanceRecapt from '@/api/getFinanceRecapt';
import Elipisis from '@/components/Elipisis';
import ErrorText from '@/components/ErrorText';
import ExpandDropdown from '@/components/ExpandDropdown';
import Option from '@/components/Option';
import {
  Errors,
  FinanceRecapt,
  FinanceRecaptRes,
  Positions,
} from '@/helper/interfaces';
import toIdr from '@/helper/toIdr';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';

type Props = {};

const Transactions: React.FC<Props> = () => {
  // state
  const [error, setError] = useState<Errors>();
  const [transaction, setTransaction] = useState<FinanceRecapt[]>([]);
  const [filteredTransc, setFilteredTransc] = useState<FinanceRecapt[]>([]);
  const [selectedView, setSelectedView] = useState<string>('All');

  const [optionHovered, setOptionHovered] = useState<string>('null');
  const [showViewOptions, setShowViewOptions] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const res: FinanceRecaptRes = await getFinanceRecapt(); // must be changed with client side fetching if the api is ready
      console.log(res);
      if (res.errors) {
        setError(res.errors[0]);
      } else if (res.data) {
        setError(undefined);
        setTransaction(res.data.financeRecapt);
        setFilteredTransc(res.data.financeRecapt);
      } else {
        setError({ message: 'Something went wrong' });
      }
    }
    fetchData();
  }, []);

  // View By
  useEffect(() => {
    const filteredTransaction = transaction.filter((transc) => {
      if (selectedView == 'All') {
        return transc;
      }
      return transc.type === selectedView;
    });
    setFilteredTransc(filteredTransaction);
  }, [selectedView, transaction]);

  // options
  const viewOptions = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Pemasukan' },
    { id: 3, label: 'Pengeluaran' },
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

  const mapTransactions = filteredTransc.map((transc, index) => (
    <div
      className="w-full grid grid-cols-12 md:flex gap-0.5 md:gap-1 2xl:gap-3 items-center md:justify-between"
      key={index}
    >
      <div className="col-span-1  md:w-12 md:h-12 2xl:w-14 2xl:h-14 flex items-center  justify-center">
        {transc.type == 'Pemasukan' && (
          <svg
            width="100%"
            height="100%"
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
            width="100%"
            height="100%"
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
      <div className="col-span-6 md:w-4/5">
        <div className="md:flex    md:gap-2">
          <h1 className="text-xs md:text-base 2xl:text-lg font-semibold">
            {transc.title}
          </h1>
          <p className="text-base  hidden md:block">-</p>
          <h2 className="text-[.65rem] md:text-base">{transc.desc}</h2>
        </div>
        <div className="flex items-center gap-1 text-[0.5rem] md:text-xs text-[#DFDFDF]">
          <div className="md:flex md:gap-0.5">
            <p>{transc.admin}</p>
          </div>
          <div className="w-1 h-1 2xl:w-2 2xl:h-2 rounded-full bg-yellow-400" />
          <div>
            <p>{format(parseISO(transc.createdAt), 'dd MMMM yyyy')}</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 md:w-[10%] 2xl:w-[5%] ">
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
      <div className="w-1/4 col-span-3 2xl:w-[15%] px-1 ">
        <h1 className="text-xs md:text-base text-white font-bold text-end">
          {toIdr(transc.count)}
        </h1>
      </div>
    </div>
  ));
  return (
    <div className="w-full mt-2 md:mt-4 px-[6px] py-2 md:px-3 flex flex-col gap-3 transition-all duration-150">
      <ExpandDropdown
        colorNotShowed="bg-transparent"
        colorShowed="bg-d-primary"
        mapOptions={mapViewOptions}
        position={Positions.topright}
        selectedOption={selectedView}
        showOptions={showViewOptions}
        size="lg"
        className="border border-white mt-2 md:mt-4 mr-2 md:mr-6"
        options={viewOptions}
        handleShowOptions={setShowViewOptions}
      />
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
      {transaction.length == 0 && !error && (
        <div className="w-full h-40 flex items-center justify-center">
          <Elipisis />
        </div>
      )}
      {transaction.length !== 0 && !error && mapTransactions}
    </div>
  );
};

export default Transactions;
