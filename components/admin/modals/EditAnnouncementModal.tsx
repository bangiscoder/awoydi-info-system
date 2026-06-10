"use client";

import {
  useEffect,
  useState,
} from "react";

interface EditAnnouncementModalProps {
  post: any;
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    id: string,
    data: any
  ) => void;
}

export default function EditAnnouncementModal({
  post,
  isOpen,
  onClose,
  onSave,
}: EditAnnouncementModalProps) {

  const [title, setTitle] =
    useState("");

  const [brief, setBrief] =
    useState("");

  const [content, setContent] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [priority, setPriority] =
    useState("");

  const [status, setStatus] =
    useState("");

  useEffect(() => {

    if (post) {

      setTitle(
        post.title || ""
      );

      setBrief(
        post.brief || ""
      );

      setContent(
        post.content || ""
      );

      setCategory(
        post.category || ""
      );

      setPriority(
        post.priority || ""
      );

      setStatus(
        post.status || ""
      );

    }

  }, [post]);

  if (!isOpen || !post) {
    return null;
  }

  const handleSave =
    () => {

      onSave(
        post.id,
        {
          title,
          brief,
          content,
          category,
          priority,
          status,
        }
      );

    };

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
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          Edit Announcement
        </h2>

        <div className="space-y-4">

          <div>

            <label className="block mb-2">
              Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="
                w-full
                border
                p-3
                rounded
              "
            />

          </div>

          <div>

            <label className="block mb-2">
              Brief
            </label>

            <textarea
              value={brief}
              onChange={(e) =>
                setBrief(
                  e.target.value
                )
              }
              className="
                w-full
                border
                p-3
                rounded
              "
            />

          </div>

          <div>

            <label className="block mb-2">
              Content
            </label>

            <textarea
              rows={8}
              value={content}
              onChange={(e) =>
                setContent(
                  e.target.value
                )
              }
              className="
                w-full
                border
                p-3
                rounded
              "
            />

          </div>

        </div>

        <div
          className="
            flex
            justify-end
            gap-3
            mt-6
          "
        >

          <button
            onClick={onClose}
            className="
              border
              px-4
              py-2
              rounded
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
              bg-blue-600
              text-white
              px-4
              py-2
              rounded
            "
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>

  );

}