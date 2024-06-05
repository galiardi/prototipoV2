import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

export const Alternative = ({
  inputName,
  alternativeName,
  annualInterestRate,
  borderColor,
  onInputChange,
}) => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <div id="main">
          <div>
            <div className="inputDiv">
              <p>Nombre</p>
              <input
                type="text"
                name={inputName + 'Name'}
                value={alternativeName}
                maxLength={25}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel id="category" color={'info'}>
                Categoría
              </InputLabel>
              <Select
                // labelId="category"
                id="selector"
                value={'formData.category' || ''}
                name="category"
                label="Categoría"
                onChange={onInputChange}
                color={'info'}
              >
                <MenuItem value={'ahorro-bancoestado'}>
                  <Typography sx={{ fontSize: '0.7rem' }}>
                    Cuenta de ahorro BancoEstado
                  </Typography>
                </MenuItem>
                <MenuItem value={'inversion-ETFs-trade-republic'}>
                  <Typography sx={{ fontSize: '0.7rem' }}>
                    Inversión en ETFs a través de Trade Republic
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
            <br></br>
          </div>

          <div>
            <div className="inputDiv">
              <p>Tasa de interés anual (%)</p>
              <input
                type="number"
                name={inputName + 'Rate'}
                value={annualInterestRate}
                onChange={onInputChange}
              />
            </div>
          </div>
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
            padding: 0rem 2rem 0.5rem 2rem;
            background-color: #fff;
            border: 2px solid ${borderColor};
            border-radius: 1rem;
          }
          #main > div {
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
          p {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};
