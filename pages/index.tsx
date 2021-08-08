import { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import { server } from '../config';

// Actions
import { changeMode } from '../store/actions/mode';

// Components
import Header from '../components/Header';
import HomeIntro from '../components/HomeIntro';
import ExamplesOfProjects from '../components/ExamplesOfProjects';
import Footer from '../components/Footer';

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
        <NavDataContext.Provider value={data.nav}>
            <Footer />
        </NavDataContext.Provider>
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