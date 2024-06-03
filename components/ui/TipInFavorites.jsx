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
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
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

export const TipInFavorites = ({ tip }) => {
  const { title, description, category, id, date } = tip;
  const { showCopyToast } = useContext(UIContext);
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

  const deleteFromFavorites = (id) => {
    const newFavorites = favorites.filter((e) => e !== id);
    db.collection('favoritesByUser')
      .doc(user.uid)
      .set({ favorites: newFavorites }, { merge: true });
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ padding: '0.5rem 1rem' }}>
        <Box display={'flex'} justifyContent={'end'}>
          <IconButton
            size="small"
            edge="end"
            onClick={() => deleteFromFavorites(tip.id)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
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
                <IconButton aria-label="share" onClick={share}>
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Link href={`/${category}`}>
                  <Typography
                    sx={{ fontSize: '0.8rem' }}
                    color="text.secondary"
                  >
                    Ver mas tips de {pages[category]}
                  </Typography>
                </Link>
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
