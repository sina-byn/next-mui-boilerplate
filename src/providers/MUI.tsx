import MUIThemeProvider from './MUITheme';

import { InitColorSchemeScript } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

// * types
type MUIProviderProps = { dir: 'rtl' | 'ltr'; children: React.ReactNode };

const MUIProvider = ({ dir, children }: MUIProviderProps) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <InitColorSchemeScript attribute='class' defaultMode='system' />

      <MUIThemeProvider dir={dir}>{children}</MUIThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MUIProvider;
