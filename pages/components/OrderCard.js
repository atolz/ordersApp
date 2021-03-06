import React from "react";

const OrderCard = (props) => {
  return (
    <div className="flex py-3 pl-4 pr-6 rounded-xl shadow-md mb-4 items-center border-t">
      <img className="w-32 h-32 mr-10 object-cover rounded-lg" src={props.img} />
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
