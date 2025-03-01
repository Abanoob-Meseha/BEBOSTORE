import Image from "next/image";
import Logo from "../Logo/Logo";
import { FaPlus, FaMinus } from "react-icons/fa";

interface product {
  name: string;
  price: number;
  offerPercentage: number;
  priceBefore: number;
  count: number;
  img: string;
}
const products: product[] = [
  {
    name: "Nike Shoes",
    offerPercentage: 10,
    priceBefore: 350,
    price: 250,
    count: 20,
    img: "/products/nike.avif",
  },
  {
    name: "mi active 4 airbuds",
    offerPercentage: 0,
    priceBefore: 400,
    price: 400,
    count: 3,
    img: "/products/airbuds.png",
  },
  {
    name: "iphone 15 pro",
    offerPercentage: 15,
    priceBefore: 4000,
    price: 3500,
    count: 1,
    img: "/products/iphone.webp",
  },

];
const Cart = () => {
  return (
    <div className="container p-2">
      <h1 className="text-center text-3xl font-bold text-blue-950">Cart</h1>
      {/* cart header */}
      <div className="flex justify-between items-center mt-4 bg-slate-200 p-2 rounded-md">
        <div>
          <Logo textSize="1" imgHeight={30} imgWidth={30} />
          <p className="text-blue-900"> 6 items</p>
        </div>
        <div>
          <h1>Total Price</h1>
          <p className="text-blue-900">
            {" "}
            350.55 <span>EGP</span>
          </p>
        </div>
      </div>
      <hr className="mt-2 mb-2" />
      <div className="h-[50vh] overflow-y-scroll">
        {/* Cart Items */}
        {products.map((product, index) => {
          return <CartProduct key={index} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Cart;

export const CartProduct = (props: product) => {
  return (
    <div className="p-2 shadow-md mb-1">
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
      <div className="flex items-center justify-between w-full mt-1 pl-3">
        <ProductCounter count={props.count} />
        <p className="justify-end text-blue-900">
          {props.count * props.price} EGP
        </p>
      </div>
    </div>
  );
};

export const ProductCounter = ({ count }: { count: number }) => {
  const iconStyle: string = "text-white bg-blue-800 rounded-full p-2";
  return (
    <div className="flex gap-4 items-center mt-1">
      <FaMinus size={25} className={iconStyle} />
      <p className="w-5 text-center">{count}</p>
      <FaPlus size={24} className={iconStyle} />
    </div>
  );
};
