/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_FEATURE_NEW_DASHBOARD: string;
  readonly VITE_FEATURE_EXPERIMENTAL_UI: string;
  readonly VITE_FEATURE_ADVANCED_ANALYTICS: string;
  readonly VITE_FEATURE_NEW_ONBOARDING: string;
  readonly VITE_FEATURE_BETA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly DEV: boolean;
  readonly MODE: string;
  readonly PROD: boolean;
  readonly SSR: boolean;
}
