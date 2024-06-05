import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const ratesByProduct = {
  ['Cuenta de ahorro']: '4.0',
  ['Inversión en ETFs']: '10.5',
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
              >
                <MenuItem value={label}>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    Ingresar tasa
                  </Typography>
                </MenuItem>
                <MenuItem value={'Cuenta de ahorro'}>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    Cuenta de ahorro
                  </Typography>
                </MenuItem>
                <MenuItem value={'Inversión en ETFs'}>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    Inversión en ETFs
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          {alternativeSelectorValue && (
            <div>
              <div>
                <p>Tasa de interés anual (%):</p>
                {alternativeSelectorValue === label ? (
                  <input
                    type="number"
                    name={inputName + 'Rate'}
                    value={annualInterestRate}
                    onChange={onInputChange}
                  />
                ) : (
                  <p>{ratesByProduct[alternativeSelectorValue]}</p>
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
            padding: 0rem 1rem 0.5rem 1rem;
            background-color: #fff;
            border: 2px solid ${borderColor};
            border-radius: 1rem;
          }
          #main > div {
            margin: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            min-width: 16rem;
          }

          p {
            margin: 0;
            padding: 0;
            margin-bottom: 0.4rem;
          }
        `}
      </style>
    </>
  );
};
