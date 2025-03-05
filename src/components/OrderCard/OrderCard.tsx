import Button from "../Button/Button";
import { MdOutlineDone } from "react-icons/md";

const OrderCard = () => {
  return (
    <div className="p-2 border border-blue-950 rounded-md">
      {/* order tracking section */}
      <div className="flex flex-col gap-6 md:gap-0">
        <div className="flex justify-between items-center">
          <div>
            <h1>
              Order ID: 3540 <span>Pending</span>
            </h1>
            <p className="opacity-70 text-sm">Date: 16 Feb 2025</p>
          </div>
          {/* order Progress */}
          <Button type="primary" className="bg-red-500 hover:bg-red-400">
            Cancel Order
          </Button>
        </div>
        <OrderProgress />
      </div>
      <hr className="my-2" />
      {/* order info */}
      <div></div>
      <hr className="my-2" />
      {/* order products */}
      <div></div>
    </div>
  );
};

export default OrderCard;

const OrderProgress = () => {
  return (
    <div className="relative h-2 md:w-[50%] w-[90%] mx-auto border border-x-0 flex items-center justify-between mb-10 md:mb-2 md:-top-8">
      {/* progress is the width w-[50%] shipped - w-[100%] delivered */}
      <div className="h-2 w-[100%] bg-blue-800 border border-x-0 absolute"></div>
      <div className="absolute w-[102%] flex items-center justify-between top-5 text-sm">
        <p>Placed</p>
        <p>Shipped</p>
        <p>Delivered</p>
      </div>
      <MdOutlineDone
        size={30}
        className="bg-blue-800 text-white rounded-full p-2 font-bold z-10"
      />
      <MdOutlineDone
        size={30}
        className="bg-blue-800 text-white rounded-full p-2 font-bold z-10"
      />
      <MdOutlineDone
        size={30}
        className="bg-blue-800 text-white rounded-full p-2 font-bold z-10"
      />
    </div>
  );
};
