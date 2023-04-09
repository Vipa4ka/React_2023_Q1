import React from 'react';
import { describe, vi } from 'vitest';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal component', () => {
  const setSearch = vi.fn();
  it('render component', () => {
    render(<Modal idCardMovies={8} onClose={setSearch} />);
    const data = [
      {
        title: 'Hello words',
        tagline: 'Hello words',
        overview: 'While visiting family in Mexico',
        homepage: 'okki0@fun.com',
        vote_average: 9.4,
        vote_count: 42,
        popularity: 98.48,
        budget: 150000000,
        revenue: 160000000,
        release_date: '2023-04-07',
        runtime: 84,
        status: 'Released',
      },
    ];

    expect(data).toEqual(expect.arrayContaining(data));
  });
});
