'use client'
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

//This file contains the Theme-switcher component and logic to toggle theme.

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);
  if (!mounted) return null

  return (
    <Switch
      isSelected={theme === 'dark'} onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="md"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
    </Switch>
  );
}

export default ThemeSwitcher;