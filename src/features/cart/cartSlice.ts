import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalNum: 200 ,
    totalPrice: 0 ,

}
const cartSlice = createSlice({
    name: "cart" ,
    initialState ,
    reducers : {
        
    }
})

export default cartSlice.reducer ;
export const {} = cartSlice.actions ;