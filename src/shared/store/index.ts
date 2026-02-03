import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * Global application state
 */
interface AppState {
  // UI State
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  language: string;

  // User State
  user: {
    id?: string;
    name?: string;
    email?: string;
    isAuthenticated: boolean;
  };

  // Actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: string) => void;
  setUser: (user: Omit<AppState['user'], 'isAuthenticated'>) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      sidebarOpen: true,
      theme: 'dark',
      language: 'en',
      user: {
        isAuthenticated: false,
      },

      // Actions
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      setUser: (user) =>
        set({
          user: {
            ...user,
            isAuthenticated: !!user.id,
          },
        }),
      logout: () =>
        set({
          user: {
            isAuthenticated: false,
          },
        }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        user: state.user,
      }),
    }
  )
);

// Selectors for better performance
export const selectUser = (state: AppState) => state.user;
export const selectIsAuthenticated = (state: AppState) => state.user.isAuthenticated;
export const selectTheme = (state: AppState) => state.theme;
