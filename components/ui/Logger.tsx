//import { signIn } from 'next-auth/react';
import { Box } from '@mui/material';
import GoogleButton from 'react-google-button';
import { useAuth } from '../../context/auth';

interface Props {
  showModal?: (arg: boolean) => void;
}

export const Logger = ({ showModal }: Props) => {
  const { signinWithGoogle } = useAuth();
  const handleClick = () => {
    if (showModal) showModal(false);
    signinWithGoogle();
  };
  return (
    <Box display="flex" justifyContent="center">
      <GoogleButton
        label="Acceder con Google"
        type="light"
        onClick={handleClick}
      />
    </Box>
  );
};
