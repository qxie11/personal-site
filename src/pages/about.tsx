import Head from "next/head";

// Components
import { MainWrapper } from "shared/components/partials/wrappers";
import { AboutIntro, AboutInfo } from "shared/components/sections";

export default function About() {
  return (
    <>
      <Head>
        <title>Обо мне</title>
      </Head>
      <MainWrapper>
        <AboutIntro />
        <AboutInfo />
      </MainWrapper>
    </>
  );
}
