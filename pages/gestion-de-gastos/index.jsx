import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';

const GestionDeGastos = () => {
  return (
    <Layout>
      <Typography variant="h6" sx={{ paddingBottom: '0.5rem' }}>
        Gestion de gastos
      </Typography>
      <Image src={'/figma.png'} alt="" width={375} height={1000} />
    </Layout>
  );
};

export default GestionDeGastos;
