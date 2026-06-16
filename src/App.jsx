import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import SolutionsPage from './pages/Solutions';
import IndustriesPage from './pages/Industries';
import Contact from './pages/Contact';
import Customers from './pages/Customers';
import Trainings from './pages/Trainings';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  // Simple state-based router for a seamless corporate single-page application
  const renderPage = () => {
    switch (currentTab) {
      case 'home':
        return <Home setCurrentTab={setCurrentTab} />;
      case 'about':
        return <About />;
      case 'services':
      case 'web-app-dev':
      case 'erp-crm':
      case 'mobile-app-dev':
      case 'it-bpo':
      case 'digital-marketing':
      case 'id-card-printing':
        return <ServicesPage setCurrentTab={setCurrentTab} initialTab={currentTab} />;
      case 'trainings':
        return <Trainings />;
      case 'solutions':
        return <SolutionsPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'customers':
        return <Customers />;
      case 'contact':
        return <Contact />;
        
      default:
        return <Home setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Global Navigation Header */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
      />
      
      {/* Main Corporate Pages Content */}
      <main className="main-content-wrapper">
        {renderPage()}
      </main>
      
      {/* Global Corporate Footer */}
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default App;
