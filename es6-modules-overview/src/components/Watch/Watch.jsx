import React from "react";

const Watch = ({ watch }) => {
  const { name, price } = watch;

  return (
    <div>
      <h4>Watch Name: {name}</h4>
      <h4>Price: {price}</h4>
    </div>
  );
};

export default Watch;
