'use client';

import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CacheProvider } from '@emotion/react';
import createCache, { type StylisPlugin } from '@emotion/cache';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

const layerPlugin = (): StylisPlugin => {
  return node => {
    if (node.root) return;

    const child = { ...node, parent: node, root: node };

    Object.assign(node, {
      children: [child],
      length: 6,
      parent: null,
      props: ['mui'],
      return: '',
      root: null,
      type: '@layer',
      value: `@layer ${'mui'}`,
    });
  };
};

const rtlCache = createCache({
  key: 'rtl-cache',
  stylisPlugins: [prefixer, rtlPlugin, layerPlugin()],
});

// * types
type MUIThemeProviderProps = { dir: 'rtl' | 'ltr'; children: React.ReactNode };

const MUIThemeProvider = ({ dir, children }: MUIThemeProviderProps) => {
  const theme = useMemo(() => createTheme({ colorSchemes: { dark: true } }), []);

  return (
    <ThemeProvider disableTransitionOnChange theme={theme}>
      {dir === 'rtl' ? <CacheProvider value={rtlCache}>{children}</CacheProvider> : children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
