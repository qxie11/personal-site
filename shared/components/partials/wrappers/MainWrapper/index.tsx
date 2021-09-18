// Components
import Header from '../../Header';
import Footer from '../../Footer';

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
