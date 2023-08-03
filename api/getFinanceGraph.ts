import { today } from '@/helper/date';
import { Errors, FinanceGraph, FinanceGraphRes } from '@/helper/interfaces';
import { format } from 'date-fns';
import id from 'date-fns/locale/id';

export const queryFinanceGraph = `query { 
  graph($sortBy: String, $sortOrder: String, $page: number) {
    income {
      time,
      count
    },
    outcome {
      time,
      count
    }
  }
}`;

const getFinanceGraph = async ({
  sortBy = format(today, 'MMMM', { locale: id }),
  sortOrder = 'DESC',
  page = 1,
}: {
  sortBy?: String;
  sortOrder?: String;
  page?: number;
}) => {
  const graphWeeksEx: FinanceGraph = {
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
  const graphMonthsEx: FinanceGraph = {
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
  const graphYearsEx: FinanceGraph = {
    income: [{ time: '2023', count: 1000000 }],
    outcome: [{ time: '2023', count: 230000 }],
  };
  try {
    let res: FinanceGraphRes = {
      data: {
        graph: graphWeeksEx,
      },
    };
    switch (sortBy) {
      case 'Juli':
        res = {
          data: {
            graph: graphWeeksEx,
          },
        };
        break;

      case '2023':
        res = {
          data: {
            graph: graphMonthsEx,
          },
        };
        break;

      case 'Tahun':
        res = {
          data: {
            graph: graphYearsEx,
          },
        };
        break;

      default:
        res = {
          data: null,
          errors: [
            {
              message: 'Data tidak tersedia',
              locations: [
                {
                  line: 2,
                  column: 3,
                },
              ],
              path: ['sortBy'],
            },
          ],
        };
        break;
    }

    return res;
  } catch (err: Errors[] | Errors | any) {
    return err;
  }
};

export default getFinanceGraph;
