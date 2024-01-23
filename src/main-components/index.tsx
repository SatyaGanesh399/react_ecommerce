import React from 'react'
import Navbar from './Navbar'
import Carousal from './Carousal'
import DisplayTabs from './DisplayTabs'
import Services from './Services'
import HappyHours from './HappyHours'
import RecentNews from './RecentNews';
import Sponsers from './Sponsers';
import Footer from './Footer';

const index = () => {
  return (
    <>
    <Navbar />
    <Carousal />
    <DisplayTabs />
    <Services />
    <HappyHours />
    <RecentNews />
    <Sponsers />
    <Footer />
    </>
  )
}

export default index