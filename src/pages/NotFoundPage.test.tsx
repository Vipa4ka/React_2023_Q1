import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import NotFound from '../pages/NotFoundPage';

test('render NotFound', () => {
  render(<NotFound />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/404 Not Found/i);
});
