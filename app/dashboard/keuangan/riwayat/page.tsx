import getFinance from '@/api/getFinance';
import Transactions from '@/components/financePage/recapt/Transactions';
import toIdr from '@/helper/toIdr';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
export default async function page() {
  const finance = await getFinance();
  const { totalBalance } = finance.data.finance;

  return (
    <>
      {/* Route Section */}
      <header className="pl-10 md:p-0">
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
      </header>
      {/* Another Content */}
      <main
        className="w-full mt-4  flex flex-col 
    gap-4"
      >
        <div className="w-full rounded-lg bg-d-secondary relative">
          <section className="w-full h-20 md:h-40 2xl:h-48 rounded-lg px-2 py-2 md:px-6 md:py-4 2xl:p-6 flex flex-col justify-start md:gap-4 gap-1 border-b border-[#9E9E9E80] bg-gradient-to-t from-[#8961DE] to-[#5922CE]">
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
              <div className="text-white ">
                <h2 className="2xl:text-lg md:text-sm text-xs font-medium">
                  Balance
                </h2>
                <h1 className="2xl:text-xl 2xl:font-semibold md:text-lg text-sm font-semibold">
                  {toIdr(totalBalance)}
                </h1>
              </div>
            </div>
          </section>
          <Transactions />
        </div>
      </main>
    </>
  );
}
