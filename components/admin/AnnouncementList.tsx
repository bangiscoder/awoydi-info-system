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

import {
  deletePost,
} from "@/services/postService";
import DeleteAnnouncementModal from "./modals/DeleteAnnouncementModal";




/*
|--------------------------------------------------------------------------
| Announcement Management List
|--------------------------------------------------------------------------
*/

//This interface defines the props that the AnnouncementList component will accept. The onViewPost function is passed down to each AnnouncementRow to handle viewing individual post details when a row is clicked.
interface Props {
  onViewPost: (
    post: any
  ) => void;
}


// This is the Component for listing all announcements in the admin dashboard. It fetches all posts and displays them in a list format using the AnnouncementRow component. The onViewPost prop is passed down to each AnnouncementRow to handle viewing individual post details when a row is clicked.
export default function AnnouncementList({onViewPost,}: Props) {

    const handleDelete =
        async () => {

            if (!selectedPost) {
            return;
            }

            await deletePost(
            selectedPost.id
            );

            setShowDeleteModal(false);

        await loadPosts();
    };

    const handleDeleteClick =
        (post: any) => {

            setSelectedPost(post);

            setShowDeleteModal(true);

        };

    const [selectedPost, setSelectedPost] =
        useState<any>(null);

    const [showModal, setShowModal] =
        useState(false);

    const [
        posts,
        setPosts,
     ] = useState<any[]>([]);


    const [showDeleteModal, setShowDeleteModal] =
        useState(false);


    //The loadPosts function is responsible for fetching the list of all posts from the backend using the getPosts service function. It is called inside a useEffect hook to ensure that the posts are loaded when the component mounts. The fetched posts are stored in the local state using the setPosts function, which allows the component to render the list of announcements dynamically based on the data received from the backend.
    const loadPosts =
    async () => {

        const data =
        await getPosts();

        setPosts(data);

    };

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

     <div
        className="
            max-h-[700px]
            overflow-y-auto
            pr-2
        "
    >

        <div className="space-y-4">

            {posts.map(
                (
                    post,
                    index
                ) => (

                    <AnnouncementRow
                    key={post.id}
                    post={post}
                    serialNumber= {index + 1}
                    onViewPost={onViewPost}
                    onDelete={handleDeleteClick}
                    />

                )
            )}

        </div>

    </div>

            <DeleteAnnouncementModal
            post={selectedPost}
            isOpen={showDeleteModal}
            onClose={() =>
                setShowDeleteModal(false)
            }
            onConfirm={handleDelete}
            />

    </section>

  );

}