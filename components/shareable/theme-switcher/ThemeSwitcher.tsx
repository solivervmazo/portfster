'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';

function ThemeSwitcher({ onToggle = () => {} }: { onToggle?: () => void }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [darkTheme, setDarkTheme] = useState<Boolean>(
    theme === 'dark' ? true : false,
  );

  const toggleDarkMode = () => {
    setTheme(darkTheme ? 'light' : 'dark');
    setDarkTheme((theme) => !theme);
    onToggle();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <label className='toggle-switch relative inline-block w-12 h-8'>
      <input
        type='checkbox'
        checked={mounted && theme === 'dark'}
        onChange={toggleDarkMode}
        className='opacity-0 w-0 h-0 absolute'
      />
      <div
        className={`${
          mounted && theme === 'dark' ? 'gradient_sun' : 'gradient_moon'
        } slider relative cursor-pointer w-full h-full rounded-full  transition duration-300 ease-in-out`}
      >
        <div
          className={`${
            mounted && theme === 'dark' ? 'gradient_sun' : 'gradient_moon'
          } absolute flex justify-center items-center rounded-full h-8 w-8 ring-1 dark:ring-yellow-100 ring-slate-600 overflow-hidden filter brightness-110 transition-transform transform ${
            mounted && theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
          }`}
        >
          <FontAwesomeIcon
            icon={mounted && theme === 'dark' ? faSun : faMoon}
            className='text-white'
            size='1x'
          />
        </div>
      </div>
    </label>
  );
}

export default ThemeSwitcher;
