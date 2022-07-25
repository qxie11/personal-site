import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  componentDidMount(): void {
    window?.dataLayer = window?.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-185699919-1');
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#b80929" />
          <meta property="og:image" content="/images/me.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-185699919-1"
          ></script>
          <script>{}</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
