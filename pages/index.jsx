import { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';

import { Logger, MainCarousel, Tip } from '../components/ui';
import { useAuth } from '../context/auth';
import { Layout } from '../components/layouts';
import { TipsContext } from '../context/tips';
import { FavoritesContext } from '../context/favorites';

const Home = () => {
  const { user } = useAuth();
  const { tips } = useContext(TipsContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <Layout>
      {!user && (
        <Box sx={{ margin: '1.5rem 0 2rem 0' }}>
          {' '}
          <Logger />
        </Box>
      )}
      <MainCarousel />
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            margin: '2rem',
            fontFamily: '',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          - Tips financieros -
        </Typography>
      </Box>
      <Box sx={{ width: '90%' }}>
        <Grid container spacing={2}>
          {tips.map((tip, i) => {
            return (
              <Tip
                key={i}
                tip={tip}
                isFavorite={favorites.includes(tip.id)}
                categoryLink
              />
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
