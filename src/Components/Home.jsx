// Home.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import AboutUs from './AboutUs.jsx';
import Academics from './curriculum.jsx';
import Admissions from './Admissions';
import Faculty from './Faculty';
import Students from './Students';
import Gallery from './Gallery';
import ContactUs from './ContactUs';

const Home = () => {

  return (
    
    <div>
      <Hero />
      <Header />
      <AboutUs />
      <Academics />
      <Admissions />
      <Faculty />
      <Students />
      <Gallery />
      <ContactUs/>
    </div>
  );
};

export default Home;