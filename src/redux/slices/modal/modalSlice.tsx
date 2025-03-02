import { modalItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalIsOpen : false ,
    activeItem : "login" as modalItem

}
const modalSlice = createSlice({
    name: "modal",
    initialState ,
    reducers:{
        openModal : (state)=>{
            state.modalIsOpen = true ;
        },
        closeModal : (state)=>{
            state.modalIsOpen = false
        },
        toggleModal : (state)=>{
            state.modalIsOpen = !state.modalIsOpen ;
        },
        setActiveItem : (state , {payload}) =>{
            state.activeItem = payload ;
        }
    }
})

export default modalSlice.reducer ;
export const {closeModal , toggleModal , openModal , setActiveItem} = modalSlice.actions ;