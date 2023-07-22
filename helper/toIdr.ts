const toIdr = (currency: number) => {
  const formatted = currency.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });
  return formatted;
};

export default toIdr;
