"use client";

// Import our custom authentication hook
import ProtectedRoute
  from "@/components/auth/ProtectedRoute";
import RoleGuard from "@/components/auth/RoleGuard";

import { useAuth }
  from "@/context/AuthContext";

import { logout }
  from "@/lib/auth";

import { useRouter }
  from "next/navigation";

export default function Dashboard() {
  // adding a temporaty logout button for testing purposes
  const router = useRouter();
  // Get the currently logged-in user and loading state
  const { 
    user,
    profile,
    loading
   } = useAuth();

   /*
|--------------------------------------------------------------------------
| Logout Current User
|--------------------------------------------------------------------------
| Signs out the user and redirects to Login page
|--------------------------------------------------------------------------
*/
const handleLogout = async () => {

  await logout();

  router.push("/login");

};

  // Show loading message while Firebase checks authentication state
  if (loading) {
    return (
      <div className="p-10">
        <p>Loading...</p>
      </div>
    );
  }

  // Display dashboard information
  return (
  <ProtectedRoute>
    <RoleGuard allowedRole="USER">
      <div className="p-10">

      <h1 className="text-2xl font-bold mb-4">
        User Dashboard
      </h1>

      <p>
        <strong>Name:</strong>{" "}
        {profile?.fullName}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {user?.email}
      </p>

      <p>
        <strong>Role:</strong>{" "}
        {profile?.role}
      </p>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>

    </div>

    </RoleGuard>
  </ProtectedRoute>
);
}