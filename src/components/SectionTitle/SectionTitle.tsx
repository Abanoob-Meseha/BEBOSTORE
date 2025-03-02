import { ReactNode } from "react";

const SectionTitle = ({children} : {children : ReactNode}) => {
  return (
    <h1 className="text-2xl text-blue-950 font-bold mt-20 text-center">
      {children}
    </h1>
  );
};

export default SectionTitle;
