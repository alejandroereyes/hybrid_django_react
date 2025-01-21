import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type User = {
    username: string
    email: string
    password: string
    bio: string
}

const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer