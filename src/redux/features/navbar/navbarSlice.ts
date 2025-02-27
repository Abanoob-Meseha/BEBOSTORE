import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false as boolean ,
    toLanguage : "AR"
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
        },
        switchLanguage: (state)=>{
            state.toLanguage = state.toLanguage == "AR" ? "EN" : "AR";  
        }
    }
})

export default navbarSlice.reducer ;

export const {toggleNav , openNav , closeNav , switchLanguage} = navbarSlice.actions ;