import { Product } from "@/types";
import Image from "next/image";
import ProductCounter from "../ProductCounter/ProductCounter";
import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { calculateTotalPrice, removeFromCart } from "@/redux/features/cart/cartSlice";

const CartProduct = (props: Product) => {
    const dispatch = useDispatch() ;
  return (
    <div className="p-2 shadow-md mb-1 relative">
      <div className="flex gap-2">
        {/* img */}
        <div className="relative">
          {props.offerPercentage !== 0 && (
            <p className="absolute right-0 text-xs p-2 rounded-xl bg-red-600 shadow-md">
              {props.offerPercentage} %
            </p>
          )}
          <Image src={props.img} alt="product image" width={100} height={150} />
        </div>
        {/* content */}
        <div className="p-2">
          <h1 className="text-xl font-bold text-blue-950">{props.name}</h1>
          <div className="flex gap-2">
            <h1 className="">
              {props.price} <span className="text-sm text-black">EGP</span>
            </h1>
            {props.price !== props.priceBefore && (
              <h1 className="text-red-700 line-through text-sm">
                {props.priceBefore}
              </h1>
            )}
          </div>
        </div>
      </div>
      {/* counter and subTotal */}
      <div className="flex items-center justify-between w-full mt-1">
        <ProductCounter count={props.count} id={props.id}/>
        <p className="justify-end text-blue-900">
          {props.count * props.price} EGP
        </p>
      </div>
      {/* deleteBtn */}
      <FaTrash
        className="bg-red-500 p-2 rounded-md absolute right-1 top-[40%] cursor-pointer hover:text-white"
        size={35}
        onClick={()=>{
            dispatch(removeFromCart({id:props.id}))
            dispatch(calculateTotalPrice())
        }
        }
      />
    </div>
  );
};

export default CartProduct;
