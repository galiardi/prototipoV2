export const getBalance = ({
  initialCapital,
  annualContribution,
  years,
  rate,
}) => {
  if (rate === 0) return initialCapital + annualContribution * years;
  const r = rate / 100;
  const balance =
    initialCapital * Math.pow(1 + r, years) +
    (annualContribution * (Math.pow(1 + r, years) - 1)) / r;
  return balance;
};
