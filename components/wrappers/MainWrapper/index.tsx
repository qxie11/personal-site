// Components
import Header from '../../sections/global/Header';
import Footer from '../../sections/global/Footer';

const MainWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default MainWrapper;
