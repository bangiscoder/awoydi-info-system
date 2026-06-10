"use client";

import { useAuth } from "@/context/AuthContext";

/*
|--------------------------------------------------------------------------
| Hero Banner
|--------------------------------------------------------------------------
*/

export default function HeroBanner() {

  const { profile } = useAuth();

  return (
    <section
      className="
        bg-blue-600
        text-white
        rounded-xl
        p-8
        mb-8
      "
    >
      <h2
        className="
          text-3xl
          font-bold
          mb-3
        "
      >
        Welcome,
        {" "}
        {profile?.fullName}
      </h2>

      <p
        className="
          text-lg
        "
      >
        Manage announcements,
        monitor engagement
        and communicate
        effectively with staff.
      </p>
    </section>
  );
}