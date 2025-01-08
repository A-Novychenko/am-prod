export const currencyFormatted = (price: number) => {
  if (isNaN(price)) {
    return price.toString();
  }

  return price.toLocaleString('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
