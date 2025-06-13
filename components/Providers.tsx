"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ReactNode, useEffect } from "react";

export default function Providers({
  children,
  session,
}: {
  children: ReactNode;
  session: any;
}) {
  const supabase = createClientComponentClient();

  useEffect(() => {
    console.log("Providers mounted with session:", session);
  }, [session]);

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={session}
    >
      {children}
    </SessionContextProvider>
  );
} 