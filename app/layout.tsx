import './globals.css';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Providers from '../components/Providers';
import AuthLayout from '../components/AuthLayout';
import Loading from '../components/Loading';
import { Metadata, Viewport } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    template: '%s | Vet Companion',
    default: 'Vet Companion - Your Pet Care Management System',
  },
  description: 'A comprehensive PWA for veterinarians and pet owners to manage veterinary care and pet records.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Providers session={session}>
          <Suspense fallback={<Loading />}>
            {session ? (
              <AuthLayout>{children}</AuthLayout>
            ) : (
              <main className="flex-1 flex items-center justify-center p-4">
                {children}
              </main>
            )}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
} 