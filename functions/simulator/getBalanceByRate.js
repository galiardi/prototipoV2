import { getBalance } from './getBalance';
import { getBalanceWithAdjustedContributions } from './getBalanceWithAdjustedContributions';
import { getPresentValue } from './getPresentValue';

export const getBalanceByRate = (state) => {
  const initialCapital = Number(state.initialCapital);
  const annualContribution = Number(state.annualContribution);
  const years = Number(state.years);
  const interestRate = Number(state.alternativeRate);

  const balance = getBalance({
    initialCapital,
    annualContribution,
    years,
    rate: interestRate,
  });
  const balancePV = getPresentValue({
    futureValue: balance,
    years,
    inflation: state.inflationRate,
  });

  const balanceWithAdjustedContributions = getBalanceWithAdjustedContributions({
    initialCapital,
    annualContribution,
    years,
    rate: interestRate,
    inflation: state.inflationRate,
  });
  const balanceWithAdjustedContributionsPV = getPresentValue({
    futureValue: balanceWithAdjustedContributions,
    years,
    inflation: state.inflationRate,
  });

  return {
    balance,
    balancePV,
    balanceWithAdjustedContributions,
    balanceWithAdjustedContributionsPV,
  };
};
