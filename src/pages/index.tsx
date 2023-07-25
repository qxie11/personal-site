import Head from 'next/head';

// Components
import { MainWrapper } from '@partials/wrappers';
import { ExamplesOfProjects, HomeIntro } from '@components/sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Evgeniy Ponomarev</title>
      </Head>
      <MainWrapper>
        <HomeIntro />
        <ExamplesOfProjects />
      </MainWrapper>
    </>
  );
}
