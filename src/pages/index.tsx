import CompanyInformation from '../components/CompanyInformation';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompanyInformation />
      </main>
    </>
  );
}
