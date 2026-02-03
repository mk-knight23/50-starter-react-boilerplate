import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@/test/test-utils';
import { UserProfile } from '../UserProfile';
import * as userApi from '../../api/userApi';

// Mock the user API
vi.mock('../../api/userApi', () => ({
  userApi: {
    getProfile: vi.fn(),
  },
}));

const mockProfile = {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Software developer',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};

describe('UserProfile', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading state initially', () => {
    vi.mocked(userApi.userApi.getProfile).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    );

    render(<UserProfile userId="123" />);
    expect(screen.getByText(/loading profile/i)).toBeInTheDocument();
  });

  it('displays user profile data', async () => {
    vi.mocked(userApi.userApi.getProfile).mockResolvedValue(mockProfile);

    render(<UserProfile userId="123" />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('Software developer')).toBeInTheDocument();
    });
  });

  it('displays error state on API failure', async () => {
    vi.mocked(userApi.userApi.getProfile).mockRejectedValue(
      new Error('Failed to fetch')
    );

    render(<UserProfile userId="123" />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
      expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
  });

  it('displays not found state when profile is null', async () => {
    vi.mocked(userApi.userApi.getProfile).mockResolvedValue(null as never);

    render(<UserProfile userId="123" />);

    await waitFor(() => {
      expect(screen.getByText(/profile not found/i)).toBeInTheDocument();
    });
  });

  it('retries fetching profile when retry button is clicked', async () => {
    vi.mocked(userApi.userApi.getProfile)
      .mockRejectedValueOnce(new Error('Failed'))
      .mockResolvedValueOnce(mockProfile);

    render(<UserProfile userId="123" />);

    // Wait for error state
    await waitFor(() => {
      expect(screen.getByText(/failed/i)).toBeInTheDocument();
    });

    // Click retry button
    const retryButton = screen.getByText(/retry/i);
    retryButton.click();

    // Should show profile data
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    expect(userApi.userApi.getProfile).toHaveBeenCalledTimes(2);
  });
});
