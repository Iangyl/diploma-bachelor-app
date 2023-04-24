import { Provider } from 'react-redux';
import { store } from '../redux/store';

import ModalProvider from '../components/ModalProvider/ModalProvider';

import type { AppProps } from 'next/app';

import '@/src/styles/normalize.css';
import '@/src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </Provider>
  );
}
