import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import TechStack from './components/TechStack';
import SelectedWork from './components/SelectedWork';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F1EB' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <TechStack />
      <SelectedWork />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
