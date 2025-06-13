"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      console.log("Starting logout process...");
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error("Logout error:", error);
        throw error;
      }
      
      console.log("Successfully signed out");
      router.refresh(); // Force a refresh of the current route
      router.push("/auth/login");
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      aria-label="Log out"
      title="Log out"
      className="fixed top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 z-50"
    >
      <LogOut className="w-5 h-5" />
      <span className="font-medium">Log out</span>
    </button>
  );
} 