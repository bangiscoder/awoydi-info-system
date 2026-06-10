"use client";

/*
|--------------------------------------------------------------------------
| Route Protection
|--------------------------------------------------------------------------
*/
import ProtectedRoute
  from "@/components/auth/ProtectedRoute";

import RoleGuard
  from "@/components/auth/RoleGuard";

/*
|--------------------------------------------------------------------------
| Admin Layout
|--------------------------------------------------------------------------
| Every page inside:
|
| /admin/*
|
| will automatically be protected.
|--------------------------------------------------------------------------
*/

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <ProtectedRoute>

      <RoleGuard
        allowedRole="ADMIN"
      >

        {children}

      </RoleGuard>

    </ProtectedRoute>

  );

}