import Image from 'next/image';
import Link from 'next/link';
import { Box, Divider, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Webinar = () => {
  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Image src="/zoomLogo.svg" width={120} height={60} alt="zoom icon" />
        </Box>
        <Divider flexItem />
        <Box>
          <Typography variant="body2" color="GrayText">
            Su idioma y su zona horaria actual son (GMT-4:00) Santiago, Español
          </Typography>
        </Box>
        <Box sx={{ paddingTop: '1rem' }}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Próximas reuniones">
              Por el momento no se han registrado reuniones.
            </Tab>
            <Tab eventKey="profile" title="Grabaciones en la nube">
              Por el momento no existen grabaciones.
            </Tab>
            <Tab eventKey="contact" title="Contacto">
              Contáctanos a nuestro{' '}
              <Link
                href={`https://wa.me/56953295712/?text=Hola,%20escribo%20desde%20https://ftips.vercel.app`}
                className="text-primary"
              >
                WhatsApp
              </Link>
              .
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </Layout>
  );
};

export default Webinar;
