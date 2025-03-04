"use client"
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type AboutUs_section = {
  title: string;
  description: string;
  img: string;
  reverse?: boolean;
};
const sections: AboutUs_section[] = [
  {
    title: "Who we are",
    description:
      "At BEBOSTORE, we are passionate about delivering high-quality products that meet your needs. Our mission is to provide a seamless shopping experience with top-notch customer service.",
    img: "/aboutus_imgs/who.png",
    reverse: true,
  },
  {
    title: "Our Vision",
    description:
      "We aim to become your go-to online store by offering a curated selection of premium products at competitive prices.",
    img: "/aboutus_imgs/vision.png",
    reverse: false,
  },
  {
    title: "Our Commitment",
    description:
      "We believe in transparency, integrity, and a customer-first approach. Whether you're looking for the latest trends or everyday essentials, BEBOSTORE is here to serve you.",
    img: "/aboutus_imgs/commitment.webp",
    reverse: true,
  },
];
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="">
      {sections.map((section, index) => {
        return (
          <AboutUsSection
            title={section.title}
            description={section.description}
            img={section.img}
            reverse={section.reverse}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AboutUs;

const AboutUsSection = ({
  title,
  description,
  img,
  reverse,
}: AboutUs_section) => {
  return (
    <div
      className={`p-4 md:px-20 flex flex-col gap-4 items-center justify-between mt-5 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-[50%] text-center bg-white rounded-lg shadow-lg p-6" data-aos={reverse ? "fade-right":"fade-left"}>
        <h1 className="text-6xl text-blue-950 font-bold ">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
      </div>
      <Image src={img} alt="banner image" width={500} height={500}/>
    </div>
  );
};
