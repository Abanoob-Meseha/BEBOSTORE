"use client";
import { FaFacebookF } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="relative mt-5 md:mt-10 mx-auto w-[90%] md:w-[60%] rounded-md shadow-2xl bg-white p-8 flex flex-col md:flex-row items-center justify-between">
        {/* form Section */}
        <ContactFormSection />
        {/* image and contact info */}
        <ContactInfoSection />
        {/* social icons section */}
        <div className="absolute bottom-0 -right-0 rounded-md bg-blue-950 flex flex-col gap-4 py-4 p-2">
          <FaFacebookF size={20} color="white" className="cursor-pointer hover:scale-105"/>
          <SiWhatsapp size={20} color="white" className="cursor-pointer hover:scale-105"/>
          <FaXTwitter size={20} color="white" className="cursor-pointer hover:scale-105"/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    console.log({ name, email, message });
  };
  return (
    <div className="w-full md:w-[50%]">
      <h1 className="text-5xl text-blue-950 font-bold">Get In Touch</h1>
      <p className="mt-2">We are here for you! How can we help you?</p>
      <div className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          className="bg-blue-100 p-2 rounded-md w-full pl-4"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="bg-blue-100 p-2 rounded-md w-full pl-4"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows={6}
          className="bg-blue-100 p-2 rounded-md w-full pl-4"
          placeholder="Go ahead we are listening.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

const ContactInfoSection = () => {
  return (
    <div className="w-full md:w-[40%]">
      <Image
        src={"/contact-us.png"}
        alt="contact us image"
        width={500}
        height={500}
      />
      {/* contact info */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <IoLocationSharp
            className="text-blue-950 border border-blue-950 p-2 rounded-full"
            size={40}
          />
          <p>Cairo, Egypt</p>
        </div>
        <div className="flex gap-4 items-center">
          <IoMdCall
            className="text-blue-950 border border-blue-950 p-2 rounded-full"
            size={40}
          />
          <p>+20 01206010738</p>
        </div>
        <div className="flex gap-4 items-center">
          <IoIosMail
            className="text-blue-950 border border-blue-950 p-2 rounded-full"
            size={40}
          />
          <p>abanoob.meseha@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
