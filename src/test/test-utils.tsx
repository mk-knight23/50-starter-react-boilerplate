import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

// Custom render function with providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {}

export function renderWithProviders(
  ui: ReactElement,
  renderOptions: CustomRenderOptions = {}
) {
  return render(ui, renderOptions);
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { renderWithProviders as render };
