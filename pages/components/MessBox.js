import React from "react";

const MessBox = () => {
  const messages = [
    { text: "Is there available stock for Mix 3 in Gold?", type: "sender" },
    { text: "Yes, we have more stock for gold.", type: "reciever" },
    { text: "Awesome, Thanks! Will get a set soon.", type: "sender" },
    { text: "Awesome, Thanks! Will get a set soon.", type: "sender" },
    { text: "Awesome, Thanks! Will get a set soon.", type: "sender" },
    { text: "Awesome, Thanks! Will get a set soon.", type: "sender" },
    { text: "Awesome, Thanks! Will get a set soon.", type: "sender" },
  ];
  return (
    <div className="p-4">
      {messages.map((e) => {
        return (
          <>
            <Box {...e}></Box>
          </>
        );
      })}
    </div>
  );
};

const Box = (props) => {
  return (
    <>
      {props.type == "sender" && <div className="w-80 p-3 mb-6 text-white bg-blue-600 rounded-2xl text-xl ml-auto">{props.text}</div>}
      {props.type == "reciever" && <div className="w-80 p-3 mb-6 text-gray-600 bg-gray-200 rounded-2xl text-xl mr-auto">{props.text}</div>}
    </>
  );
};

export default MessBox;
