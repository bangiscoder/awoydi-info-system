export interface AppUser {
  uid: string;
  fullName: string;
  email: string;
  role: "ADMIN" | "USER";
  isActive: boolean;
}