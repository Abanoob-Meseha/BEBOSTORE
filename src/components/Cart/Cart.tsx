"use client"
import { RootState } from "@/store";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


const Cart = () => {
    const {totalNum} = useSelector((store: RootState)=>store.cart)
  return (
    <div className="fixed border-2 border-blue-900 bottom-5 right-4 z-30 flex items-center justify-center rounded-full bg-white p-4 shadow-2xl">
        <p className="bg-white rounded-xl p-1 absolute top-0 left-[60%]">{totalNum}</p>
        <FaShoppingCart size={40} color="#1E3A8A"/>
    </div>
  )
}

export default Cart