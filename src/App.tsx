import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import ColorChanger from './components/ColorChanger';
import WelcomeSection from './components/WelcomeSection';

// Type definitions for the app
export interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleWelcomeClick = () => {
    const messages = [
      "Hello there! 👋",
      "Welcome to our React demo! 🎉",
      "Thanks for clicking! ✨",
      "Isn't React fun? 😄",
      "Keep exploring! 🚀"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setWelcomeMessage(randomMessage);
    setShowMessage(true);
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeSection onWelcomeClick={handleWelcomeClick} />
        
        <section className="content-section">
          <h2>About This React App</h2>
          <p>This is a demonstration of a React application built with TypeScript, showcasing basic React concepts.</p>
          
          <div className="feature-grid">
            <div className="feature-card">
              <h3>React Components</h3>
              <p>Modular, reusable UI components with TypeScript interfaces.</p>
            </div>
            <div className="feature-card">
              <h3>State Management</h3>
              <p>Using React hooks (useState) for managing component state.</p>
            </div>
            <div className="feature-card">
              <h3>TypeScript Support</h3>
              <p>Type-safe development with interfaces and strong typing.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Interactive Demo</h2>
          <div className="demo-container">
            <Counter />
            <ColorChanger />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 React TypeScript Demo. Built with React, TypeScript, and npm.</p>
      </footer>

      {/* Message overlay */}
      {showMessage && (
        <div className="message-overlay">
          <div className="message-content">
            {welcomeMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;