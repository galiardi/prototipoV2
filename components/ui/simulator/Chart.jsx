import { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FormControlLabel, Box, Typography } from '@mui/material';
import { PresentValueSwitch } from './PresentValueSwitch';
import { UIContext } from '../../../context/ui';
import { SimulatorDataContext } from '../../../context/simulatorData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'SALDO ACUMULADO',
    },
  },
  maintainAspectRatio: false,
};
export const Chart = () => {
  const simulatorData = useContext(SimulatorDataContext);
  const {
    isPresentValueSwitchChecked,
    turnPresentValueSwitch,
    isAdjustContributionsChecked,
    changeAdjustContributions,
  } = useContext(UIContext);

  const totalContributionPV = Math.round(simulatorData.totalContributionPV);
  const totalContribution = Math.round(simulatorData.totalContribution);
  const balance1 = Math.round(simulatorData.alternative1.balance);
  const balance2 = Math.round(simulatorData.alternative2.balance);
  const balance1PV = Math.round(simulatorData.alternative1.balancePV);
  const balance2PV = Math.round(simulatorData.alternative2.balancePV);
  const balance1WAC = Math.round(
    simulatorData.alternative1.balanceWithAdjustedContributions
  );
  const balance1WACPV = Math.round(
    simulatorData.alternative1.balanceWithAdjustedContributionsPV
  );
  const balance2WAC = Math.round(
    simulatorData.alternative2.balanceWithAdjustedContributions
  );
  const balance2WACPV = Math.round(
    simulatorData.alternative2.balanceWithAdjustedContributionsPV
  );
  const totalContributionWAC = Math.round(simulatorData.totalContributionWAC);
  const totalContributionWACPV = Math.round(
    simulatorData.totalContributionWACPV
  );
  // console.table(simulatorData);

  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Aporte total',
        data: [
          isPresentValueSwitchChecked ? totalContributionPV : totalContribution,
        ],
        borderColor: '#e1e1e1',
        backgroundColor: '#f1f1f1',
      },
      {
        label: simulatorData.alternative1label,
        data: [isPresentValueSwitchChecked ? balance1PV : balance1],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: simulatorData.alternative2label,
        data: [isPresentValueSwitchChecked ? balance2PV : balance2],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // data with adjusted contributions
  const dataWAC = {
    labels: [''],
    datasets: [
      {
        label: 'Aporte total',
        data: [
          isPresentValueSwitchChecked
            ? totalContributionWACPV
            : totalContributionWAC,
        ],
        borderColor: '#e1e1e1',
        backgroundColor: '#f1f1f1',
      },
      {
        label: simulatorData.alternative1label,
        data: [isPresentValueSwitchChecked ? balance1WACPV : balance1WAC],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: simulatorData.alternative2label,
        data: [isPresentValueSwitchChecked ? balance2WACPV : balance2WAC],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <Bar
        options={options}
        data={isAdjustContributionsChecked ? dataWAC : data}
      />
      <Box>
        <FormControlLabel
          control={
            <PresentValueSwitch
              sx={{ m: 1 }}
              checked={isPresentValueSwitchChecked}
              onChange={() => {
                turnPresentValueSwitch(!isPresentValueSwitchChecked);
              }}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label={
            <Typography sx={{ fontSize: '0.9rem' }}>
              Ajustar a valor presente
            </Typography>
          }
        />
      </Box>
      <Box>
        <FormControlLabel
          control={
            <PresentValueSwitch
              sx={{ m: 1 }}
              checked={isAdjustContributionsChecked}
              onChange={() => {
                changeAdjustContributions(!isAdjustContributionsChecked);
              }}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label={
            <Typography sx={{ fontSize: '0.9rem' }}>
              Ajustar los aportes futuros a valor presente para mantener su
              valor actual
            </Typography>
          }
        />
      </Box>
    </>
  );
};
