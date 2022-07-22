import Head from 'next/head';

// Components
import { MainWrapper } from '@partials/wrappers';
import {
  ConsultIntro,
  ConsultThemes,
  WhyMe,
  ConsultFeedback,
  ConsultPrices,
} from '@shared/components/sections';

export default function Consult() {
  return (
    <>
      <Head>
        <title>Менторство</title>
      </Head>
      <MainWrapper>
        <ConsultIntro />
        <ConsultThemes />
        <WhyMe />
        <ConsultFeedback />
        <ConsultPrices />
      </MainWrapper>
    </>
  );
}
