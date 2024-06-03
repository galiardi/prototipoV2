import React, { useContext } from 'react';
import Toast from 'react-bootstrap/Toast';
import { UIContext } from '../../context/ui';

export const CopyToast = () => {
  const { copyToastOpen: show, showCopyToast } = useContext(UIContext);

  return (
    <Toast
      onClose={() => showCopyToast(false)}
      show={show}
      delay={3000}
      autohide
      style={{ width: '15rem', textAlign: 'center' }}
    >
      <Toast.Body>Tip copiado en el portapapeles!</Toast.Body>
    </Toast>
  );
};
