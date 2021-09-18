import { store } from '../store/store';
import { Provider } from 'react-redux';
import NextNprogress from 'nextjs-progressbar';
import '../styles/fonts.scss';
import '../styles/base.scss';
import '../styles/global.scss';

export default function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <NextNprogress color="#1cfcdb" height={3} />
      <Component {...pageProps} />
    </Provider>
  );
}
