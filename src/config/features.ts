/**
 * Feature toggle configuration
 * Features can be enabled/disabled via environment variables
 */

export const features = {
  // New features under development
  newDashboard: import.meta.env.VITE_FEATURE_NEW_DASHBOARD === 'true',
  experimentalUI: import.meta.env.VITE_FEATURE_EXPERIMENTAL_UI === 'true',
  advancedAnalytics: import.meta.env.VITE_FEATURE_ADVANCED_ANALYTICS === 'true',

  // Feature flags for A/B testing
  newOnboarding: import.meta.env.VITE_FEATURE_NEW_ONBOARDING === 'true',

  // Beta features
  betaFeatures: import.meta.env.VITE_FEATURE_BETA === 'true',

  // Debug features (only in development)
  debugMode: import.meta.env.DEV,
} as const;

export type FeatureName = keyof typeof features;

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: FeatureName): boolean {
  return features[feature];
}

/**
 * Get all enabled features
 */
export function getEnabledFeatures(): FeatureName[] {
  return Object.entries(features)
    .filter(([, enabled]) => enabled)
    .map(([name]) => name as FeatureName);
}
