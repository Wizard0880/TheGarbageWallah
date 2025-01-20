import React from 'react';
import LandingPage from '../components/LandingPage.components';
import About from '../components/About.components';
import Eyes from '../components/Eyes.components';
import Featured from '../components/Featured.components';

function HomePage() {
  return (
    <div>
      <LandingPage />
      <About />
      <Eyes />
      <Featured />
    </div>
  );
}

export default HomePage;