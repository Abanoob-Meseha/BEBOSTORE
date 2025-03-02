"use client";
import { openCart, toggleCart } from "@/redux/slices/cart/cartSlice";
import { openModal, setActiveItem, toggleModal } from "@/redux/slices/modal/modalSlice";
import { RootState } from "@/redux/store";
import { modalItem } from "@/types";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const CartBtn = () => {
  const { totalNum , products } = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();
  return (
    <div
      className="fixed border-2 border-blue-900 bottom-5 right-4 z-30 flex items-center justify-center rounded-full bg-white p-4 shadow-2xl hover:bg-blue-200 cursor-pointer"
      onClick={() => {
        dispatch(toggleModal());
        dispatch(setActiveItem(modalItem.cart));
      }}
    >
      <p className="text-white bg-blue-950 rounded-full p-1 px-2 font-bold absolute top-0 left-[60%] shadow-md">
        {products.length}
      </p>
      <FaShoppingCart size={40} color="#1E3A8A" />
    </div>
  );
};

export default CartBtn;
