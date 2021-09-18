// Components
import Header from '../../global/Header';
import Footer from '../../global/Footer';

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
