import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

/*
|--------------------------------------------------------------------------
| Get User Profile
|--------------------------------------------------------------------------
| Fetches Firestore document:
|
| users/{uid}
|--------------------------------------------------------------------------
*/
export const getUserProfile =
  async (uid: string) => {

    const userRef = doc(
      db,
      "users",
      uid
    );

    const userSnap =
      await getDoc(userRef);

    if (!userSnap.exists()) {
      return null;
    }

    return userSnap.data();
  };