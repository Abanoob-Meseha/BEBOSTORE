import Button from "@/components/Button/Button";
import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import orders from "@/staticData/orders";
import OrderCard from "@/components/OrderCard/OrderCard";

const addresses: string[] = [
  "51 Abu Dawoud El-Zahery St., off Makram Ebeid St.",
  " 122 Gesr El Suez St., GESR EL SUEZ",
];
const Dashboard = () => {
  return (
    <div className="mt-4 p-4">
      {/* User info section */}
      <div className="bg-white rounded-md shadow-md p-4 md:w-[70%] w-[95%] mx-auto">
        <UserInfoSection />
        <hr className="my-2" />
        <AddressSection />
        <hr className="my-2" />
        <h1 className="text-xl">Your Orders</h1>
        <div className="h-[70%] overflow-y-auto flex flex-col gap-2 mt-2">
          {orders.map((order, index) => {
            return <OrderCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const UserInfoSection = () => {
  return (
    <div className="flex items-center gap-2 py-2">
      <Image
        src={"/client.webp"}
        alt="Profile Image"
        width={80}
        height={80}
        className="rounded-full border border-blue-950"
      />
      <div>
        <h1 className="text-xl text-blue-950">Abanoub Meseha</h1>
        <div className="flex gap-4 items-center">
          <p className="text-sm">
            Email: abanoob.meseha@gmail.com , Phone: +20 1206010738
          </p>
          <MdEdit
            className="text-blue-900 hover:scale-105 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

const AddressSection = () => {
  return (
    <div className="p-2">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-2">
        {addresses.map((address, index) => {
          return (
            <div
              key={index}
              className="flex p-2 gap-2 items-center border border-blue-950 rounded-md"
            >
              <MdLocationOn size={25} />
              <p>{address}</p>
            </div>
          );
        })}
      </div>
      <Button type="primary">
        <LuPlus /> Add new address
      </Button>
    </div>
  );
};
