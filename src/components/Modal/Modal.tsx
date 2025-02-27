"use client";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { FaRegWindowClose } from "react-icons/fa";
import { closeModal } from "@/redux/features/auth/authSlice";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";

const Modal = () => {
  const { loginIsOpen, signupIsOpen, modalIsOpen } = useSelector(
    (store: RootState) => store.auth
  );
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        modalIsOpen ? "fixed" : "hidden"
      } top-16 z-10 min-w-full min-h-full backdrop-blur`}
    >
      <div
        className={
          "relative bg-white rounded-lg shadow-2xl top-8 w-[80%] mx-auto p-4 md:w-[30%]"
        }
      >
        <FaRegWindowClose
          className="absolute right-4 top-4 font-bold text-blue-700  hover:text-red-400"
          size={25}
          onClick={() => dispatch(closeModal())}
        />
        {loginIsOpen ? (
          <LoginForm />
        ) : signupIsOpen ? (
          <SignupForm />
        ) : (
          "Empty Modal"
        )}
      </div>
    </div>
  );
};

export default Modal;
