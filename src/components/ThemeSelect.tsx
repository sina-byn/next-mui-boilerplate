'use client';

import { useEffect } from 'react';

import { setCookie } from 'cookies-next/client';

import { Button, ButtonGroup, useColorScheme } from '@mui/material';

const ThemeSelect = () => {
  const { mode, setMode, systemMode } = useColorScheme();

  useEffect(() => {
    if (!mode) return;

    const resolvedMode = mode === 'system' ? systemMode! : mode;
    const isDark = resolvedMode === 'dark';

    document.documentElement.classList.toggle('dark', isDark);
    setCookie('mode', resolvedMode);
  }, [mode]);

  // if (!mode) return null;

  return (
    <div className='flex items-center gap-x-10'>
      <ButtonGroup>
        <Button type='button' onClick={setMode.bind(null, 'light')}>
          light
        </Button>

        <Button type='button' onClick={setMode.bind(null, 'dark')}>
          dark
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ThemeSelect;
