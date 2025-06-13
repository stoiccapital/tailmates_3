"use client";

import { useSession } from "@supabase/auth-helpers-react";
import SidebarNav from "./SidebarNav";
import Footer from "./Footer";
import LogoutButton from "./LogoutButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("AuthLayout session state:", session);
    if (session === null) {
      console.log("No session, redirecting to login");
      router.replace('/auth/login');
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

  console.log("AuthLayout: Rendering with session");

  return (
    <div className="min-h-screen flex">
      <SidebarNav />
      <div className="flex-1 md:ml-64">
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
        <div className="fixed bottom-4 left-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
} 