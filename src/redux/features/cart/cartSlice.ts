import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIsOpen : false ,
    totalNum: 200 ,
    totalPrice: 0 ,

}
const cartSlice = createSlice({
    name: "cart" ,
    initialState ,
    reducers : {
        openCart : (state)=>{
            state.cartIsOpen = true ;
        },
        closeCart : (state)=>{
            state.cartIsOpen = false ;
        },
        toggleCart : (state)=>{
            state.cartIsOpen = !state.cartIsOpen ;
        }
    }
})

export default cartSlice.reducer ;
export const {openCart , closeCart , toggleCart} = cartSlice.actions ;