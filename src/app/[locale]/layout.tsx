import { notFound } from 'next/navigation';

// * providers
import MUIProvider from '@/providers/MUI';

import { NextIntlClientProvider } from 'next-intl';

import '../globals.css';
import { isLocale, isRTL } from '@/lib/utils';
import { cookies } from 'next/headers';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return notFound();

  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  const _cookies = await cookies();
  const mode = _cookies.get('mode')?.value;

  return (
    <html
      dir={dir}
      lang={locale}
      className={mode ?? ''}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <MUIProvider dir={dir}>{children}</MUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
