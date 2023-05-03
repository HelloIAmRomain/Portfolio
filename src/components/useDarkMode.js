import { useEffect, useState } from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const lightColors = {
      '--bg-color': '#ffffff',
      '--primary-color': '#000000',
      '--secondary-color': '#333333',
      '--accent-color': '#cd5ff8',
      '--link-color': 'blue',
      '--text-color': 'orange',
      '--section-background-color': 'linear-gradient(to bottom left, rgba(10, 168, 233, 0.582), rgba(12, 8, 24, 0.904))',
      '--image-gradient': 'linear-gradient(to bottom left, rgba(210, 100, 250, 0.678), rgba(12, 60, 220, 0.863))',
      '--imp-text-color': 'var(--accent-color)',
      '--background-gradient': 'linear-gradient(to left, rgb(200, 210, 230), rgb(210, 200, 230)',
    };
    const darkColors = {
      '--bg-color': '#0c0513',
      '--primary-color': '#ffffff',
      '--secondary-color': '#bbbbbb',
      '--accent-color': 'var(--light-accent-color)',
      '--link-color': 'grey',
      '--text-color': 'brown',
      '--section-background-color': 'linear-gradient(to bottom left, rgba(50, 16, 160, 0.582), rgba(10, 58, 124, 0.904))',
      '--image-gradient': 'linear-gradient(to bottom left, rgba(100, 20, 16, 0.678), rgba(12, 10, 160, 0.863))',
      '--imp-text-color': 'var(--accent-color)',
      '--background-gradient': 'linear-gradient(to left, rgb(27, 20, 41), rgb(20, 35, 110)',
    };

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
