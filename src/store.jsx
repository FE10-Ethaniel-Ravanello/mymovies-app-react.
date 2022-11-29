import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './Features/DarkModeFeature'

export const store = configureStore({
    reducer:{
        darkMode: darkModeReducer
    }
})