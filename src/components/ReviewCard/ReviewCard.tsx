import { ReviewType } from "@/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ReviewCard = (props: ReviewType) => {
  return (
    <div className="relative flex flex-col items-center rounded-lg bg-gray-200 shadow-lg p-4 text-center gap-1 w-full">
      <Image className="absolute z-10 block mx-auto bg-black -top-10 rounded-full shadow-md" src={props.img} alt="client img" width={100} height={100} />
      <h1 className="mt-12 text-xl text-blue-950">{props.name}</h1>
      <p className="h-[50px] overflow-auto">{props.review}</p>
      <div className="flex mt-2">
        {Array(props.rating)
          .fill(0)
          .map((star, index) => (
            <FaStar key={index} color="gold" className="shadow-3xl"/>
          ))}
        {Array(5 - props.rating)
          .fill(0)
          .map((star, index) => (
            <FaRegStar key={index} />
          ))}
      </div>
    </div>
  );
};

export default ReviewCard;
