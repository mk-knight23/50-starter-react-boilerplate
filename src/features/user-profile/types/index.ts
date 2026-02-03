export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfileFormData {
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
}

export type UserProfileUpdatePayload = Partial<UserProfileFormData>;
