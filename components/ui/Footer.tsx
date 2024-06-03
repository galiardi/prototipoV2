import Link from 'next/link';
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Box,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CopyToast } from '.';
export const Footer = () => {
  return (
    <Box
      style={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      <Divider />
      <BottomNavigation>
        <BottomNavigationAction
          LinkComponent={Link}
          href={`https://wa.me/56953295712/?text=Hola,%20escribo%20desde%20https://ftips.vercel.app%20para%20sugerir%20`}
          icon={<WhatsAppIcon />}
        />
      </BottomNavigation>
      <Box
        sx={{
          position: 'absolute',
          zIndex: '100',
          right: '0.5rem',
          top: '-3rem',
        }}
      >
        <CopyToast />
      </Box>
    </Box>
  );
};
