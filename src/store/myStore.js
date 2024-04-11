import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";


const myStore = configureStore({
    reducer: {
        hamburger: navbarReducer
    }
})

export default myStore