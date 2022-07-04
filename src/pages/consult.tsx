import Head from 'next/head';

// Components
import { MainWrapper } from '@partials/wrappers';
import { ConsultIntro } from '@shared/components/sections';

export default function Consult() {
  return (
    <>
      <Head>
        <title>Менторство</title>
      </Head>
      <MainWrapper>
        <ConsultIntro />
      </MainWrapper>
    </>
  );
}
