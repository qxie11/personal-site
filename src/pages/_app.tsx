import { store } from "../store/store";
import { Provider, useSelector } from "react-redux";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import { IntlProvider } from "react-intl";
import intlSelectors from "store/selectors/intlSelectors";

import "antd/dist/antd.less";
import "../styles/fonts.scss";
import "../styles/base.scss";
import "../styles/global.scss";

const IntlComponent = ({ children }) => {
  const defaultLanguage = useSelector(intlSelectors.selectDefaultLanguage);
  const messages = useSelector(intlSelectors.selectMessages);

  return (
    <IntlProvider locale={defaultLanguage || 'en'} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <IntlComponent>
        <NextNprogress color="#b80929" height={3} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </IntlComponent>
    </Provider>
  );
}
