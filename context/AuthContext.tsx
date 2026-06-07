"use client";

import {
  createContext,
  useContext,
} from "react";

interface AuthContextType {
  user: any;
  loading: boolean;
}

export const AuthContext =
  createContext<AuthContextType>({
    user: null,
    loading: true,
  });

export const useAuth = () =>
  useContext(AuthContext);