import About from '../components/About';
import Brands from '../components/Brands';
import CompanyInformation from '../components/CompanyInformation';
import Form from '../components/Form';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
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
      </main>
    </>
  );
}
