import React from "react";
import Card from "./components/OrderCard";
import Filter from "./components/filters";
import Button from "./components/Button";

const orders = () => {
  const orders = [
    {
      id: "86573",
      products: [
        { name: "phantom", price: "888", amt: "1", color: "Slate black", status: "Packing", img: "https://kshopey.com/pub/media/iphone-13_2.jpg" },
        {
          name: "Nokia",
          price: "555",
          amt: "3",
          color: "Blue",
          status: "Processing",
          img: "https://thumbor.forbes.com/thumbor/711x384/https://blogs-images.forbes.com/kevinmurnane/files/2019/04/Header_Samsung.jpg?width=960",
        },
      ],
    },
    {
      id: "984563",
      products: [
        { name: "Sony", price: "777", amt: "2", color: "Slate orange", status: "Packing", img: "https://5.imimg.com/data5/CN/LJ/EL/SELLER-17644043/apple-iphone-xr-mobile-phone-250x250.jpg" },
        { name: "Nokia", price: "666", amt: "1", color: "Wine", status: "Delivered", img: "https://kshopey.com/pub/media/iphone-13_2.jpg" },
      ],
    },
  ];
  return (
    <div className="h-screen px-4">
      <header className="h-28 flex items-center">
        <i className="bi bi-list text-5xl"></i>
      </header>
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>
      <div className="flex flex-col">
        <Filter />
        {orders.map((order, j) => {
          return (
            <div className="mb-5" key={j}>
              <h2 className="text-gray-900 font-bold text-2xl mb-3">Order ID #{order.id}</h2>
              <div>
                {order.products.map((e, i) => {
                  return <Card {...e} key={i}></Card>;
                })}
              </div>
              <div className="flex gap-5 items-center mt-5">
                <Button text={"Messages(2)"} mylink="/messages" color="blue"></Button>
                <Button text="Order Details" mylink="/details" color="red"></Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default orders;
