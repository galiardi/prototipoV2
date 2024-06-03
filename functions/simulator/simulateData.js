import { getPresentValue, getBalanceByRate } from '..';

export const simulateData = (state) => {
  const initialCapital = Number(state.initialCapital);
  const annualContribution = Number(state.annualContribution);
  const years = Number(state.years);

  const totalContribution = initialCapital + annualContribution * years;

  const totalContributionPV = getPresentValue({
    futureValue: totalContribution,
    years,
    inflation: state.inflationRate,
  });

  const firstContribution =
    annualContribution * (1 + state.inflationRate / 100);

  let adjustedContriburionsSum = 0;
  for (let k = 1; k <= years; k++) {
    adjustedContriburionsSum +=
      firstContribution * Math.pow(1 + state.inflationRate / 100, k - 1);
  }
  const totalContributionWAC = initialCapital + adjustedContriburionsSum;
  const totalContributionWACPV = getPresentValue({
    futureValue: totalContributionWAC,
    years,
    inflation: state.inflationRate,
  });

  const alternative1 = getBalanceByRate({
    ...state,
    alternativeRate: state.alternative1Rate,
  });
  const alternative2 = getBalanceByRate({
    ...state,
    alternativeRate: state.alternative2Rate,
  });

  return {
    totalContribution,
    totalContributionPV,
    alternative1,
    alternative2,
    totalContributionWAC, // with adjusted contributions
    totalContributionWACPV, // with adjusted constributions present value
  };
};
