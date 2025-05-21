import React from 'react';
import Header from '../../widgets/header';
import Banner from './banner/index';
import Footer from '../../widgets/footer';

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
