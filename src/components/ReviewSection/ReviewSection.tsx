import { ReviewType } from "@/types";
import ReviewCard from "../ReviewCard/ReviewCard";

const reviews: ReviewType[] = [
  {
    img: "/client.webp",
    name: "Abanoub Meseha",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quo asperiores qui optio enim deleniti repudiandae, doloremque cumque alias quod explicabo ratione ea exercitationem cum id consequatur! Dicta, culpa.",
    rating: 4,
  },
  {
    img: "/client.webp",
    name: "Mina Meseha",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quo asperiores qui optio enim deleniti repudiandae, doloremque cumque alias quod explicabo ratione ea exercitationem cum id consequatur! Dicta, culpa.",
    rating: 5,
  },
  {
    img: "/client.webp",
    name: "Hassan Tawfiq",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quo asperiores qui optio enim deleniti repudiandae, doloremque cumque alias quod explicabo ratione ea exercitationem cum id consequatur! Dicta, culpa.",
    rating: 3,
  },
];
const ReviewSection = () => {
  return (
    <div className="w-[95%] mt-20 flex flex-col items-center overflow-hidden">
        <h1 className="text-2xl text-blue-950 font-bold">Our Clients Reviews</h1>
      <div className="flex flex-row mt-14 gap-10 items-center ">
        {reviews.map((clientReview, index) => {
          const { img, name, review, rating } = clientReview;
          return (
            <ReviewCard
              img={img}
              name={name}
              review={review}
              rating={rating}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
