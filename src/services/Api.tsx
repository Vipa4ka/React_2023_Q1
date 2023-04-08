const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3ffe89a3ccd04801febc3db968502921';

async function fetchError(url = '', config = {}) {
  const response = await fetch(url, config);
  return await response.json();
}
//список самых популярных фильмов на сегодня
export function fetchPopularFilms() {
  return fetchError(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

// //поиск кинофильма по ключевому слову на странице фильмов
// export function fetchMovieSearch(search: string) {
//   return fetchError(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`);
// }

// //поиск кинофильма по ключевому слову на странице фильмов
export function fetchMovieById(id: number) {
  return fetchError(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

// // запрос полной информации о фильме для страницы кинофильма.
// export function fetchMovieInfo(filmid) {
//   return fetchError(`${BASE_URL}/movie/${filmid}?api_key=${API_KEY}`);
// }

// // запрос информации о актёрском составе для страницы кинофильма.
// export function fetchСast(filmid) {
//   return fetchError(`${BASE_URL}/movie/${filmid}/credits?api_key=${API_KEY}`);
// }

// // запрос обзоров для страницы кинофильма.
// export function fetchRequestForMovie(filmid) {
//   return fetchError(`${BASE_URL}/movie/${filmid}/reviews?api_key=${API_KEY}`);
// }
