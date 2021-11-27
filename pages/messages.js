import React from "react";
import SliderCard from "./components/SliderCard";
import Footer from "./components/footer";
import Pill from "./components/Pill";
import MessBox from "./components/MessBox";
import Link from 'next/link'

const message = () => {
  const details = { name: "phantom", price: "888", amt: "2", color: "Slate black", status: "Packing" };

  return (
    <div className="h-screen flex relative flex-col top-0 left-0">
      <header className="h-28 flex items-center justify-between sticky w-screen px-4">
        <Link href="/">
          <i className="bi bi-arrow-left text-4xl"></i>
        </Link>
        <div className="flex items-center">
          <img
            className="mr-7 w-11 object-cover mr-7"
            src="https://w7.pngwing.com/pngs/283/160/png-transparent-xiaomi-logo-portable-document-format-smartphone-encapsulated-postscript-free-angle-electronics-text.png"
          />
          <i className="bi bi-chevron-right text-2xl text-gray-600 ml-auto font-bold"></i>
        </div>
      </header>

      <div className="flex overflow-x-scroll flex-row w-screen">
        <SliderCard {...details}></SliderCard>
        <SliderCard {...details}></SliderCard>
        {/* <SliderCard {...details}></SliderCard>
        <SliderCard {...details}></SliderCard> */}
        <hr></hr>
      </div>

      <div className="flex-1 flex-col relative overflow-y-scroll">
        <div className="flex justify-center flex-col items-center">
          <p className="text-gray-500 text-xl font-semibold mb-2">18, Oct, 2020</p>
          <p className="text-gray-200 text-sm">20:30</p>
        </div>
        <MessBox></MessBox>
      </div>

      <div className="flex overflow-x-scroll p-4">
        <Pill text="You're welcome"></Pill>
        <Pill text="Any order update"></Pill>
        <Pill text="Any order update"></Pill>
        <Pill text="Any order update"></Pill>
      </div>

      <Footer>
        <div className="flex justify-between items-center w-full">
          <i className="bi bi-plus text-6xl text-gray-900 mr-3"></i>
          <input className="p-4 rounded-2xl bg-gray-200 flex-1" placeholder="Send a message..." />
          <i className="bi bi-hand-thumbs-up-fill text-5xl text-blue-700 ml-10"></i>
        </div>
      </Footer>
    </div>
  );
};

export default message;
