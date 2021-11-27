import React from "react";
import Card from "./components/OrderCard";
import Button from "./components/Button";
import Footer from "./components/footer";
import TimeLine from "./components/timeline";
import Link from "next/link";

const status = () => {
  const details = {
    name: "Phantom",
    price: "888",
    amt: "2",
    color: "Slate black",
    status: "Packing",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/1/DR/QH/SI/14753644/iphone-se2-1-250x250.jpg",
  };
  return (
    <div className="flex flex-col h-screen relative justify-between top-0 left-0">
      <header className="h-28 flex items-center justify-between sticky w-screen pad bg-white top-0 left-0 relative">
        <Link
          mylink
          href={{
            pathname: "/",
          }}
        >
          <i className="bi bi-arrow-left text-4xl font-extrabold"></i>
        </Link>
        <i className="bi bi-three-dots-vertical text-4xl"></i>
      </header>

      <div className="flex-1 pad overflow-y-scroll">
        <div className="h-16 shadow-sm rounded-lg items-center flex mb-3 px-4">
          <img
            className="mr-7 w-11 object-cover rounded-lg"
            src="https://w7.pngwing.com/pngs/283/160/png-transparent-xiaomi-logo-portable-document-format-smartphone-encapsulated-postscript-free-angle-electronics-text.png"
          />
          <p className="mr-7">Xiaomi</p>
          <i className="bi bi-chevron-right text-2xl text-gray-600 ml-auto font-bold"></i>
        </div>
        <Card {...details}></Card>
        <Button className="mb-4" text={"View Product"} color="blue"></Button>
        <div className="border-t border-b border-gray-400 py-5 mt-7 flex-1">
          <h2 className="text-gray-900 font-bold text-xl mb-3">Delivery Status</h2>
          <TimeLine />
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-600 text-base font-semibold">Parcel packed for sending</p>
            <p className="text-gray-900 text-base">10 Dec 2020</p>
          </div>
        </div>
        <div className="py-5 flex-1">
          <h2 className="text-gray-900 font-bold text-xl mb-3">Payment Information</h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-base font-semibold mb-3">Merchandise subtotal</p>
            <p className="text-gray-900 text-base mb-3">USD 1000</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600 text-base font-semibold ">Shipping: Standard Economy</p>
            <p className="text-gray-900 text-base">USD 10</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-900 text-base font-semibold">Order Total</p>
            <p className="text-gray-900 text-base">USD 170</p>
          </div>
        </div>
      </div>

      <Footer>
        <div className="flex gap-5 items-center flex-1">
          <Button mylink="/messages" text={"Messages(2)"} color="blue"></Button>
          <Button mylink="/" text="Cancel Order" color="red"></Button>
        </div>
      </Footer>
    </div>
  );
};

export default status;
