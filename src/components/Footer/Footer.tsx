import Link from "next/link";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  const iconStyle: string =
    "bg-blue-900 p-2 rounded-full cursor-pointer hover:-translate-x-1 hover:bg-blue-950";
  const downloadBtnStyle: string =
    "border-2 p-2 px-4 bg-black flex gap-1 text-white rounded-lg items-center transition ease-in-out duration-800 hover:border-blue-800  hover:bg-white hover:text-blue-800";
  return (
    <footer id="footer" className="relative bg-white w-full pt-6 text-center shadow-2xl mt-10 flex flex-col items-center">
      <Logo textSize="4" imgWidth={80} imgHeight={80}/>
      {/* App Download */}
      <div>
        <h1 className="text-xl mt-2 text-blue-950">App is now available on:</h1>
        <div className="flex items-center gap-6 mt-2 mb-4">
          <Link href={""} className={downloadBtnStyle}>
            <FaGooglePlay size={28} /> Google Play
          </Link>
          <Link href={""} className={downloadBtnStyle}>
            <FaApple size={30} /> App Store
          </Link>
        </div>
      </div>
      {/* social media Links */}
      <div className="flex flex-row my-4 gap-3 items-center">
        <TbBrandYoutubeFilled size={45} className={iconStyle} color="white" />
        <AiFillInstagram size={45} color="white" className={iconStyle} />
        <RiFacebookCircleFill size={45} color="white" className={iconStyle} />
        <AiFillGooglePlusCircle size={45} color="white" className={iconStyle} />
        <FaSquareXTwitter size={43} color="white" className={iconStyle} />
      </div>
      {/* copywrites */}
      <h1 className="w-full bg-blue-900 py-2">
        All Rights reserved to{" "}
        <Link
          href="https://www.linkedin.com/in/abanoob-meseha"
          className="text-white font-bold"
        >
          @Abanoub Meseha
        </Link>{" "}
        2025
      </h1>
    </footer>
  );
};

export default Footer;
