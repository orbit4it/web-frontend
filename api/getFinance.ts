import { Errors, FinanceRes } from '@/helper/interfaces';

export const queryFinance = `query {
  finance {
    totalIncome
    totalOutcome
    totalBalance
  }
}`;

const getFinance = async () => {
  try {
    const res: FinanceRes = {
      data: {
        finance: {
          totalIncome: 1836000,
          totalOutcome: 540000,
          totalBalance: 1294000,
        },
      },
    };
    return res;
  } catch (error: Errors[] | Errors | any) {
    return error;
  }
};

export default getFinance;
