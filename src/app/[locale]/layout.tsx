import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

// * providers
import MUIProvider from '@/providers/MUI';
import { NextIntlClientProvider } from 'next-intl';

// * utils
import { NextProps } from '@/lib/types';
import { isRTL, isLocale } from '@/lib/utils';

import '../globals.css';

const RootLayout = async ({ params, children }: NextProps<{ locale: string }>) => {
  const { locale } = await params;
  if (!isLocale(locale)) return notFound();

  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  const _cookies = await cookies();
  const mode = _cookies.get('mode')?.value;

  return (
    <html dir={dir} lang={locale} className={mode ?? ''} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <MUIProvider dir={dir}>{children}</MUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
