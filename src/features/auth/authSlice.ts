
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalIsOpen : true ,
    loginIsOpen : false ,
    signupIsOpen : false ,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        toggleLogin : (state)=>{
            state.loginIsOpen = !state.loginIsOpen ;
        },
        toggleSignup : (state)=>{
            state.signupIsOpen = !state.signupIsOpen ;
        },
        closeModal : (state)=>{
            state.modalIsOpen = false
        }

    }
})

export default authSlice.reducer ;
export const {toggleLogin , toggleSignup , closeModal} = authSlice.actions ;