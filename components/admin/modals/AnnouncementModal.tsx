"use client";

/*
|--------------------------------------------------------------------------
| Announcement Modal
|--------------------------------------------------------------------------
*/

interface AnnouncementModalProps {
  post: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function AnnouncementModal({
  post,
  isOpen,
  onClose,
}: AnnouncementModalProps) {

  if (!isOpen || !post) {
    return null;
  }

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        justify-center
        items-center
        z-50
        p-4
      "
    >

      <div
        className="
          bg-white
          rounded-xl
          shadow-xl
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          p-6
        "
      >

        {/* Header */}
        <div
          className="
            flex
            justify-between
            items-start
            mb-6
          "
        >

          <div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              {post.title}
            </h2>

            <p className="text-gray-500">
              Published by {post.authorName}
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              text-xl
              font-bold
            "
          >
            ✕
          </button>

        </div>

        {/* Metadata */}
        <div
          className="
            flex
            gap-3
            mb-6
          "
        >

          <span className="bg-blue-100 px-3 py-1 rounded">
            {post.category}
          </span>

          <span className="bg-red-100 px-3 py-1 rounded">
            {post.priority}
          </span>

          <span className="bg-green-100 px-3 py-1 rounded">
            {post.status}
          </span>

        </div>

        {/* Brief */}
        <div className="mb-6">

          <h3 className="font-bold mb-2">
            Brief Summary
          </h3>

          <p>{post.brief}</p>

        </div>

        {/* Content */}
        <div className="mb-6">

          <h3 className="font-bold mb-2">
            Full Announcement
          </h3>

          <p className="whitespace-pre-wrap">
            {post.content}
          </p>

        </div>

        {/* Metrics */}
        <div
          className="
            flex
            gap-4
          "
        >

          <div className="bg-gray-100 px-4 py-2 rounded">
            👁 {post.readCount ?? 0}
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded">
            ✓ {post.acknowledgementCount ?? 0}
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded">
            💬 {post.commentCount ?? 0}
          </div>

        </div>

      </div>

    </div>

  );

}