import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_RNM } from '../constants';
import { ICharactersFromApi } from '../models.ts';

export const rnmApi = createApi({
  reducerPath: 'rnmAPi',
  baseQuery: fetchBaseQuery({ baseUrl: API_RNM }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ICharactersFromApi, number>({
      query: (pageNumber) => `character?page=${pageNumber}`,
    }),
  }),
})

export const { useGetCharactersQuery } = rnmApi