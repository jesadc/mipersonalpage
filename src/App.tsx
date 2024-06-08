import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Quotations from './components/Quotations';
import ScrollToTopButton from './components/ScrollToTopButton';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-16 pb-16"> 
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Quotations />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
