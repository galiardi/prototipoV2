import { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Layout } from '../components/layouts';
import { TipInFavorites } from '../components/ui';
import { TipsContext } from '../context/tips';
import { FavoritesContext } from '../context/favorites';

const MisTipsFavoritos = () => {
  const { tips } = useContext(TipsContext);
  const { favorites } = useContext(FavoritesContext);
  const myFavorites = tips.filter((tip) => favorites.includes(tip.id));
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Mis tips favoritos</Typography>
      </Box>
      <Box sx={{ width: '90%' }}>
        <Grid container spacing={2}>
          {myFavorites.map((tip, i) => {
            return <TipInFavorites key={i} tip={tip} />;
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export default MisTipsFavoritos;
