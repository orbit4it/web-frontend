'use client';
import getFinanceRecapt from '@/api/getFinanceRecapt';
import { Errors, FinanceRecapt, FinanceRecaptRes } from '@/helper/interfaces';
import toIdr from '@/helper/toIdr';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { BsPencilSquare, BsTrash3 } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import Elipisis from '../Elipisis';
import ErrorText from '../ErrorText';
import OrderBy from '../OrderBy';

type TableTransactionsProps = {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const TableTransactions: React.FC<TableTransactionsProps> = ({
  onEdit,
  onDelete,
}) => {
  // state
  const [error, setError] = useState<Errors>();
  const [transaction, setTransaction] = useState<FinanceRecapt[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res: FinanceRecaptRes = await getFinanceRecapt(); // must be changed with client side fetching if the api is ready
      if (res.errors) {
        setError(res.errors[0]);
      } else if (res.data) {
        setError(undefined);
        setTransaction(res.data.financeRecapt);
      } else {
        setError({ message: 'Something went wrong' });
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <table className="min-w-full table-auto">
        <thead className="text-sm font-semibold text-white ">
          <tr>
            <th className="text-center px-3  pt-5 pb-5">No.Transaksi</th>
            <th className="text-start px-3  pt-5 pb-5">Nama </th>
            <th className="text-start px-3  pt-5 pb-5">Deskripsi</th>
            <th className="text-start px-3  pt-5 pb-5">
              <div className="flex items-center gap-5">
                Admin
                <OrderBy
                  handleOrderByAsc={() => {}}
                  handleOrderByDesc={() => {}}
                />
              </div>
            </th>
            <th className="text-start px-3  pt-5 pb-5">
              <div className="flex items-center gap-5">
                Tanggal
                <OrderBy
                  handleOrderByAsc={() => {}}
                  handleOrderByDesc={() => {}}
                />
              </div>
            </th>
            <th className="text-start px-3  pt-5 pb-5">Nominasi</th>
            <th className="text-start px-3  pt-5 pb-5">
              <div className="flex items-center justify-between">
                Level
                <OrderBy
                  handleOrderByAsc={() => {}}
                  handleOrderByDesc={() => {}}
                />
              </div>
            </th>
            <th className="text-center px-3  pt-5 pb-5">Aksi</th>
          </tr>
        </thead>
        {error && (
          <section className="w-full h-full flex flex-col items-center justify-center">
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
          </section>
        )}

        <tbody className="text-xs 2xl:text-sm font-medium">
          {transaction.length !== 0 &&
            !error &&
            transaction.map((transc) => (
              <tr
                key={transc.id}
                className="odd:bg-white/10 even:bg-d-secondary"
              >
                <td className=" px-3 py-5 text-center">#{transc.id}</td>
                <td className=" px-3 py-5 text-start">{transc.title}</td>
                <td className=" px-3 py-5 text-start">{transc.desc}</td>
                <td className=" px-3 py-5 text-start">{transc.admin}</td>
                <td className=" px-3 py-5 text-start">
                  {format(parseISO(transc.createdAt), 'd/M/yyyy')}
                </td>
                <td
                  className={twMerge(
                    transc.type == 'Pemasukan'
                      ? 'text-green-500'
                      : 'text-red-600',
                    'px-3 py-5 text-start whitespace-nowrap'
                  )}
                >
                  {transc.type == 'Pemasukan' ? '+' : '-'} {toIdr(transc.count)}
                </td>
                <td className=" px-3 py-5 text-center">
                  {transc.level ? (
                    <span
                      className={twMerge(
                        transc.level == 'Genting'
                          ? 'bg-red-400 text-danger '
                          : transc.level == 'Penting'
                          ? 'bg-yellow-100 text-warning'
                          : 'bg-green-300 text-green-600',
                        'w-20 h-7 rounded-full flex items-center justify-center font-bold'
                      )}
                    >
                      {transc.level}
                    </span>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="px-3  py-5 text-start">
                  <span className="flex items-center justify-center ">
                    <button
                      className="bg-transparent px-2"
                      onClick={() => onEdit(transc.id)}
                    >
                      <BsPencilSquare size={20} color="white" />
                    </button>
                    <button
                      className="bg-transparent px-2"
                      onClick={() => onDelete(transc.id)}
                    >
                      <BsTrash3 size={20} className="text-red-600" />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          {transaction.length == 0 && !error && (
            <tr>
              <td colSpan={8}>
                <div className="w-full h-40 flex items-center justify-center">
                  <Elipisis />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableTransactions;
