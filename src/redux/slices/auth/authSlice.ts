
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginIsOpen : false ,
    signupIsOpen : false ,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
       
        openLogin : (state)=>{
            state.signupIsOpen = false ;
            state.loginIsOpen = true ;
        },
        openSignup : (state)=>{
            state.loginIsOpen = false ;
            state.signupIsOpen = true ;

        },

    }
})

export default authSlice.reducer ;
export const {openLogin , openSignup } = authSlice.actions ;