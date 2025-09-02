import React, { useState } from 'react';
import './ColorChanger.css';

// Color type definition
type Color = string;

// ColorChanger component demonstrating state management and event handling
const ColorChanger: React.FC = () => {
  const colors: Color[] = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
  ];

  const [currentColor, setCurrentColor] = useState<Color>('#667eea');

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div className="color-demo">
      <h3>Color Changer</h3>
      <div 
        className="color-display"
        style={{ backgroundColor: currentColor }}
      ></div>
      <button 
        className="btn-secondary" 
        onClick={changeColor}
        type="button"
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorChanger;