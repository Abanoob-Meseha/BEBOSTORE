
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : true as boolean
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
       
    }
})

export default authSlice.reducer ;
export const { } = authSlice.actions ;