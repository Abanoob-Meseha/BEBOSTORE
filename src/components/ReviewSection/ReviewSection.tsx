"use client";
import { ReviewType } from "@/types";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

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
  {
    img: "/client.webp",
    name: "Ibrahim Tawfiq",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quo asperiores qui optio enim deleniti repudiandae, doloremque cumque alias quod explicabo ratione ea exercitationem cum id consequatur! Dicta, culpa.",
    rating: 4,
  },
  {
    img: "/client.webp",
    name: "Ibrahim Shawqy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quo asperiores qui optio enim deleniti repudiandae, doloremque cumque alias quod explicabo ratione ea exercitationem cum id consequatur! Dicta, culpa.",
    rating: 5,
  },
  {
    img: "/client.webp",
    name: "Ibrahim el Daw",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quo asperiores qui optio enim deleniti repudiandae, doloremque cumque alias quod explicabo ratione ea exercitationem cum id consequatur! Dicta, culpa.",
    rating: 3,
  },
];
const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const gapPercent: number = 5;

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-[95%] mx-auto mt-20 flex flex-col items-center overflow-hidden">
      <h1 className="text-2xl text-blue-950 font-bold">Our Clients Reviews</h1>
      <div
        className="flex transition-transform duration-1000 ease-in-out mt-16 items-center relative max-w-full gap-5"
        style={{
          transform: `translateX(-${
            currentIndex * ((screenWidth < 768 ? 100 : 30) + gapPercent)
          }%)`,
        }}
      >
        {reviews.map((clientReview, index) => (
          <div key={index} className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
            <ReviewCard {...clientReview} />
          </div>
        ))}
      </div>
      <div className="flex flex-row mx-auto text-center gap-1 mt-6">
        {reviews.map((clientReview, index) => {
          return index === currentIndex ? (
            <GoDotFill key={index} />
          ) : (
            <GoDot key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
