export const getBalanceWithAdjustedContributions = ({
  initialCapital,
  annualContribution,
  years,
  rate,
  inflation,
}) => {
  const r = rate / 100;
  const i = inflation / 100;

  let x = 0;
  for (let k = 1; k <= years; k++) {
    x += annualContribution * Math.pow(1 + i, k) * Math.pow(1 + r, years - k);
  }
  const balance = initialCapital * Math.pow(1 + r, years) + x;
  return balance;
};
