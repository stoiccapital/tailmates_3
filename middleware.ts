import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  console.log('Middleware processing:', req.nextUrl.pathname);
  
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log('Session state in middleware:', session ? 'Authenticated' : 'Not authenticated');

  // If there's no session and the user is trying to access a protected route
  if (!session && !req.nextUrl.pathname.startsWith('/auth') && req.nextUrl.pathname !== '/') {
    console.log('Redirecting to login from:', req.nextUrl.pathname);
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // If there's a session and the user is trying to access auth pages or root
  if (session && (req.nextUrl.pathname.startsWith('/auth') || req.nextUrl.pathname === '/')) {
    console.log('Redirecting to patients from:', req.nextUrl.pathname);
    return NextResponse.redirect(new URL('/patients', req.url));
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 