"use client";

// Import our custom authentication hook
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  // Get the currently logged-in user and loading state
  const { user, loading } = useAuth();

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
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        User Dashboard
      </h1>

      {/* Logged-in user's email */}
      <p>
        <strong>Email:</strong>{" "}
        {user?.email}
      </p>

      {/* Firebase Authentication UID */}
      <p>
        <strong>UID:</strong>{" "}
        {user?.uid}
      </p>
    </div>
  );
}