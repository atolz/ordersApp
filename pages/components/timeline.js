import React from "react";

const timeline = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Dot active="true"></Dot>
      <Dot active="true"></Dot>
      <Dot></Dot>
      <Dot></Dot>
      {/* <div className="w-full h-1 bg-gray-700"></div> */}
    </div>
  );
};

const Dot = (props) => {
  return (
    <div className="flex items-center flex-1">
      {props.active && (
        <div className="dot bg-blue-500 flex items-center justify-center">
          <i className="bi bi-check-lg text-white"></i>
        </div>
      )}
      {!props.active && <div className="dot border-2 rounded-full flex items-center justify-center"></div>}
      {props.active && <div className={`w-full h-1 bg-blue-500`}></div>}
      {!props.active && <div className={`w-full h-1 bg-gray-700`}></div>}
    </div>
  );
};

export default timeline;
