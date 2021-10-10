import { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';

// Actions
import { changeMode } from '../store/actions/mode';

// Components
import MainWrapper from '../shared/components/partials/wrappers/MainWrapper';
import HomeIntro from '../shared/components/sections/Main/HomeIntro';
import ExamplesOfProjects from '../shared/components/sections/Main/ExamplesOfProjects';

export default function Home({ data }) {
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
