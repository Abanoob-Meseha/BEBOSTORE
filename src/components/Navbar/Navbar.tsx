"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { HiOutlineMenu } from "react-icons/hi";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeNav, toggleNav } from "@/redux/features/navbar/navbarSlice";
import { openLogin, openSignup } from "@/redux/features/auth/authSlice";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";

const Navbar = () => {
  const isOpen = useSelector((store: RootState) => store.navbar.isOpen);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  return (
    <div className="sticky top-0 w-[95%] bg-white p-4 mx-auto rounded-xl shadow-2xl flex items-center justify-between z-50">
      {/* logo Section */}
      <Link href={"/"} className="flex items-center gap-2">
        <Image src="/logo.png" alt="todo icon" width={50} height={50} />
        <h1 className="text-3xl font-bold">
          BEBO<span className="text-primary">STORE</span>
        </h1>
      </Link>
      {/* menu icon for sm Screens */}
      <div className="flex md:hidden ">
        <HiOutlineMenu size={35} onClick={() => dispatch(toggleNav())} />
      </div>
      {/* nav items section */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col absolute top-[70px] w-[90%] left-[5%] items-center border-t-0 border-2 md:border-none border-blue-950 bg-blue-100 rounded-md p-4 gap-4 text-center md:flex md:flex-row md:bg-transparent md:static md:p-0 md:justify-between md:w-[60%] z-40`}
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
              dispatch(openLogin());
              dispatch(closeNav());
            }}
          >
            {" "}
            {t("nav_login")}{" "}
          </Button>
          <Button
            type="primary"
            onClick={() => {
              dispatch(openSignup());
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
