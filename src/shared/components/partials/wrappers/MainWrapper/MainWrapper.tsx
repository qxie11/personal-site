// Components
import { Header, Footer } from '@components/partials';

const MainWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainWrapper;
