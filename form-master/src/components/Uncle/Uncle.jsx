import React from "react";
import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"lebu"} asset={asset}></Cousin>
        <Cousin name={"aam"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
