import { useEffect, useState } from 'react';

const lightColors = {
  '--bg-color': '#ffffff',
  '--primary-color': '#421166',
  '--secondary-color': '#333333',
  '--lighter-color': '#2d1950',
  '--accent-color': '#cd5ff8',
  '--link-color': 'blue',
  '--text-color': 'orange',
  '--image-gradient': 'linear-gradient(to bottom left, rgba(210, 100, 250, 0.678), rgba(12, 60, 220, 0.863))',
  '--imp-text-color': 'var(--accent-color)',
  '--background-gradient': 'linear-gradient(to left, rgb(200, 210, 230), rgb(210, 200, 230)',
  '--section-background-color': 'linear-gradient(to bottom left, rgba(150, 168, 233, 0.582), rgba(200, 180, 250, 0.904))',
  '--border-color': '#cccccc',
  '--button-bg-color': '#f0f0f0',
  '--button-hover-bg-color': '#e0e0e0',
  '--scrollbar-color': 'RGBA(255,180,180, 0.9)',
  '--scrollbar-hover-color': 'RGBA(210,150,150, 0.9)',
  '--shadow-color': 'rgba(80, 60, 100, 0.2)',
  '--navbar-color': '#1b1a2ea9',
  '--loading-color': '#37306B',
};

const darkColors = {
  '--bg-color': '#FFFFFF',
  '--primary-color': '#ffffff',
  '--secondary-color': '#dddddd',
  '--lighter-color': '#2d1950',
  '--accent-color': 'Pink',
  '--link-color': 'grey',
  '--text-color': 'brown',
  '--image-gradient': 'linear-gradient(to bottom left, rgba(100, 20, 16, 0.678), rgba(12, 10, 160, 0.863))',
  '--imp-text-color': 'var(--accent-color)',
  '--background-gradient': 'linear-gradient(to left, rgb(27, 20, 41), rgb(20, 35, 110)',
  '--section-background-color': 'linear-gradient(to bottom left, rgba(50, 16, 160, 0.582), rgba(10, 58, 124, 0.904))',
  '--border-color': '#444444',
  '--button-bg-color': '#2d2d2d',
  '--button-hover-bg-color': '#3d3d3d',
  '--scrollbar-color': 'RGBA(140,70,130,0.9)',
  '--scrollbar-hover-color': 'RGBA(170,80,160, 0.9)',
  '--shadow-color': 'rgba(10, 5, 30, 0.2)',
  '--navbar-color': '#1b1a2ea9',
  '--loading-color': '#37306B',
};





function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      Object.entries(darkColors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      Object.entries(lightColors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
