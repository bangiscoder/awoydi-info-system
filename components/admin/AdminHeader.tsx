"use client";

import Link from "next/link";

/*
|--------------------------------------------------------------------------
| Admin Header
|--------------------------------------------------------------------------
*/

export default function AdminHeader() {
  return (
    <header
      className="
        bg-white
        border-b
        shadow-sm
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >
        {/* System Title */}
        <div>
          <h1
            className="
              text-xl
              font-bold
            "
          >
            AWOYDI Information System
          </h1>
        </div>

        {/* Navigation */}
        <nav
          className="
            flex
            gap-6
            items-center
          "
        >
          <Link href="/admin/dashboard">
            Dashboard
          </Link>

          <Link href="/admin/posts/create">
            New Announcement
          </Link>

          <Link href="/profile">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}