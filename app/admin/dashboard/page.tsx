"use client";

import ProtectedRoute
  from "@/components/auth/ProtectedRoute";

import RoleGuard
  from "@/components/auth/RoleGuard";

import { useAuth }
  from "@/context/AuthContext";

export default function AdminDashboard() {

  const { profile } = useAuth();

  return ( 
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <p>
        Welcome Administrator
      </p>

      <p>
        Welcome,
        {" "}
        {profile?.fullName}
      </p>

      <p>
        Role:
        {" "}
        {profile?.role}
      </p>

    </div>

  );
}