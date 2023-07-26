import { Errors, FinanceRecaptRes } from '@/helper/interfaces';

export const queryFinanceRecapt = `query {
  financeRecapt {
      type
      title
      desc
      admin
      createdAt
      count
      level
  }
}`;

const getFinanceRecapt = async () => {
  try {
    const res: FinanceRecaptRes = {
      data: {
        financeRecapt: [
          {
            id: 1,
            type: 'Pemasukan',
            title: 'Menang Lomba',
            desc: 'Compfest UI',
            admin: 'Hasnat Ferdiananda',
            createdAt: '2023-07-27T15:30',
            count: 255000,
            level: null,
          },
          {
            id: 2,
            type: 'Pengeluaran',
            title: 'Meeting Pertemuan Game Dev',
            desc: 'Makanan dan Equipment',
            admin: 'Ghazi Adila Ghifari',
            createdAt: '2023-07-27T15:30',
            count: 104000,
            level: 'Penting',
          },
          {
            id: 3,
            type: 'Pengeluaran',
            title: 'Meeting Pertemuan Design Graphic',
            desc: 'Equipment dan Fotocopy',
            admin: 'Hasnat Ferdiananda',
            createdAt: '2023-07-27T15:30',
            count: 26000,
            level: 'Genting',
          },
          {
            id: 4,
            type: 'Pemasukan',
            title: 'Kas Masuk',
            desc: null,
            admin: 'Raihana Aisha Az-Zahra',
            createdAt: '2023-07-27T15:30',
            count: 50000,
            level: null,
          },
          {
            id: 5,
            type: 'Pemasukan',
            title: 'Kas Masuk',
            desc: null,
            admin: 'Raihana Aisha Az-Zahra',
            createdAt: '2023-07-27T15:30',
            count: 50000,
            level: null,
          },
        ],
      },
    };
    return res;
  } catch (error: Errors[] | Errors | any) {
    return error;
  }
};

export default getFinanceRecapt;
