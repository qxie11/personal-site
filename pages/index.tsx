import { createContext, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HomeIntro from '../components/HomeIntro';
import ExamplesOfProjects from '../components/ExamplesOfProjects';
import { server } from '../config';
import { useDispatch } from 'react-redux';
import { changeMode } from '../store/actions/mode';

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
            <Header />
        </NavDataContext.Provider>
        <main>
            <HomeIntro data={data.intro} />
            <ExamplesOfProjects data={data.projects} />
        </main>
    </>
  )
}
export async function getStaticProps() {
    const res = await fetch(`${server}/api/home-data/`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    });
    const data = await res.json();

    return { props: { data } }
}