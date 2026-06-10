"use client";

import {
  useEffect,
  useState,
} from "react";

import Image
  from "next/image";

import {
  getRecentPosts,
} from "@/services/postService";

/*
|--------------------------------------------------------------------------
| Recent Announcements
|--------------------------------------------------------------------------
*/

interface Props {
  onViewPost: (
    post: any
  ) => void;
} // This is to ensure that the RecentAnnouncements component can accept the onViewPost prop, even if it's not used within this component. This allows for better integration with parent components that may pass this prop down to RecentAnnouncements.

export default function RecentAnnouncements({
  onViewPost,
}: Props) {

  const [
    posts,
    setPosts,
  ] = useState<any[]>([]);

  useEffect(() => {

    const loadPosts =
      async () => {

        const data =
          await getRecentPosts();

        setPosts(data);

      };

    loadPosts();

  }, []);

  return (

    <section className="mb-10">

      <h2
        className="
          text-2xl
          font-bold
          mb-4
        "
      >
        Recent Announcements
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-4
        "
      >

        {posts.map(
          (post) => {

            const imagePath =
              `/images/announcements/${post.category.toLowerCase()}.jpg`;

            return (

              <div
                key={post.id}
                className="
                  bg-white
                  rounded-xl
                  shadow
                  overflow-hidden
                "
              >

                <Image
                  src={imagePath}
                  alt={post.category}
                  width={400}
                  height={250}
                  className="
                    w-full
                    h-40
                    object-cover
                  "
                />

                <div className="p-4">

                  <h3
                    className="
                      font-bold
                      mb-2
                    "
                  >
                    {post.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    {post.priority}
                  </p>

                  <button
                    onClick={() =>
                        onViewPost(post)
                    }
                    className="
                        mt-3
                        bg-blue-600
                        text-white
                        px-3
                        py-2
                        rounded
                    "
                    >
                    Read More
                </button>

                </div>

              </div>

            );

          }
        )}

      </div>

    </section>

  );

}