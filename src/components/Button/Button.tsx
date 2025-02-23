import { ReactNode } from "react";

interface btnProps {
  children: ReactNode;
  type: "primary" | "secondary"
  className?: string ;
  onClick?: () => void
}
const Button  = (props: btnProps) => {
  return props.type == "primary" ? (
    <button onClick={props.onClick} className={"flex justify-center gap-1 items-center px-4 py-2 rounded-xl text-white  bg-blue-900 hover:bg-blue-700 cursor-pointer"+ props.className}>
      {props.children}
    </button>
  ) : (
    <button onClick={props.onClick} className={"flex justify-center gap-1 items-center px-4 py-2 bg-slate-200 rounded-xl hover:bg-slate-300 cursor-pointer"+ props.className}>
      {props.children}
    </button>
  );
};

export default Button;
