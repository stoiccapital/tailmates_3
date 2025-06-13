'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SidebarNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      className={`
        fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out z-50
        md:w-64 md:translate-x-0
        ${isExpanded ? 'w-64 translate-x-0' : 'w-12 -translate-x-0'}
        hover:w-64 hover:translate-x-0
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full">
        {/* Hamburger Icon / Logo */}
        <div className="p-3 border-b">
          <Link href="/" className="flex items-center justify-center md:justify-start">
            {!isExpanded && (
              <svg 
                className="w-6 h-6 text-blue-600 md:hidden" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
            <span className="text-2xl font-bold text-blue-600">VC</span>
            <span className={`text-xl font-semibold ml-3 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              Vet Companion
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/patients"
                className={`
                  flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors
                  ${isExpanded ? 'justify-start' : 'justify-center md:justify-start'}
                `}
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                  Patients
                </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/appointments"
                className={`
                  flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors
                  ${isExpanded ? 'justify-start' : 'justify-center md:justify-start'}
                `}
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                  Appointments
                </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/profile"
                className={`
                  flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors
                  ${isExpanded ? 'justify-start' : 'justify-center md:justify-start'}
                `}
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                  Profile
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
} 