import { Box, Typography } from '@mui/material';
import { Svg } from './Svg';

export const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2rem',
      }}
    >
      <Svg src="/billtrendup.svg" height={32} width={32} />
      <Typography fontWeight={'bold'}>F-TIPS</Typography>
    </Box>
  );
};
