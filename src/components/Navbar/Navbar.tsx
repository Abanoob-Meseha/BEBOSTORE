"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { HiOutlineMenu } from "react-icons/hi";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeNav, toggleNav } from "@/redux/slices/navbar/navbarSlice";
import { openLogin, openSignup } from "@/redux/slices/auth/authSlice";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import { openModal, setActiveItem } from "@/redux/slices/modal/modalSlice";
import { modalItem } from "@/types";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { isOpen } = useSelector((store: RootState) => store.navbar);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  return (
    <div className="sticky top-0 w-[95%] bg-white p-4 mx-auto rounded-xl shadow-2xl flex items-center justify-between z-50">
      {/* logo Section */}
      <Link href={"/"}>
        <Logo textSize="3" imgHeight={50} imgWidth={50} />
      </Link>
      {/* menu icon for sm Screens */}
      <div className="flex md:hidden ">
        <HiOutlineMenu size={35} onClick={() => dispatch(toggleNav())} />
      </div>
      {/* nav items section */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col absolute top-[70px] w-[92%] left-[4%] items-center border-t-0 border-2 md:border-none border-blue-950 rounded-t-none bg-slate-100 rounded-lg p-4 gap-4 text-center md:flex md:flex-row md:bg-transparent md:static md:p-0 md:justify-between md:w-[60%] z-40 transition-all duration-1000 ease-in-out`}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <NavLink href="/">{t("nav_home")}</NavLink>
          <NavLink href="/products">{t("nav_products")}</NavLink>
          <NavLink href="/aboutUs">{t("nav_aboutUs")}</NavLink>
          <NavLink href="/contactUs">{t("nav_contactUs")}</NavLink>
        </div>
        <div className="flex flex-col w-full md:w-auto gap-2 md:justify-end md:flex-row">
          <Button
            type="secondary"
            onClick={() => {
              dispatch(setActiveItem(modalItem.login));
              dispatch(openModal());
              dispatch(closeNav());
            }}
          >
            {" "}
            {t("nav_login")}{" "}
          </Button>
          <Button
            type="primary"
            onClick={() => {
              dispatch(setActiveItem(modalItem.signup));
              dispatch(openModal());
              dispatch(closeNav());
            }}
          >
            {" "}
            {t("nav_signup")}{" "}
          </Button>
          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// NavLink Component
interface navLinkProps {
  children: ReactNode;
  href: string;
}
const NavLink = (props: navLinkProps) => {
  return (
    <Link
      className="transition duration-800 ease-in-out hover:underline hover:text-blue-900 underline-offset-[10px] block md:hover:underline-offset-[30px]"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};
