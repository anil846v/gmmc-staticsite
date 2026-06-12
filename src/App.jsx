import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import SolutionsPage from './pages/Solutions';
import IndustriesPage from './pages/Industries';
import ServiceNow from './pages/ServiceNow';
import Bpo from './pages/Bpo';
import Trainings from './pages/Trainings';
import Contact from './pages/Contact';

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
        return <ServicesPage setCurrentTab={setCurrentTab} />;
      case 'solutions':
        return <SolutionsPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'servicenow':
        return <ServiceNow />;
      case 'bpo':
        return <Bpo />;
      case 'trainings':
        return <Trainings />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Global Navigation Header */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
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
