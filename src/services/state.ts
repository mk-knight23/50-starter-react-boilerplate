import { create } from 'zustand';

interface AppState {
  user: any | null;
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  setUser: (user: any) => void;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  theme: 'light',
  sidebarOpen: true,
  setUser: (user) => set({ user }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen }))
}));
