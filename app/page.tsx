import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Vet Companion - Your Pet Care Management System',
  description: 'An all-in-one PWA for veterinary care and pet management.',
};

export default async function HomePage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    redirect('/patients');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="max-w-2xl mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Welcome to Vet Companion</h1>
        <p className="text-xl text-gray-700 mb-8">Your all-in-one PWA for veterinary care and pet management.</p>
        <div className="space-x-4">
          <a
            href="/auth/login"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Sign In
          </a>
          <a
            href="/auth/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-md"
          >
            Sign Up
          </a>
        </div>
      </section>
    </main>
  );
} 