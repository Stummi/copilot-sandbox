import React from 'react';
import './WelcomeSection.css';

// Props interface for WelcomeSection
interface WelcomeSectionProps {
  onWelcomeClick: () => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onWelcomeClick }) => {
  return (
    <section id="home" className="hero">
      <h1>Hello React World!</h1>
      <p>Welcome to this React TypeScript demonstration showcasing modern React development practices.</p>
      <button 
        className="btn-primary" 
        onClick={onWelcomeClick}
        type="button"
      >
        Click Me!
      </button>
    </section>
  );
};

export default WelcomeSection;