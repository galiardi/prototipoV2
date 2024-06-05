import { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { UIContext } from '../../context/ui';
import { useAuth } from '../../context/auth';
import { Svg } from './Svg';

export const Navbar = () => {
  const { user } = useAuth();
  const { openSidemenu } = useContext(UIContext);
  const router = useRouter();

  const onUserIconClick = async () => {
    try {
      const response = await fetch('/api/door', {
        method: 'POST',
        body: JSON.stringify({ user }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { url } = await response.json();
      console.log(url);
      if (url) router.push(url);
    } catch (e) {
      console.log(e);
      return;
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton size="large" edge="start" onClick={openSidemenu}>
          <MenuOutlinedIcon />
        </IconButton>
        {router.pathname !== '/' && (
          <IconButton
            size="large"
            sx={{ position: 'absolute', left: '2.5rem' }}
            onClick={() => router.push('/')}
          >
            <HomeOutlinedIcon />
          </IconButton>
        )}
        <Box
          onClick={() => router.push('/')}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography variant="h6" fontFamily={''} sx={{ fontWeight: 'bold' }}>
            F-TIPS
          </Typography>
          <Svg src={'/billtrendup.svg'} width={14} height={14} />
        </Box>
        <Box sx={{ position: 'relative' }}>
          {user ? (
            <IconButton size="small" edge="end" onClick={onUserIconClick}>
              <Avatar
                sx={{
                  height: '1.5rem',
                  width: '1.5rem',
                }}
                src={user.photoUrl}
              />
            </IconButton>
          ) : (
            <IconButton size="large" edge="end">
              <AccountCircleOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
