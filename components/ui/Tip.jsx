import { useContext } from 'react';
import Link from 'next/link';
import {
  Paper,
  Grid,
  Typography,
  Divider,
  Box,
  CardActions,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import firebase from '../../firebase/client';
import { useAuth } from '../../context/auth';
import { UIContext } from '../../context/ui';
import { FavoritesContext } from '../../context/favorites';

const pages = {
  ahorro: 'ahorro',
  inversion: 'inversión',
  vivienda: 'vivienda',
  prevision: 'previsión',
};

const db = firebase.firestore();

export const Tip = ({ tip, isFavorite, categoryLink }) => {
  const { title, description, category, id, date } = tip;
  const { showCopyToast, showSigninModal } = useContext(UIContext);
  const { user } = useAuth();
  const { favorites } = useContext(FavoritesContext);
  const share = () => {
    if (navigator.share) {
      navigator.share({
        url: `https://ftips.vercel.app/tips/${tip.id}`,
        title: tip.title,
      });
    } else {
      navigator.clipboard.writeText(
        `${tip.title}\nhttps://ftips.vercel.app/tips/${tip.id}`
      );
      showCopyToast(true);
    }
  };

  const changeFavoriteStatus = () => {
    if (!user) {
      showSigninModal(true);
      return;
    }
    const newFavorites = [...favorites];
    console.log(favorites);
    console.log(newFavorites);
    if (favorites.includes(tip.id)) {
      const idIndex = newFavorites.findIndex((e) => e === tip.id);
      newFavorites.splice(idIndex, 1);
    } else {
      newFavorites.push(tip.id);
    }
    db.collection('favoritesByUser')
      .doc(user.uid)
      .set({ favorites: newFavorites }, { merge: true });
  };
  return (
    <Grid item xs={12}>
      <Paper sx={{ padding: '0.5rem 1rem' }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'left',
            }}
          >
            <Accordion style={{ boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography textAlign={'justify'}>{description}</Typography>
              </AccordionDetails>
              <AccordionSummary></AccordionSummary>
            </Accordion>

            <Divider />

            <Box display={'flex'} justifyContent={'space-between'}>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={changeFavoriteStatus}
                >
                  {isFavorite ? (
                    <FavoriteIcon fontSize="small" />
                  ) : (
                    <FavoriteBorderIcon fontSize="small" />
                  )}
                </IconButton>
                <IconButton aria-label="share" onClick={share}>
                  <ShareIcon fontSize="small" />
                </IconButton>
              </CardActions>
              <CardActions>
                {categoryLink ? (
                  <>
                    <Link href={`/${category}`}>
                      <Typography
                        sx={{ fontSize: '0.8rem' }}
                        color="text.secondary"
                      >
                        Ver mas tips de {pages[category]}
                      </Typography>
                    </Link>
                  </>
                ) : (
                  <>
                    <Typography
                      sx={{ fontSize: '0.8rem' }}
                      color="text.secondary"
                    >
                      categoría: {pages[category]}
                    </Typography>
                  </>
                )}
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
