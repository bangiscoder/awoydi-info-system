"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  getPosts,
} from "@/services/postService";

import AnnouncementRow
  from "@/components/admin/AnnouncementRow";
/*
|--------------------------------------------------------------------------
| Announcement Management List
|--------------------------------------------------------------------------
*/

export default function AnnouncementList() {

  const [
    posts,
    setPosts,
  ] = useState<any[]>([]);

  useEffect(() => {

    const loadPosts =
      async () => {

        const data =
          await getPosts();

        setPosts(data);

      };

    loadPosts();

  }, []);

  return (

    <section>

      <div
        className="
          flex
          justify-between
          items-center
          mb-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          All Announcements
        </h2>

        <Link
          href="/admin/posts/create"
          className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded
          "
        >
          + New Announcement
        </Link>

      </div>

      <div className="space-y-4">

        {posts.map(
          (
            post,
            index
          ) => (

            <div
              key={post.id}
              className="
                bg-white
                rounded-xl
                shadow
                p-5
              "
            >

              {/* Serial Number */}
              <p
                className="
                  text-sm
                  text-gray-500
                  mb-2
                "
              >
                SN {index + 1}
              </p>

              {/* Title */}
              <h3
                className="
                  text-xl
                  font-bold
                  mb-2
                "
              >
                {post.title}
              </h3>

              {/* Brief */}
              <p
                className="
                  text-gray-600
                  mb-4
                "
              >
                {post.brief}
              </p>

              {/* Metrics */}
              <div
                className="
                  flex
                  gap-4
                  mb-4
                "
              >

                <span>
                  👁 {post.readCount ?? 0}
                </span>

                <span>
                  ✓ {post.acknowledgementCount ?? 0}
                </span>

                <span>
                  💬 {post.commentCount ?? 0}
                </span>

              </div>

              {/* Actions */}
              <div
                className="
                  flex
                  gap-3
                "
              >

                <button
                  className="
                    bg-yellow-500
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  Edit
                </button>

                <button
                  className="
                    bg-red-600
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  Delete
                </button>

                <Link
                  href={`/admin/posts/${post.id}`}
                  className="
                    bg-blue-600
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  More
                </Link>

              </div>

            </div>

          )
        )}

      </div>

    </section>

  );

}