"use client";

import AdminHeader
  from "@/components/admin/AdminHeader";

import HeroBanner
  from "@/components/admin/HeroBanner";

import StatsCards
  from "@/components/admin/StatsCards";

import RecentAnnouncements
  from "@/components/admin/RecentAnnouncements";

import AnnouncementList
  from "@/components/admin/AnnouncementList";

import AnnouncementRow
  from "@/components/admin/AnnouncementRow";

import { useState } from "react";

import AnnouncementModal
  from "@/components/admin/modals/AnnouncementModal";

const RecentAnnouncementsComponent = RecentAnnouncements as any;

/*
|--------------------------------------------------------------------------
| Admin Dashboard
|--------------------------------------------------------------------------
*/

export default function AdminDashboard() {

  const [selectedPost, setSelectedPost] =
    useState<any>(null);

  const [showModal, setShowModal] =
    useState(false);

  const handleViewPost =
    (post: any) => {

      setSelectedPost(post);

      setShowModal(true);

    };

  return (
    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >

      <AdminHeader />

      <main
        className="
          max-w-7xl
          mx-auto
          px-6
          py-8
        "
      >

        <HeroBanner />

        <StatsCards />

        <RecentAnnouncements
          onViewPost={handleViewPost}
        />

        <AnnouncementList
          onViewPost={handleViewPost}
        />

        <AnnouncementModal
          post={selectedPost}
          isOpen={showModal}
          onClose={() =>
            setShowModal(false)
          }
        />

      </main>

    </div>
  );
}