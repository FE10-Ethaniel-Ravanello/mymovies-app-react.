import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './Features/DarkModeFeature'
import favoriteReducer from './Features/favoriteSlice'

export const store = configureStore({
    reducer:{
        darkMode: darkModeReducer,
        favorite: favoriteReducer,
    }
})
