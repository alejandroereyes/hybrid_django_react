import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from './userSlice'

interface Todo {
    id: number;
    content: string;
    completed_on: string;
}

export const rootApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({
        getUser: builder.query<User, void>({
            query: () => 'user'
        }),
        getTodos: builder.query<Todo[], void>({
            query: () => `users/todos`
        }),
        createTodo: builder.mutation({
            query: ({ data }) => ({
                url: `users/todos`,
                data,
                method: 'POST'
            })
        })
    })
})

export const useGetUserQuery = rootApi.endpoints.getUser.useQuery
export const useGetTodosQuery = rootApi.endpoints.getTodos.useQuery
export const useCreateTodoMutation = rootApi.endpoints.createTodo.useMutation