"use client"
import { RootState } from "@/store"
import { useDispatch, useSelector } from "react-redux"
import { FaRegWindowClose } from "react-icons/fa";
import { closeModal } from "@/features/auth/authSlice";

const Modal = () => {
    const { loginIsOpen, signupIsOpen , modalIsOpen } = useSelector((store : RootState) =>store.auth)
    const dispatch = useDispatch() ;
  return (
    <div className={`${modalIsOpen?"fixed": "hidden"} bg-white rounded-lg z-10 shadow-2xl w-[80%] mx-auto top-18 h-3/4 left-10 p-4`}>
        <FaRegWindowClose className="absolute right-2 top-2" color="red" size={30} onClick={()=>dispatch(closeModal())}/>
        {
            loginIsOpen ? "Welcome in Login" : signupIsOpen? "Welcome to signUp" : "Empty Modal"
        }
    </div>
  )
}

export default Modal