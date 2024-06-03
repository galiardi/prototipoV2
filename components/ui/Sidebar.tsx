import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
  IconButton,
} from '@mui/material';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSackDollar,
  faMoneyBillTrendUp,
  faHouse,
  faPersonCane,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import { UIContext } from '../../context/ui';
import { useAuth } from '../../context/auth';

import { BarChart, CastForEducation, PieChart } from '@mui/icons-material';

type item = {
  text: string;
  icon: React.ReactNode;
  url: string;
};

const pages: item[] = [
  {
    text: 'Webinar',
    icon: <CastForEducation fontSize="small" />,
    url: '/webinar',
  },
  // {
  //   text: 'Gestión de gastos',
  //   icon: <PieChart fontSize="small" />,
  //   url: '/gestion-de-gastos',
  // },
  {
    text: 'Simulador',
    icon: <BarChart fontSize="small" />,
    url: '/simulador',
  },
  {
    text: 'Inicio',
    icon: <HomeOutlinedIcon fontSize="small" />,
    url: '/',
  },
];

const categories: item[] = [
  {
    text: 'Ahorro',
    icon: <FontAwesomeIcon icon={faSackDollar} />,
    url: '/ahorro',
  },
  {
    text: 'Inversión',
    icon: <FontAwesomeIcon icon={faMoneyBillTrendUp} />,
    url: '/inversion',
  },
  {
    text: 'Vivienda',
    icon: <FontAwesomeIcon icon={faHouse} />,
    url: '/vivienda',
  },
  {
    text: 'Previsión',
    icon: <FontAwesomeIcon icon={faPersonCane} />,
    url: '/prevision',
  },
];

export const Sidebar = () => {
  const { user, signout } = useAuth();
  const { sidemenuOpen, closeSidemenu, openSidemenu, showSigninModal } =
    useContext(UIContext);
  const router = useRouter();

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const onMyFavoriteTips = () => {
    closeSidemenu();
    if (user) {
      router.push('/mis-tips-favoritos');
    } else {
      showSigninModal(true);
    }
  };
  return (
    <SwipeableDrawer
      anchor="left"
      open={sidemenuOpen}
      onClose={closeSidemenu}
      onOpen={openSidemenu}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Box
            sx={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              flexGrow: 2,
            }}
          >
            <Typography variant="h6">Menú</Typography>
          </Box>
          <IconButton onClick={closeSidemenu}>
            <ArrowBackIosNewOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {pages.map((page, index) => {
            return (
              <Link href={page.url} key={index}>
                <ListItem onClick={closeSidemenu}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.text} />
                </ListItem>
              </Link>
            );
          })}
          <Divider />
          <br />
          <ListItem>
            <ListItemText>TIPS</ListItemText>
          </ListItem>
          {categories.map((category, index) => (
            <Link href={category.url} key={index}>
              <ListItem onClick={closeSidemenu}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText primary={category.text} />
              </ListItem>
            </Link>
          ))}
          <ListItem onClick={onMyFavoriteTips}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHeart} />
            </ListItemIcon>
            <Typography
            // fontWeight={'bold'}
            >
              Mis tips favoritos
            </Typography>
          </ListItem>
          <br />
          <Divider />
          <br />
          {user && (
            <>
              <ListItem
                onClick={() => {
                  closeSidemenu();
                  signout();
                }}
              >
                <ListItemIcon>
                  <LogoutOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};
