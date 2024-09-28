// app/components/ThemeToggle.tsx
"use client"; // Required for client-side rendering

import React, { useEffect } from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.toggle('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Set to system preference
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, []);

  return (
    <button onClick={toggleTheme} className="p-2">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
