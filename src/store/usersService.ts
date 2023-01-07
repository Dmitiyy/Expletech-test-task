import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TUser } from './usersSlice';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND }),
  endpoints: (builder) => ({
    getRecords: builder.query<TUser[], string>({
      query: (option) => `/users/${option}`,
    }),
    getCertainRecord: builder.query<TUser, string>({
      query: (option) => `/users/${option}`,
    }),
    setRecord: builder.mutation({
      query: (data) => {
        const { path, ...rest } = data;
        return {
          url: `/users/${path}`,
          method: 'POST',
          body: { ...data }
        }
      }
    })
  })
});

export const {
  useGetRecordsQuery, useGetCertainRecordQuery, useSetRecordMutation
} = usersApi;