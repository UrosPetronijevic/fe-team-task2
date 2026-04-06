export type UserRole = "Admin" | "Editor" | "Viewer";

export interface User {
  id: number;
  username: string;
  fullName: string;
  createdAt: string;
  isActive: boolean;
  isLoggedIn: boolean;
  email: string;
  phone: string;
  role: UserRole;
  lastLogin: string;
  address: string;
}
