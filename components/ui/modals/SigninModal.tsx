import { SetStateAction, useContext, useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { Logo } from '../Logo';

import { UIContext } from '../../../context/ui';
import { Logger } from '../Logger';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export const SigninModal = () => {
  const { showSigninModal, signinOpen } = useContext(UIContext);

  const handleClose = () => {
    showSigninModal(false);
  };

  return (
    <Modal open={signinOpen} onClose={handleClose}>
      <Box sx={style}>
        <Logo />
        <Box
          sx={{
            paddingBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography textAlign={'center'}>
            Para guardar y ver tus tips favoritos debes iniciar sesión
          </Typography>
        </Box>
        <Logger showModal={showSigninModal} />
      </Box>
    </Modal>
  );
};
