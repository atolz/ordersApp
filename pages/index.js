import React from "react";
import Card from "./components/OrderCard";
import Filter from "./components/filters";
import Button from "./components/Button";


const orders = () => {
  const orders = [
    {
      id: "86573",
      products: [
        { name: "phantom", price: "888", amt: "1", color: "Slate black", status: "Packing" },
        { name: "Nokia", price: "555", amt: "3", color: "Blue", status: "Processing" },
      ],
    },
    {
      id: "984563",
      products: [
        { name: "phantom", price: "888", amt: "2", color: "Slate black", status: "Packing" },
        { name: "Nokia", price: "555", amt: "1", color: "Blue", status: "Processing" },
      ],
    },
  ];
  return (
    <div className="h-screen px-5">
      <header className="h-28 flex items-center">
        <i className="bi bi-list text-4xl"></i>
      </header>
      <h1 className="text-4xl font-bold mb-12">My Orders</h1>
      <div className="flex flex-col">
        <Filter />
        {orders.map((order, j) => {
          return (
            <div className="mb-5" key={j}>
              <h2 className="text-gray-900 font-bold text-xl">Order ID #{order.id}</h2>
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
