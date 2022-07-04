import { store } from '../store/store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import '../styles/fonts.scss';
import '../styles/base.scss';
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNprogress color="#b80929" height={3} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
