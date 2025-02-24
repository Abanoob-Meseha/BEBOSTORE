
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalIsOpen : false ,
    loginIsOpen : false ,
    signupIsOpen : false ,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        closeModal : (state)=>{
            state.modalIsOpen = false
        },
        toggleModal : (state)=>{
            state.modalIsOpen = !state.modalIsOpen ;
        },
        openLogin : (state)=>{
            state.signupIsOpen = false ;
            state.loginIsOpen = true ;
            state.modalIsOpen = true ;
        },
        openSignup : (state)=>{
            state.loginIsOpen = false ;
            state.signupIsOpen = true ;
            state.modalIsOpen = true ;

        },

    }
})

export default authSlice.reducer ;
export const {openLogin , openSignup , closeModal , toggleModal} = authSlice.actions ;