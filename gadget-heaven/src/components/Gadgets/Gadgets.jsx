import { createContext, useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  // const handleSort = (sortType) => {
  //   setSort(sortType);
  //   let sortedGadgets = [...gadgets];

  //   if('All Categories'){
  //     sortedGadgets = sortedGadgets.filter((gadget)=> gadget.category === '')
  //     setGadgets(sortedGadgets)
  //   }
  //   if (sortType === "Laptops") {
  //     sortedGadgets = sortedGadgets.filter(
  //       (gadget) => gadget.category === "Laptops"
  //     );
  //     setGadgets(sortedGadgets)
  //   }
  //   if ("Phones") {
  //     sortedGadgets = sortedGadgets.filter(
  //       (gadget) => gadget.category === "Phones"
  //     );
  //     setGadgets(sortedGadgets)
  //   }
  //   if ("Accessories") {
  //     sortedGadgets = sortedGadgets.filter(
  //       (gadget) => gadget.category === "Accessories"
  //     );
  //     setGadgets(sortedGadgets)
  //   }
  //   if ("Smart Watch") {
  //     sortedGadgets = sortedGadgets.filter(
  //       (gadget) => gadget.category === "Smart Watch"
  //     );
  //     setGadgets(sortedGadgets)
  //   }
  //   if ("Mac Book") {
  //     sortedGadgets = sortedGadgets.filter(
  //       (gadget) => gadget.category === "Mac Book"
  //     );
  //     setGadgets(sortedGadgets)
  //   }
  //   if ("Iphone") {
  //     sortedGadgets = sortedGadgets.filter(
  //       (gadget) => gadget.category === "Iphone"
  //     );
  //     setGadgets(sortedGadgets)
  //   }

  //   setGadgets(sortedGadgets)
  // };

  return (
    <div>
      <h1 className="text-3xl mt-72 text-center font-bold">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex mt-12">
        {/* left side bar */}
        <div className="grid bg-gray-100 h-[560px] p-2 mr-3 rounded-lg grid-cols-1/4">
          <div className="w-[200px] h-[556px] grid grid-cols-1">
            <button
              onClick={() => handleSort("All Categories")}
              className="px-5 h-[52px]  border-2 rounded-lg mt-2 font-bold text-left text-gray-500"
            >
              All Gadgets
            </button>
            <button
              onClick={() => handleSort("Laptops")}
              className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500"
            >
              Laptops
            </button>
            <button
              onClick={() => handleSort("Phones")}
              className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500"
            >
              Phones
            </button>
            <button
              onClick={() => handleSort("Accessories")}
              className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500"
            >
              Accessories
            </button>
            <button
              onClick={() => handleSort("Smart Watch")}
              className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500"
            >
              Smart Watch
            </button>
            <button
              onClick={() => handleSort("Mac Book")}
              className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500"
            >
              Mac Book
            </button>
            <button
              onClick={() => handleSort("Iphone")}
              className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500"
            >
              Iphone
            </button>
          </div>
        </div>

        {/* right side bar */}
        <div className="flex md:grid grid-cols-3/4">
          <div className="flex md:grid grid-cols-3 ">
            {gadgets.map((gadget) => (
              <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
