import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false as boolean 
}
export const navbarSlice = createSlice({
    name: "navbar",
    initialState ,
    reducers:{
        toggleNav: (state)=>{
            state.isOpen = !state.isOpen ;
        },
        openNav : (state)=>{
            state.isOpen = true
        },
        closeNav : (state)=>{
            state.isOpen = false
        }
    }
})

export default navbarSlice.reducer ;

export const {toggleNav , openNav , closeNav} = navbarSlice.actions ;