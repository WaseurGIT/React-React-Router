import React, { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

// eslint-disable-next-line react-refresh/only-export-components
export const assetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond ring";

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Money : {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <assetContext.Provider value="gold">
          <section className="flex ">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </assetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * to use context api
 *
 * 1. create and export context
 * 2. add provider for the context with a value
 * 3. useContext to access the value
 */
