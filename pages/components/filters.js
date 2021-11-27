import React from "react";
import Filter from "./filter";

const filters = () => {
  const filters = ["All", "Paid", "Shipped"];
  return (
    <div className="flex overflow-x-auto mb-4">
      {filters.map((e, i) => {
        return <Filter key={i} text={e}></Filter>;
      })}
    </div>
  );
};

export default filters;
