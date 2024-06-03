export const getPresentValue = ({ futureValue, years, inflation }) => {
  const i = inflation / 100;
  const presentValue = futureValue / Math.pow(1 + i, years);
  return presentValue;
};
