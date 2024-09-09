export const getCurrency = (
  value: number,
  currency: string | undefined = 'GBP',
) => {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  });

  return formatter.format(value);
};
