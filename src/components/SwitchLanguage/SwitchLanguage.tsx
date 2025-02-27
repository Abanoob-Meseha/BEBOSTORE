"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "@/redux/features/navbar/navbarSlice";

const SwitchLanguage = () => {
  const { i18n, t } = useTranslation();
  const { toLanguage } = useSelector((store: RootState) => store.navbar);
  const dispatch = useDispatch();
  return (
    <button
      className="flex gap-2 items-center md:gap-1 justify-center"
      onClick={() => {
        i18n.changeLanguage(toLanguage == "AR" ? "ar" : "en");
        dispatch(switchLanguage());
      }}
    >
      <Image
        src={toLanguage == "AR" ? "/flags/ar-flag.png" : "/flags/us-flag.png"}
        alt="Countery Flag"
        width={30}
        height={30}
      />
      <p>{toLanguage}</p>
    </button>
  );
};

export default SwitchLanguage;
