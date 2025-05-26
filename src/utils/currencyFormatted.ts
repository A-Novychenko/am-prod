export const currencyFormatted = (price: number) => {
  if (isNaN(price)) {
    return price.toString();
  }

  return `${price.toLocaleString('uk-UA')} грн`;
  // return price.toLocaleString('uk-UA', {
  //   style: 'currency',
  //   currency: 'UAH',
  //   currencyDisplay: 'name',
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 0,
  // });
};
