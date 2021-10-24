import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

// Actions
import { changeMode } from '@store/actions/mode';

// Components
import { MainWrapper } from '@partials/wrappers';
import { ExamplesOfProjects, HomeIntro } from '@components/sections';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const mode = localStorage.getItem('theme') === 'true' ? true : false;
    if (mode) {
      dispatch(changeMode(mode));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Evgeniy Vronskiy</title>
      </Head>
      <MainWrapper>
        <HomeIntro />
        <ExamplesOfProjects />
      </MainWrapper>
    </>
  );
}
