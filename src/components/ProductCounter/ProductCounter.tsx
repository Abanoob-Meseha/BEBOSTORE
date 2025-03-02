import {
  calculateTotalPrice,
  decreaseProductCount,
  increaseProductCount,
} from "@/redux/slices/cart/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductCounter = ({ count, id }: { count: number; id: number }) => {
  const dispatch = useDispatch();
  const iconStyle: string =
    "text-white bg-blue-800 rounded-full p-2 hover:bg-blue-700 cursor-pointer";
  return (
    <div className="flex gap-4 items-center mt-1">
      <FaMinus
        size={25}
        className={iconStyle}
        onClick={() => {
          dispatch(decreaseProductCount({ id }));
          dispatch(calculateTotalPrice());
        }}
      />
      <p className="w-6 text-center">{count}</p>
      <FaPlus
        size={24}
        className={iconStyle}
        onClick={() => {
          dispatch(increaseProductCount({ id }));
          dispatch(calculateTotalPrice());
        }}
      />
    </div>
  );
};

export default ProductCounter;
