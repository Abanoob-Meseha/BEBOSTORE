import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-[95%] bg-white p-4 mx-auto rounded-xl shadow-2xl flex items-center">
      <Link href={"/"} className="basis-1/4 flex items-center gap-2">
          <Image src="/logo.png" alt="todo icon" width={40} height={40} />
          <h1 className="text-3xl font-bold">TODO</h1>
      </Link>
      <div className="basis-2/4 flex gap-6 justify-center">
        <Link
          className="transition duration-800 ease-in-out hover:underline hover:text-blue-900 underline-offset-[30px]"
          href={"/myTodos"}
        >
          My TODOs
        </Link>
        <Link
          className="transition duration-800 ease-in-out hover:underline hover:text-blue-900 underline-offset-[30px]"
          href={"/aboutUs"}
        >
          About Us
        </Link>
        <Link
          className="transition duration-800 ease-in-out hover:underline hover:text-blue-900 underline-offset-[30px]"
          href={"/contactUs"}
        >
          Contact Us
        </Link>
      </div>
      <div className="basis-1/4 flex gap-2 justify-end">
        <Button type="secondary" > Login </Button>
        <Button type="primary" > Sign Up </Button>
      </div>
    </div>
  );
};

export default Navbar;
