import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bg-slate-50 bottom-0 left-1/2 w-fit px-4 -translate-x-1/2 text-center shadow-md rounded-lg mt-10">
      <h1>
        All Rights reserved to{" "}
        <Link
          href="https://www.linkedin.com/in/abanoob-meseha"
          className="text-blue-950 font-bold"
        >
          @Abanoub Meseha
        </Link>{" "}
        2025
      </h1>
    </footer>
  );
};

export default Footer;
