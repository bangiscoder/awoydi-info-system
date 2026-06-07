"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";



/*
|--------------------------------------------------------------------------
| Protected Route
|--------------------------------------------------------------------------
| Redirects unauthenticated users to Login page.
|--------------------------------------------------------------------------
*/

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const {
    user,
    loading,
  } = useAuth();

  useEffect(() => {
    // Wait until auth check completes
    if (loading) return;

    // Redirect if not logged in
    if (!user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Show loading state
  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  // Prevent rendering while redirecting
  if (!user) {
    return null;
  }

  return <>{children}</>;
}