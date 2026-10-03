import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { SupportedLocale } from '@eart/locales';
import { DEFAULT_LOCALE, LOCALE_COOKIE } from '@/i18n/config';

const SUPPORTED_LOCALES: SupportedLocale[] = ['es', 'en', 'nl', 'no', 'fi'];

function isValidLocale(value: string): value is SupportedLocale {
  return (SUPPORTED_LOCALES as string[]).includes(value);
}

/**
 * Spanish by default; the visitor's explicit choice (cookie set by the language
 * selector) wins. Browser/IP auto-detection is intentionally off.
 */
export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = cookieLocale && isValidLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  // Forward on the *request* so server components see it on the first visit.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|api/).*)'],
};
