import { useState } from 'react';
import { SimulatorDataContext } from '.';
import {
  simulateData,
  getGeneralIpcSerie,
  getAverageAnnualInflation,
} from '../../functions';

export const SimulatorDataProvider = ({ children }) => {
  const [state, setState] = useState({
    initialCapital: '',
    annualContribution: '',
    years: '',
    alternative1Name: 'Alternativa 1',
    alternative2Name: 'Alternativa 2',
    alternative1Rate: '',
    alternative2Rate: '',
    inflationRate: '',
    totalContribution: 0,
    totalContributionPV: 0,
    alternative1: {
      balance: 0,
      balancePV: 0,
      balanceWithAdjustedContributions: 0,
      balanceWithAdjustedContributionsPV: 0,
    },
    alternative2: {
      balance: 0,
      balancePV: 0,
      balanceWithAdjustedContributions: 0,
      balanceWithAdjustedContributionsPV: 0,
    },
    alternative1label: '',
    alternative2label: '',
    totalContributionWAC: 0,
    totalContributionWACPV: 0,
  });

  const onInputChange = (e) => {
    let newFormData;
    const { name, value } = e.target;
    if (name === 'inflationRate') {
      newFormData = { ...state, [name]: Number(value) };
    } else {
      newFormData = { ...state, [name]: value };
    }
    setState(newFormData);
  };

  const onCalculate = () => {
    const {
      totalContribution,
      totalContributionPV,
      alternative1,
      alternative2,
      totalContributionWAC,
      totalContributionWACPV,
    } = simulateData({ ...state });

    setState({
      ...state,
      totalContribution,
      totalContributionPV,
      alternative1,
      alternative2,
      alternative1label: state.alternative1Name,
      alternative2label: state.alternative2Name,
      totalContributionWAC,
      totalContributionWACPV,
    });
  };

  const setInflationRate = async () => {
    const ipcSerie = await getGeneralIpcSerie();
    const inflationRate = getAverageAnnualInflation(ipcSerie.data.Obs);
    setState({ ...state, inflationRate });
  };

  // console.table(state);

  return (
    <SimulatorDataContext.Provider
      value={{
        ...state,
        onInputChange,
        onCalculate,
        setInflationRate,
      }}
    >
      {children}
    </SimulatorDataContext.Provider>
  );
};
