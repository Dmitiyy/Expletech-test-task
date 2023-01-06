import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TUser } from './usersSlice';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND }),
  endpoints: (builder) => ({
    getAllRecords: builder.query<TUser[], string>({
      query: (option) => `/users/${option}`,
    }),
  })
});

export const { useGetAllRecordsQuery } = usersApi;