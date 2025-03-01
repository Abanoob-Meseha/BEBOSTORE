import Image from "next/image";
import React from "react";
interface logoprops {
    textSize : string ,
    imgWidth : number ,
    imgHeight : number
}
const Logo = (props : logoprops) => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.png" alt="todo icon" width={props.imgWidth} height={props.imgHeight} />
      <h1 className={`text-${props.textSize}xl font-bold`}>
        BEBO<span className="text-primary">STORE</span>
      </h1>
    </div>
  );
};

export default Logo;
