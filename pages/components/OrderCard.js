import React from "react";

const OrderCard = (props) => {
  return (
    <div className="flex p-3 rounded-3xl shadow-md mb-4 items-center">
      <img className="w-32 h-32 mr-10 object-cover" src={props.img} />
      <div className="flex-1">
        <p className="text-2xl font-bold text-gray-900">{props.name}</p>
        <p className="text-blue-700 mb-8 font-bold ">USD {props.price}</p>
        <p className="text-gray-600 font-bold">
          {props.color} <br></br> X {props.amt}
        </p>
        <p className="flex justify-end text-gray-600 italic ml-auto">{props.status}</p>
      </div>
    </div>
  );
};

export default OrderCard;
