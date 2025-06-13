'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthStateHandler() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session);
      
      if (event === 'SIGNED_OUT') {
        console.log('User signed out, redirecting to login...');
        router.refresh(); // Force a refresh of the current route
        router.push('/auth/login');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase.auth]);

  return null;
} 