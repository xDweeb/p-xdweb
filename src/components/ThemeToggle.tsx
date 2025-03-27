import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-gray-800 dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;