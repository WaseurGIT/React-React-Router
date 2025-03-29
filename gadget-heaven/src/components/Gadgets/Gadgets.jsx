import { createContext, useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToLS(product.product_id);
  };

  return (
    <div>
      <h1 className="text-3xl mt-72 text-center font-bold">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex mt-12">
        {/* left side bar */}
        <div className="grid bg-gray-100 h-[560px] p-2 mr-3 rounded-lg grid-cols-1/4">
          <div className="w-[200px] h-[556px] grid grid-cols-1">
            <button className="px-5 h-[52px]  border-2 rounded-lg mt-2 font-bold text-left text-gray-500">
              All Gadgets
            </button>
            <button className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500">
              Laptops
            </button>
            <button className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500">
              Phones
            </button>
            <button className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500">
              Accessories
            </button>
            <button className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500">
              Smart Watch
            </button>
            <button className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500">
              Mac Book
            </button>
            <button className="px-5 h-[52px] border-2 rounded-lg font-bold text-left text-gray-500">
              Iphone
            </button>
          </div>
        </div>

        {/* right side bar */}
        <div className="flex md:grid grid-cols-3/4">
          <div className="flex md:grid grid-cols-3 ">
            {gadgets.map((gadget) => (
              <Gadget
                key={gadget.product_id}
                handleAddToCart={handleAddToCart}
                gadget={gadget}
              ></Gadget>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
