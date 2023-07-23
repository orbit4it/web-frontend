import React from 'react';

export default function page() {
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
      <section className="mt-4 md:flex justify-between gap-6 pb-10">
        <div className="flex w-full h-[800px] mb-4 items-center space-x-6 bg-[#262B49] py-3 px-10 rounded-[15px]"></div>
      </section>
    </>
  );
}
