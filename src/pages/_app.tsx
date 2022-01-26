import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SideDrawerProvider } from '../contexts/SidebarDrawerContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <SideDrawerProvider>
        <Component {...pageProps} />
      </SideDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
