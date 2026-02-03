import { motion } from 'framer-motion';
import type { UserProfile } from '../types';

interface UserProfileCardProps {
  profile: UserProfile;
  onEdit?: () => void;
}

export function UserProfileCard({ profile, onEdit }: UserProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-lg border border-slate-800 p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {profile.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-white">{profile.name}</h2>
            <p className="text-slate-400">{profile.email}</p>
          </div>
        </div>

        {onEdit && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEdit}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            Edit Profile
          </motion.button>
        )}
      </div>

      {profile.bio && (
        <div className="mt-4 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Bio</h3>
          <p className="text-slate-300">{profile.bio}</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-slate-800">
        <div className="flex gap-4 text-sm text-slate-400">
          <div>
            <span className="font-medium">Joined:</span>{' '}
            {new Date(profile.createdAt).toLocaleDateString()}
          </div>
          {profile.updatedAt !== profile.createdAt && (
            <div>
              <span className="font-medium">Updated:</span>{' '}
              {new Date(profile.updatedAt).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
