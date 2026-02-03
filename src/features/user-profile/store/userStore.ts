import { create } from 'zustand';
import type { UserProfile } from '../types';

interface UserStore {
  userProfile: UserProfile | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setUserProfile: (profile: UserProfile) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearProfile: () => void;
  updateProfileField: <K extends keyof UserProfile>(
    key: K,
    value: UserProfile[K]
  ) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userProfile: null,
  isLoading: false,
  error: null,

  setUserProfile: (profile) => { set({ userProfile: profile, error: null }); },

  setLoading: (loading) => { set({ isLoading: loading }); },

  setError: (error) => { set({ error, isLoading: false }); },

  clearProfile: () => { set({ userProfile: null, error: null }); },

  updateProfileField: (key, value) =>
    { set((state) => ({
      userProfile: state.userProfile
        ? { ...state.userProfile, [key]: value }
        : null,
    })); },
}));
