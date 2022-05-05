import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_RNM } from '../constants';
import { ICharactersFromApi } from '../models.ts';

// Define a service using a base URL and expected endpoints
export const rnmApi = createApi({
  reducerPath: 'rnmAPi',
  baseQuery: fetchBaseQuery({ baseUrl: API_RNM }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ICharactersFromApi, string>({
      query: () => 'character',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharactersQuery } = rnmApi