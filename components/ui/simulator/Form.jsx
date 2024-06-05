import { useContext, useEffect, useCallback, useRef } from 'react';
import { Box, Button, Typography, Checkbox } from '@mui/material';
import { Alternative } from './Alternative';
import { SimulatorDataContext } from '../../../context/simulatorData';
import { UIContext } from '../../../context/ui';

export const Form = () => {
  const {
    initialCapital,
    annualContribution,
    years,
    alternative1SelectorValue,
    alternative2SelectorValue,
    alternative1Rate,
    alternative2Rate,
    inflationRate,
    onInputChange,
    onCalculate,
    setInflationRate,
  } = useContext(SimulatorDataContext);

  const { isAdjustContributionsChecked, changeAdjustContributions } =
    useContext(UIContext);

  const cachedSetInflationRate = useCallback(setInflationRate, []);

  useEffect(() => {
    cachedSetInflationRate();
  }, [cachedSetInflationRate]);

  const buttonRef = useRef(null);

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <form>
          <div>
            <div className="inputDiv">
              <p>Capital inicial</p>
              <input
                type="number"
                name="initialCapital"
                value={initialCapital}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div>
            <div className="inputDiv">
              <p>Aporte anual</p>
              <input
                type="number"
                name="annualContribution"
                value={annualContribution}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div>
            <div className="inputDiv">
              <p>Años</p>
              <input
                type="number"
                name="years"
                value={years}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div>
            <div className="inputDiv">
              <p>Tasa de inflación anual (%)*</p>
              <input
                type="number"
                name="inflationRate"
                value={inflationRate}
                onChange={onInputChange}
              />
            </div>
          </div>
          <Alternative
            inputName={'alternative1'}
            alternativeSelectorValue={alternative1SelectorValue}
            annualInterestRate={alternative1Rate}
            borderColor={'rgba(255, 99, 132, 0.5)'}
            onInputChange={onInputChange}
            label={'Alternativa 1'}
          />
          <Alternative
            inputName={'alternative2'}
            alternativeSelectorValue={alternative2SelectorValue}
            annualInterestRate={alternative2Rate}
            borderColor={'rgba(53, 162, 235, 0.5)'}
            onInputChange={onInputChange}
            label={'Alternativa 2'}
          />
        </form>
        <Typography sx={{ fontSize: '0.7rem' }}>
          *Valor propuesto corresponde al promedio de la variación anual del IPC
          de los últimos 25 años contados desde el mes actual.
        </Typography>
        <Box sx={{ padding: '2rem' }}>
          <Button
            variant={'outlined'}
            color={'inherit'}
            ref={buttonRef}
            onClick={() => {
              onCalculate();
              buttonRef.current.scrollIntoView();
            }}
          >
            Calcular
          </Button>
        </Box>
      </Box>

      <style jsx>
        {`
          form {
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 0.5rem;
            padding: 0.5rem 1.5rem 1rem 1.5rem;
            background-color: #fff;
            border: 2px solid #000;
            border-radius: 1rem;
          }
          form > div {
            margin: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          }
          .inputDiv {
            position: relative;
            display: flex;
            justify-content: center;
            width: 19rem;
          }
          input {
            width: 14rem;
            border: 1px solid #ddd;
            font-size: 1rem;
            font-family: inherit;
            border-radius: 0.2rem;
            text-indent: 1rem;
          }
          i {
            position: absolute;
            right: 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .error {
            color: red;
            font-size: 0.7rem;
            position: relative;
            top: 0px;
            left: 0px;
            height: 0px;
          }
          .notError {
            visibility: hidden;
            font-size: 0.7rem;
            position: relative;
            top: 0px;
            left: 0px;
            height: 0px;
          }
          p {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};
