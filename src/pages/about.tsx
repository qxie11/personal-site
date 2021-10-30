import Head from 'next/head';

// Components
import { MainWrapper } from '@partials/wrappers';
import { AboutIntro } from '@components/sections';

export default function About() {
  return (
    <>
      <Head>
        <title>Обо мне</title>
      </Head>
      <MainWrapper>
        <AboutIntro />
      </MainWrapper>
    </>
  );
}
