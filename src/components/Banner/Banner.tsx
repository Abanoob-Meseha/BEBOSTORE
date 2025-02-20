import Image from "next/image";
import Button from "../Button/Button";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-10 md:px-20 lg:px-40 py-10 justify-center gap-8 md:gap-16 md:flex-row mt-5 md:mt-10">
      {/* Text Content */}
      <div className="w-full max-w-2xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950 font-bold">
          Organize your work and life, Easily.
        </h1>
        <p className="my-4 text-lg sm:text-xl text-gray-800 bg-slate-100 p-2 rounded-lg">
          Simplify life for both you and your team with the world’s #1 task
          manager and to-do list app.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
          <Button type="primary" className="px-6">
            Start For Free
          </Button>
          <Button type="secondary" className="px-6">
            Download App <FaDownload />
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full max-w-4xl">
        <Image
          src={"/timeTable.png"}
          width={600}
          height={400}
          alt="Banner Image"
          layout="responsive"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;