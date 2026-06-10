/*
|--------------------------------------------------------------------------
| Firestore Functions
|--------------------------------------------------------------------------
*/
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

/*
|--------------------------------------------------------------------------
| Create Post
|--------------------------------------------------------------------------
*/
export const createPost = async (
  postData: any
) => {

  return await addDoc(
    collection(db, "posts"),
    {
      ...postData,

       /*
      --------------------------------------------------------------
      | Engagement Counters
      --------------------------------------------------------------
      */
      readCount: 0,

      acknowledgementCount: 0,

      commentCount: 0,

      /*
      --------------------------------------------------------------
      | Timestamps
      --------------------------------------------------------------
      */

      createdAt:
        serverTimestamp(),

      updatedAt:
        serverTimestamp(),
    }
  );

};

/*
|--------------------------------------------------------------------------
| Get Recent Posts
|--------------------------------------------------------------------------
*/
import {
  limit,
} from "firebase/firestore";

export const getRecentPosts =
  async (
    limitCount = 4
  ) => {

    const q = query(
      collection(
        db,
        "posts"
      ),
      orderBy(
        "createdAt",
        "desc"
      ),
      limit(limitCount)
    );

    const snapshot =
      await getDocs(q);

    return snapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
  };
  
/*
|--------------------------------------------------------------------------
| Get All Posts
|--------------------------------------------------------------------------
*/
export const getPosts =
  async () => {

    const q = query(
      collection(db, "posts"),
      orderBy(
        "createdAt",
        "desc"
      )
    );

    const snapshot =
      await getDocs(q);

    return snapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
  };

/*
|--------------------------------------------------------------------------
| Get Single Post
|--------------------------------------------------------------------------
*/
export const getPostById =
  async (id: string) => {

    const postRef =
      doc(
        db,
        "posts",
        id
      );

    const postSnap =
      await getDoc(postRef);

    if (
      !postSnap.exists()
    ) {
      return null;
    }

    return {
      id: postSnap.id,
      ...postSnap.data(),
    };
  };

/*
|--------------------------------------------------------------------------
| Update Post
|--------------------------------------------------------------------------
*/
export const updatePost =
  async (
    id: string,
    data: any
  ) => {

    const postRef =
      doc(
        db,
        "posts",
        id
      );

    await updateDoc(
      postRef,
      {
        ...data,
        updatedAt:
          serverTimestamp(),
      }
    );
  };

/*
|--------------------------------------------------------------------------
| Delete Post
|--------------------------------------------------------------------------
*/
export const deletePost =
  async (
    id: string
  ) => {

    await deleteDoc(
      doc(
        db,
        "posts",
        id
      )
    );
  };