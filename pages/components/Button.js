import React from "react";
import Link from "next/link";

const Button = (props) => {
  return (
    <Link
      href={{
        pathname: "/about",
        query: { name: "test" },
      }}
    >
      <div className={`border-1 h-14 rounded-2xl border-${props.color}-400 px-5 text-${props.color}-400 flex items-center justify-center cursor-pointer w-full font-semibold`}>{props.text}</div>
    </Link>
  );
};

export default Button;
