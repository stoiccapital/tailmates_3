import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Vet Companion',
  description: 'A PWA for veterinarians and pet owners.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          {/* TODO: Add Toasts, AuthProvider, etc. */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 