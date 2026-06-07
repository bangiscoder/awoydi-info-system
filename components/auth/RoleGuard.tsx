"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

/*
|--------------------------------------------------------------------------
| Role Guard
|--------------------------------------------------------------------------
| Restricts access based on user role.
|--------------------------------------------------------------------------
*/

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRole: "ADMIN" | "USER";
}

export default function RoleGuard({
  children,
  allowedRole,
}: RoleGuardProps) {

  const router = useRouter();

  const {
    loading,
    profile,
  } = useAuth();

  useEffect(() => {

    if (loading) return;

      /*
  |--------------------------------------------------------------------------
  | Redirect According To User Role
  |--------------------------------------------------------------------------
  */
  if (
    profile &&
    profile.role !== allowedRole
  ) {

    if (
      profile.role === "ADMIN"
    ) {

      router.push(
        "/admin/dashboard"
      );

    } else {

      router.push(
        "/dashboard"
      );

    }

  }

  }, [
    profile,
    loading,
    allowedRole,
    router,
  ]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (
    profile &&
    profile.role !== allowedRole
  ) {
    return null;
  }

  return <>{children}</>;
}