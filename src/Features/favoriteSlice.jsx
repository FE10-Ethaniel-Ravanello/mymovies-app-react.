import { createSlice } from "@reduxjs/toolkit";


export const addToFavorite = createSlice({
    name: "favorite",
    initialState: JSON.parse(sessionStorage.getItem('favorite')) || [],
    reducers: {
        addFavorite(state, action){
            
            const newFavorite ={
                id: action.payload.id,
                title: action.payload.title,
                overview: action.payload.overview,
                poster_path: action.payload.poster_path,
            }
        if(state.length === 0){
            state.push(newFavorite)
        }
        else{
            let checker = false
            state.map((item) => {
                if (item.id === action.payload.id){
                    checker = true
                }
            })
            if(!checker){
                state.push(newFavorite)
            }
        }
        sessionStorage.setItem("favorite", JSON.stringify(state))

        },
        deleteFavorite(state, action){
            return{
                ...state,
                data: state.filter((item) => item.id != action.payload.id),
            }
        }
        
    },
})


export const {addFavorite, deleteFavorite} = addToFavorite.actions
export default addToFavorite.reducer