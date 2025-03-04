"use client"
import { Product } from "@/types";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart, calculateTotalPrice } from "@/redux/slices/cart/cartSlice";

interface productCardProps {
  product: Product;
}
const ProductCard = ({ product }: productCardProps) => {
  return (
    <div className="rounded-2xl shadow-2xl bg-white">
      {/* Card image Section */}
      <CardImage {...product} />
      {/* Card text section */}
      <CardText {...product} />
      {/* rating and Add to Cart section */}
      <CardActions {...product} />
    </div>
  );
};

export default ProductCard;

const CardImage = ({ img, offerPercentage, name }: Product) => {
  return (
    <div className="relative w-full md:h-52 h-48">
      <Image
        src={img || "/logo.png"}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-2xl"
        priority
      />
      {/* offer percent */}
      {offerPercentage !== 0 && (
        <p className="absolute left-2 top-2 text-xs p-2 rounded-lg bg-red-600 shadow-md text-white">
          -{offerPercentage}%
        </p>
      )}
      {/* love Btn */}
      <FaHeart
        className="absolute bg-slate-200 p-1 rounded-md text-slate-500 transition-colors duration-200 ease-linear drop-shadow-2xl cursor-pointer top-3 right-3 hover:text-red-700 font-bold"
        size={27}
      />
    </div>
  );
};

const CardText = ({ name, price, priceBefore }: Product) => {
  return (
    <div className="md:p-2 flex flex-col md:flex-row justify-between mt-1 md:h-10 items-center">
      <h1 className="font-bold truncate">{name}</h1>
      <div className="flex md:flex-col gap-2 md:items-start items-center">
        <p className="text-blue-950">
          {price} <span className="text-xs">EGP</span>
        </p>
        {price !== priceBefore && (
          <p className="line-through text-red-700 md:-mt-2 text-sm">
            {priceBefore}
          </p>
        )}
      </div>
    </div>
  );
};

const CardActions = (product: Product) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-2 items-center mt-1">
      <div className="flex gap-1 items-center text-slate-800">
        <CiStar size={20} />
        <p>{product.rating}</p>
      </div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(addToCart({ product }));
          dispatch(calculateTotalPrice());
        }}
      >
        <span className="text-sm">ADD</span>
        <MdOutlineAddShoppingCart size={15} />
      </Button>
    </div>
  );
};
