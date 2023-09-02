import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from '@/app/store';
import WalletProvider from '@/components/WalletProvider';
import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

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
