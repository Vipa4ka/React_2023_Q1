const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3ffe89a3ccd04801febc3db968502921';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FormCards } from '../types';

export const MovieApi = createApi({
  reducerPath: 'MovieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),

  endpoints: (builder) => ({
    getTopMovie: builder.query({
      query: () => `/trending/movie/day?api_key=${API_KEY}`,
    }),
    getSearchMovie: builder.query({
      query: (searchQuery) => `/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
    }),
    getMovieByID: builder.query<FormCards, number>({
      query: (id) => `/movie/${id}?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});

export const { useGetTopMovieQuery, useGetSearchMovieQuery, useGetMovieByIDQuery } = MovieApi;
