let dollarsToCents = (dollarValue: number | string): number => {
  let dollarValueToConvert = dollarValue;
  if (typeof dollarValue === 'string') {
    dollarValueToConvert = dollarValue.replace(/,/g, '');
  }
  let numericDollarValue = Number(dollarValueToConvert);
  if (isNaN(numericDollarValue)) {
    return 0;
  }
  return Math.round(numericDollarValue * 100);
};

export {dollarsToCents};
