import { useAppStore, selectUser, selectIsAuthenticated, selectTheme } from './index';

// Custom hooks for common state selections
export const useUser = () => useAppStore(selectUser);
export const useIsAuthenticated = () => useAppStore(selectIsAuthenticated);
export const useTheme = () => useAppStore(selectTheme);
export const useSidebar = () => useAppStore((state) => ({
  isOpen: state.sidebarOpen,
  toggle: state.toggleSidebar,
  setOpen: state.setSidebarOpen,
}));
