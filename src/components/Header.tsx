import React from 'react';
import './Header.css';

// Navigation item interface
interface NavItem {
  href: string;
  label: string;
}

// Header component props
interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "React Demo" }) => {
  const navItems: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#demo", label: "Demo" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">{title}</div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;