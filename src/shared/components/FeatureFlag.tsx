import { ReactNode } from 'react';
import { isFeatureEnabled, type FeatureName } from '@/config/features';

interface FeatureFlagProps {
  feature: FeatureName;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Conditionally render children based on feature flag
 */
export function FeatureFlag({ feature, children, fallback = null }: FeatureFlagProps): ReactNode {
  const enabled = isFeatureEnabled(feature);

  if (!enabled && fallback) {
    return <>{fallback}</>;
  }

  return enabled ? <>{children}</> : null;
}

interface ShowFeatureProps {
  features: FeatureName[];
  children: ReactNode;
  fallback?: ReactNode;
  requireAll?: boolean;
}

/**
 * Show content if ANY or ALL specified features are enabled
 */
export function ShowFeature({
  features,
  children,
  fallback = null,
  requireAll = false,
}: ShowFeatureProps): ReactNode {
  const check = requireAll
    ? features.every((f) => isFeatureEnabled(f))
    : features.some((f) => isFeatureEnabled(f));

  if (!check && fallback) {
    return <>{fallback}</>;
  }

  return check ? <>{children}</> : null;
}
