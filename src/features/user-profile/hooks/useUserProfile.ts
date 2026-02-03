import { useCallback } from 'react';
import { useUserStore } from '../store/userStore';
import { userApi } from '../api/userApi';
import type { UserProfile, UserProfileUpdatePayload } from '../types';

/**
 * Custom hook for user profile operations
 */
export function useUserProfile(userId: string) {
  const { userProfile, isLoading, error, setUserProfile, setLoading, setError } =
    useUserStore();

  /**
   * Fetch user profile
   */
  const fetchProfile = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);

    try {
      const profile = await userApi.getProfile(userId);
      setUserProfile(profile);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  }, [userId, setLoading, setError, setUserProfile]);

  /**
   * Update user profile
   */
  const updateProfile = useCallback(
    async (data: UserProfileUpdatePayload): Promise<UserProfile | null> => {
      if (!userId) return null;

      setLoading(true);
      setError(null);

      try {
        const updatedProfile = await userApi.updateProfile(userId, data);
        setUserProfile(updatedProfile);
        return updatedProfile;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to update profile');
        return null;
      } finally {
        setLoading(false);
      }
    },
    [userId, setLoading, setError, setUserProfile]
  );

  /**
   * Delete user profile
   */
  const deleteProfile = useCallback(async (): Promise<boolean> => {
    if (!userId) return false;

    setLoading(true);
    setError(null);

    try {
      await userApi.deleteProfile(userId);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete profile');
      return false;
    } finally {
      setLoading(false);
    }
  }, [userId, setLoading, setError]);

  return {
    profile: userProfile,
    isLoading,
    error,
    fetchProfile,
    updateProfile,
    deleteProfile,
  };
}
