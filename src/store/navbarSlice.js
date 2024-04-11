import { createSlice } from "@reduxjs/toolkit";
const navbarSlice = createSlice({
    name: "hamburger",
    initialState: {
        toggleHamburgerState: false
    },
    reducers: {
        toggleHamburger: (state) => {
            state.toggleHamburgerState = !state.toggleHamburgerState
        }
    }
})

export const { toggleHamburger } = navbarSlice.actions

export default navbarSlice.reducer