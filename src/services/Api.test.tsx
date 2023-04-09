import { describe } from 'vitest';

import { fetchPopularFilms, fetchMovieSearch, fetchMovieById } from './Api';

describe('Api', () => {
  it('exam fetch popular films', async () => {
    const data = await fetchPopularFilms();
    expect(Array.isArray(data)).toEqual(false);
  });

  it('exam fetch search films', async () => {
    const data = await fetchMovieSearch('dog');
    expect(Array.isArray(data)).toEqual(false);
  });

  it('exam fetch  films by id', async () => {
    const data = await fetchMovieById(8);
    expect(Array.isArray(data)).toEqual(false);
  });
});
