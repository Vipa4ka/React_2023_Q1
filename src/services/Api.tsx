const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3ffe89a3ccd04801febc3db968502921';

async function fetchError(url = '', config = {}) {
  const response = await fetch(url, config);
  return await response.json();
}

export function fetchPopularFilms() {
  return fetchError(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMovieSearch(search: string) {
  return fetchError(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`);
}

export function fetchMovieById(id: number) {
  return fetchError(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}
