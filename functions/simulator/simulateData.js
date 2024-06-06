import { getPresentValue, getBalanceByRate } from '..';

const ratesByProduct = {
  ['Ahorro platino giro diferido BancoEstado']: {
    rate: '5.11',
    description: 'Tasa de interés anual:',
  },
  ['Vanguard FTSE All-World UCITS ETF']: {
    rate: '8.62',
    description: 'Tasa de crecimiento anual:',
  },
};

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

  const alternative1Rate =
    state.alternative1SelectorValue === 'Alternativa 1'
      ? state.alternative1Rate
      : ratesByProduct[state.alternative1SelectorValue].rate;

  console.log(alternative1Rate);

  const alternative2Rate =
    state.alternative2SelectorValue === 'Alternativa 2'
      ? state.alternative2Rate
      : ratesByProduct[state.alternative2SelectorValue].rate;

  console.log(alternative2Rate);

  const alternative1 = getBalanceByRate({
    ...state,
    alternativeRate: alternative1Rate,
  });
  const alternative2 = getBalanceByRate({
    ...state,
    alternativeRate: alternative2Rate,
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
