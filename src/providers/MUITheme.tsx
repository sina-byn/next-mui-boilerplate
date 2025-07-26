'use client';

import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

const rtlCache = createCache({
  key: 'rtl-cache',
  stylisPlugins: [prefixer, rtlPlugin],
});

const noCache = createCache({ key: 'no-cache' });

// * types
type MUIThemeProviderProps = { dir: 'rtl' | 'ltr'; children: React.ReactNode };

const MUIThemeProvider = ({ dir, children }: MUIThemeProviderProps) => {
  const theme = useMemo(
    () => createTheme({ colorSchemes: { dark: true } }),
    []
  );

  return (
    <ThemeProvider disableTransitionOnChange theme={theme}>
      <CacheProvider value={dir === 'rtl' ? rtlCache : noCache}>
        {children}
      </CacheProvider>
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
