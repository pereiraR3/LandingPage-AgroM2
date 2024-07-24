import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import IntroSection from './components/IntroSection/IntroSection';
import IntermedSection from './components/IntermedSection/IntermedSection';
import Footer from './components/Footer/Footer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <IntroSection />
    <IntermedSection />
    <Footer />
  </React.StrictMode>
);
