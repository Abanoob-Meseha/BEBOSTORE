import { ReactNode } from "react";

interface btnProps {
  children: ReactNode;
  type: "primary" | "secondary"
  className?: string ;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean
}
const Button  = (props: btnProps) => {
  const disabledStyle: string = props.disabled ? "opacity-50 cursor-not-allowed":"" ;
  const baseStyle: string = "flex justify-center gap-1 items-center px-4 py-2 rounded-xl shadow-2xl"
  const primaryStyle: string = " text-white  bg-blue-900 hover:bg-blue-700"
  const secondaryStyle: string = "bg-slate-200  hover:bg-slate-300"
  return props.type == "primary" ? (
    <button disabled={props.disabled} onClick={props.onClick} className={`${baseStyle} ${primaryStyle} ${disabledStyle} ${props.className}`}>
      {props.children}
    </button>
  ) : (
    <button disabled={props.disabled} onClick={props.onClick} className={`${baseStyle} ${secondaryStyle} ${disabledStyle} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
