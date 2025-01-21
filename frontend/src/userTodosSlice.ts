import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    content: string,
    completed_on: string
}

const initTodos: Todo[] = []
const initialState = {
    todos: initTodos
}

export const userTodosSlice = createSlice({
    name: 'userTodos',
    initialState,
    reducers: {
        addTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload
        }
    }
})

export default userTodosSlice.reducer