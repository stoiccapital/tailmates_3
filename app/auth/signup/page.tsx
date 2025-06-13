import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SignupForm from './SignupForm';

export const dynamic = 'force-dynamic';

export default async function SignupPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    redirect('/patients');
  }

  return <SignupForm />;
} 