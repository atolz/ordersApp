import React from "react";
import Link from "next/link";

const Button = (props) => {
  return props.color == "blue" ? (
    <Link
      href={{
        pathname: props.mylink,
      }}
    >
      <div className={`border-1 h-14 rounded-2xl border-blue-400 px-5 text-blue-400 flex items-center justify-center cursor-pointer w-full font-semibold`}>{props.text}</div>
    </Link>
  ) : (
    <Link
      href={{
        pathname: props.mylink,
      }}
    >
      <div className={`border-1 h-14 rounded-2xl border-red-400 px-5 text-red-400 flex items-center justify-center cursor-pointer w-full font-semibold`}>{props.text}</div>
    </Link>
  );
};

export default Button;
