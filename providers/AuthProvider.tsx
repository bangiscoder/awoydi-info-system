"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

import { AuthContext } from "@/context/AuthContext";

import { getUserProfile }
  from "@/services/userService";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState(null);

    /*
  |--------------------------------------------------------------------------
  | Firestore User Profile
  |--------------------------------------------------------------------------
  */
  const [profile, setProfile] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (firebaseUser) => {

          // Store Firebase user
          setUser(firebaseUser);

          /*
          --------------------------------------------------------------------------
          | Fetch Firestore Profile
          --------------------------------------------------------------------------
          */
          if (firebaseUser) {

            const userProfile =
              await getUserProfile(
                firebaseUser.uid
              );

            setProfile(userProfile);

          } else {

            setProfile(null);

          }

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}