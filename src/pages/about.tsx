import Head from 'next/head';

// Components
import { MainWrapper } from '@partials/wrappers';
import { ExamplesOfProjects } from '@sections/index';

export default function About() {
  return (
    <>
      <Head>
        <title>Обо мне</title>
      </Head>
      <MainWrapper>
        <ExamplesOfProjects></ExamplesOfProjects>
      </MainWrapper>
    </>
  );
}
