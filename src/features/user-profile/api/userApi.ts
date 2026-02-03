import { httpClient } from '@/shared/api/http-client';
import type { ApiResponse, ApiError } from '@/shared/types/api.types';
import type { UserProfile, UserProfileUpdatePayload } from '../types';

/**
 * User profile API service
 */
export const userApi = {
  /**
   * Get user profile by ID
   */
  async getProfile(userId: string): Promise<UserProfile> {
    try {
      const response = await httpClient.get<ApiResponse<UserProfile>>(
        `/users/${userId}`
      );
      return response.data.data!;
    } catch (error) {
      throw error as ApiError;
    }
  },

  /**
   * Update user profile
   */
  async updateProfile(
    userId: string,
    data: UserProfileUpdatePayload
  ): Promise<UserProfile> {
    try {
      const response = await httpClient.patch<ApiResponse<UserProfile>>(
        `/users/${userId}`,
        data
      );
      return response.data.data!;
    } catch (error) {
      throw error as ApiError;
    }
  },

  /**
   * Delete user profile
   */
  async deleteProfile(userId: string): Promise<void> {
    try {
      await httpClient.delete(`/users/${userId}`);
    } catch (error) {
      throw error as ApiError;
    }
  },
};
