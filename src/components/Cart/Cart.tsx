import Logo from "../Logo/Logo";
import { Product } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartProduct from "../CartProduct/CartProduct";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

const Cart = () => {
  const { products, totalPrice } = useSelector(
    (store: RootState) => store.cart
  );
  return (
    <div className="container p-2">
      <h1 className="text-center text-3xl font-bold text-blue-950">Cart</h1>
      {/* cart header */}
      <CartHeader totalPrice={totalPrice} itemsNumber={products.length} />
      <hr className="mt-2 mb-2" />
      {/* Cart Items */}
      <CartItems products={products} />
      <hr className="mt-2 mb-2" />
      <Button type="primary" className="w-full">
        Checkout
      </Button>
    </div>
  );
};

export default Cart;

// cart header component -----------------
const CartHeader = ({
  totalPrice,
  itemsNumber,
}: {
  totalPrice: number;
  itemsNumber: number;
}) => {
  return (
    <div className="flex justify-between items-center mt-4 bg-slate-200 p-2 pb-1 rounded-md">
      <div>
        <Logo textSize="1" imgHeight={30} imgWidth={30} />
        <p className="text-blue-900"> {itemsNumber} Items</p>
      </div>
      <div>
        <h1>Total Price</h1>
        <p className="text-blue-900">
          {" "}
          {totalPrice} <span>EGP</span>
        </p>
      </div>
    </div>
  );
};

// cart items list component ---------------------------
const CartItems = ({ products }: { products: Product[] }) => {
  return (
    <div className="h-[47vh] overflow-y-auto">
      {products.length != 0 ? (
        products.map((product, index) => {
          return <CartProduct key={index} {...product} />;
        })
      ) : (
        <div className="flex flex-col items-center">
          <Image
            src={"/features_imgs/online-shop.gif"}
            alt="cart image empty"
            width={200}
            height={200}
          />
          <p className="text-center mt-2">Cart is Empty!</p>
          <Link href={"/products"} className="text-blue-800">
            Discover Products Here
          </Link>
        </div>
      )}
    </div>
  );
};
