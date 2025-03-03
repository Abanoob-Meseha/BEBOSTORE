"use client";
import { ReviewType } from "@/types";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

interface sliderProps {
  itemsList : ReviewType []
  intervalDuration : number
}
const Slider = (props : sliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const gapPercent: number = 5;

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (props.itemsList.length));
  };

  useEffect(() => {
    const interval = setInterval(nextItem, props.intervalDuration);
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
    <div className="w-[95%] mx-auto mt-4 flex flex-col items-center overflow-hidden">
      <div
        className="flex transition-transform duration-[2s] ease-in-out mt-16 items-center relative max-w-full gap-5"
        style={{
          transform: `translateX(-${
            currentIndex * ((screenWidth < 768 ? 100 : 30) + gapPercent)
          }%)`,
        }}
      >
        {props.itemsList.map((item, index) => (
          <div key={index} className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
            <ReviewCard {...item} />
          </div>
        ))}
      </div>
      <div className="flex flex-row mx-auto text-center gap-1 mt-6">
        {props.itemsList.map((item, index) => {
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

export default Slider;
