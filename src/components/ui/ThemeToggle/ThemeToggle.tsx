import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../../../contexts/ThemeContext';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Button
      variant="outline-secondary"
      size="sm"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      <div className="theme-toggle-icon">
        {isDark ? (
          <i className="bi bi-sun-fill"></i>
        ) : (
          <i className="bi bi-moon-fill"></i>
        )}
      </div>
    </Button>
  );
};

export default ThemeToggle;
