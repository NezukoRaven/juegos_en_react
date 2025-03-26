import React, { useState } from 'react';
import SpiderBall from './pages/SpiderBall';
import NexusBall from './pages/NexusBall';
import Home from './pages/Home';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  const navigateToSpiderBall = () => setCurrentView('SpiderBall');
  const navigateToNexusBall = () => setCurrentView('NexusBall');
  const navigateToHome = () => setCurrentView('home');

  return (
    <div>
      {currentView === 'home' && (
        <Home 
          onNavigateToSpiderBall={navigateToSpiderBall}
          onNavigateToNexusBall={navigateToNexusBall}
        />
      )}
      {currentView === 'SpiderBall' && (
        <SpiderBall onBack={navigateToHome} />
      )}
      {currentView === 'NexusBall' && (
        <NexusBall onBack={navigateToHome} />
      )}
    </div>
  );
};

export default App;
