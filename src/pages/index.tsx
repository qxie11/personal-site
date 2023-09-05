import Head from "next/head";

// Components
import { MainWrapper } from "shared/components/partials/wrappers";
import { ExamplesOfProjects, HomeIntro } from "shared/components/sections";

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
