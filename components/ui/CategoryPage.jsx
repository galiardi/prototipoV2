import { useContext } from 'react';
import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';
import { Layout } from '../layouts';
import { Tip } from '.';
import { TipsContext } from '../../context/tips';
import { FavoritesContext } from '../../context/favorites';

export const CategoryPage = ({ category, title, imgSrc }) => {
  const { tips } = useContext(TipsContext);
  const tipsFiltered = tips.filter((tip) => tip.category === category);
  const { favorites } = useContext(FavoritesContext);

  return (
    <Layout>
      <Box sx={{ paddingBottom: '0.5rem' }}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box marginBottom={'1rem'}>
        <Image
          src={imgSrc}
          width={150}
          height={150}
          alt=""
          style={{
            borderRadius: '100%',
            objectFit: 'cover',
            position: 'relative',
            overflow: 'hidden',
            objectPosition: 'center',
          }}
        />
      </Box>
      <Box sx={{ width: '90%' }}>
        <Grid container spacing={2}>
          {tipsFiltered.map((tip, i) => {
            return (
              <Tip key={i} tip={tip} isFavorite={favorites.includes(tip.id)} />
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};
