import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const ratesByProduct = {
  ['Ahorro platino giro diferido']: {
    rate: '5.11',
    description: 'Tasa de interés anual (%):',
  },
  ['Vanguard FTSE All-World UCITS ETF']: {
    rate: '8.62',
    description: 'Tasa de crecimiento anual (%):',
  },
};

export const Alternative = ({
  inputName,
  alternativeSelectorValue,
  annualInterestRate,
  borderColor,
  onInputChange,
  label,
}) => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <div id="main">
          <div>
            <FormControl fullWidth>
              <InputLabel color={'info'}>{label}</InputLabel>
              <Select
                value={alternativeSelectorValue}
                name={inputName + 'SelectorValue'}
                label={label}
                onChange={onInputChange}
                color={'info'}
                fullWidth
                sx={{ minWidth: '10rem' }}
              >
                <MenuItem value={label}>
                  <Typography sx={{ fontSize: '0.8rem' }}>
                    Ingresar tasa
                  </Typography>
                </MenuItem>
                <MenuItem value={'Ahorro platino giro diferido'}>
                  <Typography sx={{ fontSize: '0.8rem' }}>
                    Ahorro platino giro diferido
                  </Typography>
                </MenuItem>
                <MenuItem value={'Vanguard FTSE All-World UCITS ETF'}>
                  <Typography sx={{ fontSize: '0.8rem' }}>
                    Vanguard ETF
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          {alternativeSelectorValue && (
            <div>
              <div>
                <p>
                  {ratesByProduct[alternativeSelectorValue]?.description ||
                    'Tasa de interés anual (%):'}
                </p>
                {alternativeSelectorValue === label ? (
                  <input
                    type="number"
                    name={inputName + 'Rate'}
                    value={annualInterestRate}
                    onChange={onInputChange}
                  />
                ) : (
                  <p>{ratesByProduct[alternativeSelectorValue].rate}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </Box>

      <style jsx>
        {`
          #main {
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 0.5rem;
            padding: 0rem 0.5rem 0.5rem 0.5rem;
            background-color: #fff;
            border: 2px solid ${borderColor};
            border-radius: 1rem;
          }
          #main > div {
            margin: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            min-width: 12rem;
          }

          p {
            font-size: 0.7rem;
            margin: 0;
            padding: 0;
            margin-bottom: 0.4rem;
          }

          input {
            width: 12rem;
          }
        `}
      </style>
    </>
  );
};
