import { createContext } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HomeIntro from '../components/HomeIntro';

export const NavDataContext = createContext(null);

export default function Home({ data }) {
  return (
      <>  
        <Head>
          <title>Evgeniy Ponomarev</title>
        </Head>
        <NavDataContext.Provider value={data.nav}>
            <Header />
        </NavDataContext.Provider>
        <main>
            <HomeIntro data={data.intro} />
        </main>
    </>
  )
}
export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/home-data/`);
    const data = await res.json();

    return { props: { data } }
}