import React from "react";

const SliderCard = (props) => {
  return (
    <div className="flex px-3 rounded-2xl h-24 shadow-sm mb-4 items-center mr-6 cardd whitespace-nowrap border">
      <img
        className="w-12 h-12 object-cover mr-5 rounded-lg"
        src="https://thumbor.forbes.com/thumbor/711x384/https://blogs-images.forbes.com/kevinmurnane/files/2019/04/Header_Samsung.jpg?width=960"
      />
      <div className="flex-1 flex-col flex justify-center whitespace-nowrap">
        <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">{props.name}</p>
        <p className="text-blue-700 font-bold whitespace-nowrap ">USD {props.price}</p>
      </div>
      <p className="text-gray-600 font-bold">
        {props.color} <br></br> X {props.amt}
      </p>
    </div>
  );
};

export default SliderCard;
