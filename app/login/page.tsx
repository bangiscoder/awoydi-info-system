"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { getUserProfile }
  from "@/services/userService";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      /*
|--------------------------------------------------------------------------
| Authenticate User
|--------------------------------------------------------------------------
*/
const credential =
  await login(
    email,
    password
  );

/*
|--------------------------------------------------------------------------
| Load Firestore Profile
|--------------------------------------------------------------------------
*/
const profile =
  await getUserProfile(
    credential.user.uid
  );
    console.log(
    "Profile:",
    profile
  );

      /*
      |--------------------------------------------------------------------------
      | Redirect Based On Role
      |--------------------------------------------------------------------------
      */
      if (
        profile?.role === "ADMIN"
      ) {

        router.push(
          "/admin/dashboard"
        );

      } else {

        router.push(
          "/dashboard"
        );

      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-lg border p-6"
      >
        <h1 className="text-2xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>
      </form>
    </div>
  );
}