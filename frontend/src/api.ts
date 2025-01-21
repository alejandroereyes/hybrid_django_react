import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Todo {
    id: number;
    content: string;
    completed_on: string;
}

export const rootApi = createApi({
    reducerPath: 'userTodos',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => '/api/user'
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