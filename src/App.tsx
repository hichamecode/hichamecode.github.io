import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/globals/global.scss';

// Import du contexte de thème
import { ThemeProvider } from './contexts/ThemeContext';

// Import des composants de layout
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

// Import des sections
import HeroSection from './components/sections/HeroSection/HeroSection';
import AboutSection from './components/sections/AboutSection/AboutSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';
import PortfolioSection from './components/sections/PortfolioSection/PortfolioSection';
import ServicesSection from './components/sections/ServicesSection/ServicesSection';
import ContactSection from './components/sections/ContactSection/ContactSection';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
