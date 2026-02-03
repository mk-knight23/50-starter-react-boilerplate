import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserProfileCard } from './UserProfileCard';
import { useUserProfile } from '../hooks/useUserProfile';
import { Button } from '@/shared/components';
import { AlertCircle } from 'lucide-react';

interface UserProfileProps {
  userId: string;
}

export function UserProfile({ userId }: UserProfileProps) {
  const { profile, isLoading, error, fetchProfile } = useUserProfile(userId);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4" />
          <p className="text-slate-400">Loading profile...</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Error</h2>
          <p className="text-slate-400 mb-6">{error}</p>
          <Button onClick={() => fetchProfile()} variant="primary">
            Retry
          </Button>
        </div>
      </motion.div>
    );
  }

  if (!profile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-2">Profile Not Found</h2>
          <p className="text-slate-400">
            The requested profile could not be found.
          </p>
        </div>
      </motion.div>
    );
  }

  return <UserProfileCard profile={profile} />;
}
