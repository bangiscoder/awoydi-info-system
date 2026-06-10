"use client";

import Link from "next/link";
import DeleteAnnouncementModal
  from "@/components/admin/modals/DeleteAnnouncementModal";

/*
|--------------------------------------------------------------------------
| Announcement Row
|--------------------------------------------------------------------------
*/

interface AnnouncementRowProps {
  post: any;
  serialNumber: number;

  onViewPost: (
    post: any
  ) => void;

   onDelete: (
    post: any
  ) => void;
}

export default function AnnouncementRow({
  post,
  serialNumber,
  onViewPost,
  onDelete
}: AnnouncementRowProps) {

  return (

    <div
      className="
        bg-green-50
        border
        rounded-lg
        p-4
        flex
        gap-6
        items-start
      "
    >

      {/* Serial Number */}
      <div
        className="
          text-4xl
          font-bold
          min-w-[60px]
          text-center
          border-r
          pr-4
        "
      >
        {serialNumber}
      </div>

      {/* Content */}
      <div className="flex-1">

        {/* Title */}
        <button
            onClick={() =>
                onViewPost(post)
            }
            className="
                text-2xl
                font-bold
                text-left
                hover:text-blue-600
            "
            >
            {post.title}
        </button>

        {/* Category + Priority */}
        <div
          className="
            flex
            gap-2
            mb-2
          "
        >

          <span
            className="
              bg-blue-100
              text-blue-700
              text-xs
              px-2
              py-1
              rounded
            "
          >
            {post.category}
          </span>

          <span
            className="
              bg-red-100
              text-red-700
              text-xs
              px-2
              py-1
              rounded
            "
          >
            {post.priority}
          </span>

        </div>

        {/* Brief */}
        <p
          className="
            text-gray-700
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
          "
        >

          <div
            className="
              bg-pink-600
              text-white
              px-4
              py-2
              rounded
            "
          >
            👍 {post.acknowledgementCount ?? 0}
          </div>

          <div
            className="
              bg-pink-600
              text-white
              px-4
              py-2
              rounded
            "
          >
            💬 {post.commentCount ?? 0}
          </div>

          <div
            className="
              bg-pink-600
              text-white
              px-4
              py-2
              rounded
            "
          >
            👁 {post.readCount ?? 0}
          </div>

        </div>

      </div>

      {/* Actions */}
      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        <button
          className="
            bg-yellow-500
            text-white
            px-4
            py-2
            rounded
          "
        >
          Edit
        </button>

        <button
          className="
            bg-red-600
            text-white
            px-4
            py-2
            rounded
          "
            onClick={() => onDelete(post)}
        >
          Delete
        </button>

        <button
            className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded
            text-center
          "
            // onClick={() => onDelete(post)}
        >
            More
        </button>

      </div>

    </div>

  );

}