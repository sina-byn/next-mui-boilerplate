import 'server-only';

import { routing } from '@/i18n/routing';

import * as rtlDetect from 'rtl-detect';
import { hasLocale } from 'next-intl';

export const isRTL = rtlDetect.isRtlLang;

export const isLocale = (candidate: string) => {
  return hasLocale(routing.locales, candidate);
};
