import React from 'react';
import { Banner, BottomBanner, CardsBanner, Chart, CollapseBanner, EarnBanner, FaqBanner, LastBanner, Navbar, TradeBanner,Footer } from './containers';

export const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Chart />
      <BottomBanner />
      <CollapseBanner />
      <CardsBanner />
      <EarnBanner />
      <TradeBanner />
      <FaqBanner />
      <LastBanner />
      <Footer/>
    </>
  )
}

export default App;