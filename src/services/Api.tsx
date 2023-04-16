const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3ffe89a3ccd04801febc3db968502921';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Film } from '../types';

export const Api = createApi({
  reducerPath: 'MovieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),

  endpoints: (builder) => ({
    getPopularFilms: builder.query({
      query: () => `/trending/movie/day?api_key=${API_KEY}`,
    }),
    getMovieSearch: builder.query({
      query: (search) => `/search/movie?api_key=${API_KEY}&query=${search}`,
    }),
    getMovieSearchById: builder.query<Film, number>({
      query: (id) => `/movie/${id}?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});

export const { useGetPopularFilmsQuery, useGetMovieSearchByIdQuery, useGetMovieSearchQuery } = Api;
