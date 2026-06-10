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

import { useState } from "react";


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

    /*
    |--------------------------------------------------------------------------
    | Form State
    |--------------------------------------------------------------------------
    */
    const [title, setTitle] =
    useState("");

    const [brief, setBrief] =
    useState("");

    const [content, setContent] =
    useState("");

    const [category, setCategory] =
    useState("GENERAL");

    const [priority, setPriority] =
    useState("NORMAL");

    const [status, setStatus] =
    useState("PUBLISHED");

    const [saving, setSaving] =
    useState(false);

  const handleCreatePost =
    async () => {

      try {

      setSaving(true);

      await createPost({

        title,

        brief,

        content,

        category,

        priority,

        authorId:
          user?.uid,

        authorName:
          profile?.fullName,

        status,

      });

      alert(
        "Announcement Published Successfully"
      );

      /*
      --------------------------------------------------------------
      | Clear Form
      --------------------------------------------------------------
      */
      setTitle("");
      setBrief("");
      setContent("");

    } catch (error) {

      console.error(error);

    } finally {

      setSaving(false);

    }


    };

    return (
        <div className="p-10 max-w-3xl">

            <h1 className="text-3xl font-bold mb-6">
                Create Announcement
            </h1>

        {/* Announcement Status */}
        <div className="mb-4">
            {/* Label for Announcemnt Title */}
            <label
                className="
                    block
                    font-medium
                    mb-2
                "
            >
                Announcement Title
            </label>

            {/* Title */}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) =>
                setTitle(e.target.value)
                }
                className="
                w-full
                border
                p-3
                rounded
                mb-4
                "
            />
        </div>
        

        {/* Announcement Status */}
        <div className="mb-4">
            {/* Label for Brief Summary */}
            <label
                className="
                    block
                    font-medium
                    mb-2
                "
            >
                Brief Summary
            </label>

            {/* Brief */}
            <textarea
                placeholder="Brief Summary"
                value={brief}
                onChange={(e) =>
                setBrief(e.target.value)
                }
                className="
                w-full
                border
                p-3
                rounded
                mb-4
                "
            />
        </div>

        {/* Announcement Status */}
        <div className="mb-4">
            {/* Label for Announcement Details */}
            <label
                className="
                    block
                    font-medium
                    mb-2
                "
            >
                Announcement Details
            </label>

            {/* Content */}
            <textarea
                placeholder="Full Content"
                value={content}
                onChange={(e) =>
                setContent(e.target.value)
                }
                rows={4}
                className="
                w-full
                border
                p-3
                rounded
                mb-4
                "
            />
        </div>

        {/* Announcement Status */}
        <div className="mb-4">
            {/* Label for Category */}
            <label
                className="
                    block
                    font-medium
                    mb-2
                "
            >
                Category
            </label>

            {/* Category */}
            <select
                value={category}
                onChange={(e) =>
                setCategory(e.target.value)
                }
                className="
                w-full
                border
                p-3
                rounded
                mb-4
                "
            >
                <option value="GENERAL">
                General
                </option>

                <option value="MEETING">
                Meeting
                </option>

                <option value="TRAINING">
                Training
                </option>

                <option value="EVENT">
                Event
                </option>

                <option value="NOTICE">
                Notice
                </option>

            </select>
        </div>

        
        {/* Announcement Status */}
        <div className="mb-4">
             {/* Label for Announcement Priority */}
            <label
                className="
                    block
                    font-medium
                    mb-2
                "
            >
                Announcement Priority
            </label>

            {/* Priority */}
            <select
                value={priority}
                onChange={(e) =>
                setPriority(e.target.value)
                }
                className="
                w-full
                border
                p-3
                rounded
                mb-4
                "
            >
                <option value="NORMAL">
                Normal
                </option>

                <option value="IMPORTANT">
                Important
                </option>

                <option value="URGENT">
                Urgent
                </option>

            </select>
        </div>

            
        {/* Announcement Status */}
        <div className="mb-4">
            {/* Label for Announcement Status */}
            <label
                className="
                    block
                    font-medium
                    mb-2
                "
            >
                Announcement Status
            </label>

            {/* Status */}
            <select
                value={status}
                onChange={(e) =>
                setStatus(e.target.value)
                }
                className="
                w-full
                border
                p-3
                rounded
                mb-6
                "
            >
                <option value="PUBLISHED">
                Published
                </option>

                <option value="DRAFT">
                Draft
                </option>
            </select>
        </div>

            <button
                onClick={
                handleCreatePost
                }
                disabled={saving}
                className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded
                "
            >
                {saving
                ? "Saving..."
                : "Publish Announcement"}
            </button>

            </div>
    );
}