"use client";
import { openCart, toggleCart } from "@/redux/features/cart/cartSlice";
import { openModal, setActiveItem, toggleModal } from "@/redux/features/modal/modalSlice";
import { RootState } from "@/redux/store";
import { modalItem } from "@/types";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const CartBtn = () => {
  const { totalNum } = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();
  return (
    <div
      className="fixed border-2 border-blue-900 bottom-5 right-4 z-30 flex items-center justify-center rounded-full bg-white p-4 shadow-2xl hover:bg-blue-200 cursor-pointer"
      onClick={() => {
        dispatch(toggleModal());
        dispatch(setActiveItem(modalItem.cart));
      }}
    >
      <p className="bg-white rounded-xl p-1 absolute top-0 left-[60%]">
        {totalNum}
      </p>
      <FaShoppingCart size={40} color="#1E3A8A" />
    </div>
  );
};

export default CartBtn;
