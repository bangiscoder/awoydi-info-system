"use client";

import {
  createContext,
  useContext,
} from "react";

/*
|--------------------------------------------------------------------------
| Application User Profile
|--------------------------------------------------------------------------
| This represents the data stored in Firestore.
| We will fetch this using the authenticated user's UID.
|--------------------------------------------------------------------------
*/
interface UserProfile {
  fullName: string;
  email: string;
  role: "ADMIN" | "USER";
  isActive: boolean;
}

/*
|--------------------------------------------------------------------------
| Authentication Context Type
|--------------------------------------------------------------------------
| user      -> Firebase Authentication user
| profile   -> Firestore profile
| loading   -> Loading state while checking authentication
|--------------------------------------------------------------------------
*/
interface AuthContextType {
  user: any;
  profile: UserProfile | null;
  loading: boolean;
}

/*
|--------------------------------------------------------------------------
| Create Context
|--------------------------------------------------------------------------
*/
export const AuthContext =
  createContext<AuthContextType>({
    user: null,
    profile: null,
    loading: true,
  });

/*
|--------------------------------------------------------------------------
| Custom Hook
|--------------------------------------------------------------------------
| Allows us to use:
|
| const { user, profile } = useAuth();
|--------------------------------------------------------------------------
*/
export const useAuth = () =>
  useContext(AuthContext);