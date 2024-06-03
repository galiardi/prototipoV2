import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';
import { AuthProvider } from '../context/auth';
import { UIProvider } from '../context/ui';
import { TipsProvider } from '../context/tips';
import { FavoritesProvider } from '../context/favorites';
import { SimulatorDataProvider } from '../context/simulatorData';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <UIProvider>
          <SimulatorDataProvider>
            <TipsProvider>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </TipsProvider>
          </SimulatorDataProvider>
        </UIProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default MyApp;
