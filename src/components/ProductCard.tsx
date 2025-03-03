import { Product } from "@/types";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Button from "./Button/Button";

interface productCardProps {
  product: Product;
}
const ProductCard = ({ product }: productCardProps) => {
  return (
    <div className="rounded-2xl shadow-2xl bg-white">
      {/* product image */}
      <div className="relative w-full md:h-52 h-48">
        <Image
          src={product.img || "/logo.png"}
          alt={product.name}
          fill
          className="object-cover rounded-2xl"
          priority
        />
        {/* offer percent */}
        {product.offerPercentage !== 0 && (
          <p className="absolute left-2 top-2 text-xs p-2 rounded-lg bg-red-600 shadow-md text-white">
            -{product.offerPercentage}%
          </p>
        )}
        {/* love Btn */}
        <FaHeart
          className="absolute bg-slate-200 p-1 rounded-md text-slate-500 transition-colors duration-200 ease-linear drop-shadow-2xl cursor-pointer top-3 right-3 hover:text-red-700 font-bold"
          size={27}
        />
      </div>
      {/* text section */}
      <div className="md:p-2 flex flex-col md:flex-row justify-between mt-1 md:h-10 items-center">
        <h1 className="font-bold truncate">{product.name}</h1>
        <div className="flex md:flex-col gap-2 md:items-start items-center">
          <p className="text-blue-950">{product.price} <span className="text-xs">EGP</span></p>
          {product.price !== product.priceBefore && (
            <p className="line-through text-red-700 md:-mt-2 text-sm">
              {product.priceBefore}
            </p>
          )}
        </div>
      </div>
      {/* rating and cart section */}
      <div className="flex justify-between p-2 items-center mt-1">
        <div className="flex gap-1 items-center text-slate-800">
          <CiStar size={20} />
          <p>{product.rating}</p>
        </div>
        <Button type="primary">
            <span className="text-sm">ADD</span>
            <MdOutlineAddShoppingCart size={15}/>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
