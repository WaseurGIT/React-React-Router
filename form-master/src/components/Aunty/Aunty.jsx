import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"kamrul"}></Cousin>
        <Cousin name={"liton"}></Cousin>
      </section>
      <p>Money : {money}</p>
      <button onClick={() => setMoney(money + 100)}>Add 100 tk</button>
    </div>
  );
};

export default Aunty;
