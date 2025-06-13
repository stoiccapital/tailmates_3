'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@supabase/auth-helpers-react';
import Loading from './Loading';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (session === null) {
      console.log('No session, redirecting to login');
      router.push('/auth/login');
    } else if (session !== undefined) {
      setIsLoading(false);
    }
  }, [session, router]);

  if (isLoading) {
    return <Loading />;
  }

  if (!session) {
    return null;
  }

  return <>{children}</>;
} 