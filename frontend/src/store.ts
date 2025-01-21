import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import userTodosReducer from './userTodosSlice'
import { rootApi } from './api'

export const store = configureStore({
    reducer: {
        api: rootApi.reducer,
        user: userReducer,
        userTodos: userTodosReducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(rootApi.middleware)
    )
})