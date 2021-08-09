import { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';
import { server } from '../config';

// Actions
import { changeMode } from '../store/actions/mode';

// Components
import MainWrapper from '../components/wrappers/MainWrapper';
import HomeIntro from '../components/sections/Main/HomeIntro';
import ExamplesOfProjects from '../components/sections/Main/ExamplesOfProjects';

export const NavDataContext = createContext(null);

export default function Home({ data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const mode = localStorage.getItem('theme') === 'true' ? true : false;
    if(mode) {
      dispatch(changeMode(mode));
    }
  }, [])

  return (
    <>  
      <Head>
        <title>Evgeniy Vronskiy</title>
      </Head>
      <NavDataContext.Provider value={data.nav}>
        <MainWrapper>
          <HomeIntro data={data.intro} />
          <ExamplesOfProjects data={data.projects} />
        </MainWrapper>
      </NavDataContext.Provider>
    </>
  )
}
export async function getStaticProps() {
  try {
    const { data } = await axios.get(`${server}/api/hodme-data/`);
    return { props: { data } }
  } catch {
    return { props: { data: {} } }
  }
}