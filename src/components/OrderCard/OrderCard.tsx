import Button from "../Button/Button";
import { MdOutlineDone } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import products from "@/staticData/products";
import Image from "next/image";

const OrderCard = () => {
  return (
    <div className="p-2 border border-blue-950 rounded-md">
      {/* order tracking section */}
      <OrderTrackingSection />
      <hr className="my-4" />
      {/* order info */}
      <OrderInfoSection />
      <hr className="my-4" />
      {/* order products */}
      <OrderProductsSection />
    </div>
  );
};

export default OrderCard;

const OrderTrackingSection = () => {
  return (
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
  );
};
const OrderProgress = () => {
  const iconsStyle: string =
    "bg-blue-800 text-white rounded-full p-2 font-bold z-10";
  const progress = 50;
  return (
    <div className="relative h-2 md:w-[50%] w-[90%] mx-auto border border-x-0 flex items-center justify-between mb-10 md:mb-2 md:-top-8">
      {/* progress is the width w-[50%] shipped - w-[100%] delivered */}
      <div
        className={`h-2 w-[${progress}%] bg-blue-800 border border-x-0 absolute`}
      ></div>
      <div className="absolute w-[102%] flex items-center justify-between top-5 text-sm">
        <p>Placed</p>
        <p>Shipped</p>
        <p>Delivered</p>
      </div>
      <MdOutlineDone size={30} className={iconsStyle} />
      {progress < 50 ? (
        <MdLocalShipping size={30} className={iconsStyle} />
      ) : (
        <MdOutlineDone size={30} className={iconsStyle} />
      )}
      {progress < 100 ? (
        <FaHome size={30} className={iconsStyle} />
      ) : (
        <MdOutlineDone size={30} className={iconsStyle} />
      )}
    </div>
  );
};

const OrderInfoSection = ()=>{
  return(
    <div className="flex flex-col md:flex-row gap-2 md:gap-14 text-sm">
      <div>
        <h1 className="font-bold">Contact</h1>
        <p>Abanoub Meseha</p>
        <p>+20 1206010738</p>
        <p>abanoob.meseha@gmail.com</p>
      </div>
      <div className="w-[2px] h-20 bg-black md:block hidden"></div>
      <div>
        <h1 className="font-bold">Shipping Address</h1>
        <p>51 Abu Dawoud El-Zahery St., off Makram Ebeid St.</p>
      </div>
      <div className="w-[2px] h-20 bg-black md:block hidden"></div>
      <div>
        <h1 className="font-bold">Payment</h1>
        <p>Visa **** 4567</p>
        <p>Shipping fee: 20 EGP</p>
        <p>Total Paid: 300 EGP</p>
      </div>
    </div>
  )
};

const OrderProductsSection = ()=>{
  return(
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:h-[22vh] h-[18vh] overflow-y-auto">
      {
        products.map((product , index)=>{
          const {img , count , name , price} = product ;
          return(
            <div key={index} className="flex items-center gap-2">
              <Image src={img} alt={name} width={100} height={100}/>
              <div>
                <h1>{name}</h1>
                <p>{count} x {price} EGP</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}