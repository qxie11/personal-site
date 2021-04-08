import { store } from "../store/store";
import { Provider } from "react-redux";
import NextNprogress from 'nextjs-progressbar';
import Head from 'next/head';
import '../styles/fonts.scss';
import '../styles/base.scss';
import '../styles/global.scss';

export default function App({ Component, pageProps }: any) {
  return <Provider store={store}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    </Head>
    <NextNprogress color="#1cfcdb" height={3} />
    <Component {...pageProps} />
  </Provider>
}