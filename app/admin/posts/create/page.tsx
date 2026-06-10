"use client";

import {
  createPost,
} from "@/services/postService";

import ProtectedRoute
  from "@/components/auth/ProtectedRoute";

import RoleGuard
  from "@/components/auth/RoleGuard";

import { useAuth }
  from "@/context/AuthContext";

import { profile } from "console";

export default function CreatePostPage() {

     /*
    |--------------------------------------------------------------------------
    | Logged In User
    |--------------------------------------------------------------------------
    */
    const {
        user,
        profile,
    } = useAuth();

  const handleCreatePost =
    async () => {

      try {

        await createPost({

          title:
            "Test Announcement",

          brief:
            "This is a test announcement.",

          content:
            "Full announcement content.",

          category:
            "GENERAL",

          priority:
            "NORMAL",

          authorId:
            user?.uid,

            authorName:
            profile?.fullName,

          status:
            "PUBLISHED",
        });

        alert(
          "Post Created Successfully"
        );

      } catch (error) {

        console.error(
          error
        );

      }

    };

    return (

    <ProtectedRoute>

        <RoleGuard
        allowedRole="ADMIN"
        >

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-5">
            Create Post Test
            </h1>

            <button
            onClick={
                handleCreatePost
            }
            className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded
            "
            >
            Create Test Post
            </button>

        </div>

        </RoleGuard>

    </ProtectedRoute>

    );
}