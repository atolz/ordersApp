import React from "react";

const SliderCard = (props) => {
  return (
    <div className="flex px-3 rounded-2xl h-24 shadow-sm mb-4 items-center mr-6 cardd whitespace-nowrap">
      <img className="w-10 h-10 object-cover mr-5" src="https://www.shawacademy.com/assets/course-cards/mycourse/graphic-design.png" />
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
