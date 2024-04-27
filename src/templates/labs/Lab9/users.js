import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), 
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: '/add-user',
        method: 'POST',
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/delete-user/${userId}`,
        method: 'DELETE',
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, newGroup }) => ({
        url: `/update-user/${userId}`,
        method: 'PUT',
        body: { group: newGroup },
      }),
    }),
  }),
})

export default userApi;
