"use client";

/*
|--------------------------------------------------------------------------
| Delete Announcement Modal
|--------------------------------------------------------------------------
*/

interface DeleteAnnouncementModalProps {
  post: any;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteAnnouncementModal({
  post,
  isOpen,
  onClose,
  onConfirm,
}: DeleteAnnouncementModalProps) {

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
      "
    >

      <div
        className="
          bg-white
          rounded-xl
          p-6
          w-full
          max-w-md
        "
      >

        <h2
          className="
            text-xl
            font-bold
            mb-4
          "
        >
          Delete Announcement
        </h2>

        <p className="mb-6">

          Are you sure you want to delete:

          <strong>
            {" "}
            {post.title}
          </strong>

          ?

        </p>

        <div
          className="
            flex
            justify-end
            gap-3
          "
        >

          <button
            onClick={onClose}
            className="
              px-4
              py-2
              border
              rounded
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              bg-red-600
              text-white
              px-4
              py-2
              rounded
            "
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}