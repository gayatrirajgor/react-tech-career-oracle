import React, { useEffect, useState } from 'react';
import '../styles/themeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('oracle-theme', theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem('oracle-theme');
    if (saved) {
      setTheme(saved);
    }
  }, []);

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <span className="slider"></span>
      </label>
      <span className="mode-label">{theme === 'light' ? 'Light' : 'Dark'} Mode</span>
    </div>
  );
};

export default ThemeToggle;