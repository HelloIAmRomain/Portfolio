import { useEffect, useState } from 'react';

const lightColors = {
  '--bg-color': '#FFFFFF',
  '--primary-color': '#5533AA',
  '--secondary-color': '#2D1950',
  '--lighter-color': '#3D93C2',
  '--accent-color': 'rgba(240, 98, 146, 0.9)',
  '--link-color': '#7555CC',
  '--text-color': '#444444',
  '--imp-text-color': '#984D4F',
  '--image-gradient': 'linear-gradient(to right, #3D93C2, #0C3CDC)',
  '--background-gradient': 'linear-gradient(to bottom left, #E0D5F0, #C0D0E0)',
  '--section-background-color': 'linear-gradient(to bottom left, #3D93C2, #3D8CB1, #3A80A1, #367492)',
  '--border-color': '#CCCCCC',
  '--button-bg-color': '#a77ac8',
  '--button-hover-bg-color': '#8C7BBF',
  '--scrollbar-color': 'RGBA(255,180,180, 0.9)',
  '--scrollbar-hover-color': 'RGBA(210,150,150, 0.9)',
  '--shadow-color': 'rgba(80, 60, 100, 0.2)',
  '--navbar-color': 'rgba(27, 26, 46, 0.8)',
  '--loading-color': '#6F4BD8',
  '--gold-color' : 'gold',
};



const darkColors = {
  '--bg-color': '#442255',
  '--primary-color': '#ffffff',
  '--secondary-color': '#dddddd',
  '--lighter-color': '#2d1950',
  '--accent-color': '#F06292',
  '--link-color': '#A8A8A8',
  '--text-color': '#F0F0F0',
  '--image-gradient': 'linear-gradient(to bottom left, rgba(100, 20, 16, 0.678), rgba(12, 10, 160, 0.863))',
  '--imp-text-color': 'var(--accent-color)',
  '--background-gradient': 'linear-gradient(to left, rgb(27, 20, 41), rgb(20, 35, 110)',
  '--section-background-color': 'linear-gradient(to bottom left, rgba(50, 16, 160, 0.582), rgba(10, 58, 124, 0.904))',
  '--border-color': '#444444',
  '--button-bg-color': '#523c71',
  '--button-hover-bg-color': '#58297E',
  '--scrollbar-color': 'RGBA(140,70,130,0.9)',
  '--scrollbar-hover-color': 'RGBA(170,80,160, 0.9)',
  '--shadow-color': 'rgba(10, 5, 30, 0.2)',
  '--navbar-color': '#121325bb',
  '--loading-color': '#37306B',
  '--gold-color' : 'gold',
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
