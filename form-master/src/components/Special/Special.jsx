import React, { useContext } from "react";
import { assetContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(assetContext);

  return (
    <div>
      <h2>Special</h2>
      <p>Asset from prop drilling : {asset}</p>
      <p>Asset contextApi : {gift}</p>
    </div>
  );
};

export default Special;
