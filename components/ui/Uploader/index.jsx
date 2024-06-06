import React, { useState } from 'react';
import Loading from './Loading';
import { isFormValid } from '../../../functions';
import { productUplodaer } from '../../../functions';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

export const Uploader = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    author: '',
  });

  const [errorObj, setErrorObj] = useState({
    category: false,
    title: false,
    description: false,
    author: false,
  });

  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    const inputError = !value;

    const newErrorObj = { ...errorObj, [name]: inputError };
    setErrorObj(newErrorObj);
  };

  const formSubmit = () => {
    if (!isFormValid(formData, setErrorObj)) return;

    productUplodaer(formData, setLoading, setFormData);
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <form>
          <div>
            <FormControl fullWidth>
              <InputLabel id="category">Categoría</InputLabel>
              <Select
                // labelId="category"
                id="selector"
                value={formData.category || ''}
                name="category"
                label="Categoría"
                onChange={onInputChange}
              >
                <MenuItem value={'ahorro'}>ahorro</MenuItem>
                <MenuItem value={'inversion'}>inversión</MenuItem>
                <MenuItem value={'vivienda'}>vivienda</MenuItem>
                <MenuItem value={'prevision'}>previsión</MenuItem>
              </Select>
            </FormControl>
            <p className={errorObj.category ? 'error' : 'notError'}>
              Categoría requerida
            </p>
            <br></br>
          </div>
          <div>
            <div className="inputDiv">
              <input
                type="text"
                name="title"
                value={formData.title}
                maxLength={250}
                onChange={onInputChange}
                placeholder={'Título'}
              />
            </div>
            <p className={errorObj.title ? 'error' : 'notError'}>
              Título requerido
            </p>
          </div>

          <div>
            <div className="inputDiv">
              <textarea
                name="description"
                value={formData.description}
                maxLength={1500}
                onChange={onInputChange}
                placeholder={'Descripción'}
                rows={7}
              />
            </div>
            <p className={errorObj.category ? 'error' : 'notError'}>
              Descripción requerida
            </p>
          </div>
          <div>
            <div className="inputDiv">
              <input
                type="text"
                name="author"
                value={formData.author}
                maxLength={50}
                onChange={onInputChange}
                placeholder={'Autor'}
              />
            </div>
            <p className={errorObj.author ? 'error' : 'notError'}>
              Autor requerido
            </p>
          </div>
        </form>
        <Box sx={{ padding: '2rem' }}>
          {loading ? (
            <Loading />
          ) : (
            <Button
              onClick={formSubmit}
              variant={'outlined'}
              color={'secondary'}
              // disabled={Object.values(errorObj).every(() => true)}
            >
              enviar
            </Button>
          )}
        </Box>
      </Box>

      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 0.5rem;
            padding: 2rem;
            background-color: #ddd;
            border-radius: 1rem;
            min-height: 63vh;
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
          input,
          textarea {
            width: 14rem;
            border: antiquewhite;
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
        `}
      </style>
    </>
  );
};
