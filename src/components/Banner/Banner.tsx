import Image from "next/image";
import Button from "../Button/Button";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-10 md:px-20 lg:px-40 pt-6 justify-center gap-8 md:gap-16 md:flex-row">
      {/* Text Content */}
      <div className="w-full max-w-2xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950 font-bold">
          Shop Smarter, Save More!
        </h1>
        <p className="my-4 text-lg sm:text-xl text-gray-800 bg-slate-100 p-2 rounded-lg">
          Discover the best deals on top products with fast delivery and secure
          payments. Your ultimate shopping destination!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
          <Button type="primary" className="px-8 py-4">
            Start Shopping
          </Button>
          <Link href={"/#footer"}>
            <Button type="secondary" className="px-8 py-4">
              Download App <FaDownload />
            </Button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-full max-w-4xl">
        <Image
          src={"/shopping-women.webp"}
          width={600}
          height={400}
          alt="Banner Image"
          layout="responsive"
          className="drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
