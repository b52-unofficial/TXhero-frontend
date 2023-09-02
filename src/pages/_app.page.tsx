import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from '@/app/store';
import WalletProvider from '@/components/WalletProvider';

import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

dayjs.extend(duration);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WalletProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </WalletProvider>
    </Provider>
  );
}
