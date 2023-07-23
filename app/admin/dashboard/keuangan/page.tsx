import getFinance from '@/api/getFinance';
import ChartSection from '@/components/financePage/ChartSection';
import { FinanceRes } from '@/helper/interfaces';
import toIdr from '@/helper/toIdr';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default async function page() {
  const allTransc: FinanceRes = await getFinance();

  // handle error
  if (allTransc.errors) {
    throw new Error(allTransc.errors[0].message);
  } else if (allTransc.data == null) {
    throw new Error('Ups, ada kesalahan');
  }

  // manipulate data
  const { totalBalance, totalIncome, totalOutcome } = allTransc.data.finance;
  const formattedBalance = toIdr(totalBalance);
  const formattedIncome = toIdr(totalIncome);
  const formattedOutcome = toIdr(totalOutcome);

  // NoSSR
  const TableTransactions = dynamic(
    () => import('@/components/financePage/TableTransactions'),
    { ssr: false }
  );
  return (
    <>
      {/* Route Section */}
      <header className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Keuangan
            </h1>
          </li>
        </ul>
      </header>
      {/* Another Content */}
      <main
        className="w-full h-max mt-4  flex flex-col 
       gap-4"
      >
        <ChartSection isAdmin={true} />
        {/* Total Finance Section*/}
        <section
          className="w-full h-96 2xl:h-[194px] md:h-1/5 
       px-3 py-2 md:py-0 md:px-0 flex flex-wrap md:flex-nowrap md:gap-2 rounded-lg shadow-md md:shadow-none bg-d-secondary md:bg-transparent md:rounded-none"
        >
          {/* Filter Mobile (just empty div for make space for chart filter) */}
          <div className="w-1/2 md:w-4/12 h-1/2 md:h-full p-2 md:p-0 md:hidden"></div>
          {/* Balance */}
          <div className="w-1/2 md:w-4/12 h-1/2 md:h-full p-2 md:p-0">
            <div className="w-full h-full rounded-lg px-2 py-2 md:px-4 md:py-4 flex flex-col md:flex-row justify-center md:justify-start md:items-center 2xl:items-start 2xl:flex-col 2xl:justify-center md:gap-4 gap-2 md:shadow-md bg-gradient-to-t from-[#8961DE] to-[#5922CE]">
              <div className="2xl:w-20 2xl:h-20 md:w-16 md:h-16 w-10 h-10">
                <svg
                  width="100%"
                  height="100%"
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
            <div className="w-full h-full rounded-xl md:rounded-lg  px-2 py-2 md:px-4 md:py-4 flex flex-col  md:flex-row justify-center md:justify-start md:items-center 2xl:items-start 2xl:flex-col 2xl:justify-center md:gap-4 gap-2 md:shadow-md bg-[#9e9e9e34] md:bg-d-secondary">
              <div className="2xl:w-[70px] 2xl:h-[70px] md:w-16 md:h-16 w-10 h-10 rounded-full bg-dark-blue p-1">
                <svg
                  width="100%"
                  height="100%"
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
            <div className="w-full h-full rounded-xl md:rounded-lg  px-2 py-2 md:px-4 md:py-4 flex flex-col  md:flex-row justify-center md:justify-start md:items-center 2xl:items-start 2xl:flex-col 2xl:justify-center md:gap-4 gap-2 md:shadow-md bg-[#9e9e9e34] md:bg-d-secondary">
              <div className="2xl:w-[70px] 2xl:h-[70px] md:w-16 md:h-16 w-10 h-10 rounded-full bg-dark-blue p-1">
                <svg
                  width="100%"
                  height="100%"
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
        </section>
        <section className="w-full h-max px-5 py-4 rounded-lg align-middle inline-block overflow-hidden shadow-md bg-d-secondary">
          <TableTransactions />
          <Link
            className="w-full px-3 py-5 flex items-center justify-center bg-[#7421DD] text-base font-medium"
            href={'/admin/dashboard/keuangan/transaksi'}
          >
            <h1>Lihat Semua Transaksi</h1>
          </Link>
        </section>
      </main>
    </>
  );
}
