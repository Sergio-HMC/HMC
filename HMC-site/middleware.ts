import { NextRequest, NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
 const headers = new Headers(request.headers);
 headers.set('x-hmc-language', /^\/en(?:\/|$)/.test(request.nextUrl.pathname) ? 'en' : 'es');
 return NextResponse.next({request:{headers}});
}
export const config = {matcher: ['/((?!api|_next|.*\\.).*)']};
