import React from 'react'
import Hero from './Hero';
import AboutUS from './AboutUS';
import Services from './Services';
import ExclusiveEvents from './ExclusiveEvents';
import WhatWeDo from './WhatWeDo';
import OurAchievements from './OurAchievements';


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUS />
      <Services />
      <ExclusiveEvents />
      <WhatWeDo />
      <OurAchievements />
    </div>
  )
}

export default Home