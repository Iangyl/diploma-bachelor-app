import type { AppProps } from 'next/app';
import ModalProvider from '../components/ModalProvider/ModalProvider';

import '@/src/styles/normalize.css';
import '@/src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
