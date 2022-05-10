import { useEffect } from 'react';
import AOS from 'aos';

import About from '../components/About';
import Brands from '../components/Brands';
import CompanyInformation from '../components/CompanyInformation';
import Footer from '../components/Footer';
import Form from '../components/Form';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Hero from '../components/Hero';

import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompanyInformation />
        <Form />
        <Brands />
        <GetStarted />
        <About />
        <Footer />
      </main>
    </>
  );
}
