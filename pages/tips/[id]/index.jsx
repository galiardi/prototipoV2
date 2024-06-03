import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Grid, Paper, Divider } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { Layout } from '../../../components/layouts';
import { UIContext } from '../../../context/ui';
import firebase from '../../../firebase/client';

const pages = {
  ahorro: 'ahorro',
  inversión: 'inversion',
  vivienda: 'vivienda',
  previsión: 'prevision',
};

export async function getServerSideProps({ req, res, resolvedUrl }) {
  const id = resolvedUrl.trim().slice(6);
  const db = firebase.firestore();
  const response = await db.collection('tips').doc(id).get();
  const tip = response.data();
  return {
    props: {
      tip,
    },
  };
}

export default function TipPage({ tip }) {
  // const router = useRouter();
  // const id = router.query.id;
  // dynamic import. TipContext expone cada tip individualmente por id
  // const { [id]: tip = {} } = useContext(TipsContext);
  const { title, description, category, date } = tip;
  const { showCopyToast } = useContext(UIContext);
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
  return (
    <>
      <Head>
        <meta property="og:title" content={tip.title} />
        <meta property="og:description" content={tip.description} />
        {/* <meta
          property="og:image"
          content="https://www.ejemplo.com/imagen.jpg"
        /> */}
        {/* <meta property="og:url" content="https://www.ejemplo.com" /> */}
        <meta property="og:type" content="website" />

        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={tip.title} />
        <meta name="twitter:description" content={tip.description} />
        {/* <meta
          name="twitter:image"
          content="https://www.ejemplo.com/imagen.jpg"
        />
        <meta name="twitter:url" content="https://www.ejemplo.com" /> */}
      </Head>
      <Layout>
        <Box sx={{ width: '90%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ padding: '1rem', marginTop: '1rem' }}>
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
                    <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                    <Divider />
                    <Box sx={{ paddingY: '1rem' }}>
                      <Typography textAlign={'justify'}>
                        {description}
                      </Typography>
                    </Box>
                    <Divider />

                    <Box display={'flex'} justifyContent={'space-between'}>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" onClick={share}>
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                      <CardActions>
                        <Link href={`/${pages[category]}`}>
                          <Typography
                            sx={{ fontSize: '0.8rem' }}
                            color="text.secondary"
                          >
                            Ver mas tips de {category}
                          </Typography>
                        </Link>
                      </CardActions>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
}
