import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Values } from './components/Values';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { logger } from './utils/logger';
import { cookies } from './utils/cookies';

function App() {
  useEffect(() => {
    logger.info('Application started');

    if (!cookies.has('visited')) {
      cookies.set('visited', 'true', { days: 30 });
      logger.info('First time visitor');
    } else {
      logger.info('Returning visitor');
    }

    const sessionStart = Date.now();

    return () => {
      const sessionDuration = Date.now() - sessionStart;
      logger.info('Session ended', { duration: sessionDuration });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Values />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
