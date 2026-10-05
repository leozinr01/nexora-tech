import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Cta } from '../sections/Cta';
import { Differentials } from '../sections/Differentials';
import { Founder } from '../sections/Founder';
import { Hero } from '../sections/Hero';
import { Portfolio } from '../sections/Portfolio';
import { Process } from '../sections/Process';
import { Services } from '../sections/Services';

export function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <About />
        <Founder />
        <Process />
        <Portfolio />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
