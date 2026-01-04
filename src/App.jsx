import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <Header />
      <main className="space-y-8">
        <Hero />
        <Services />
        <FAQ />
        <Process />
        <About />
        <Testimonials />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
