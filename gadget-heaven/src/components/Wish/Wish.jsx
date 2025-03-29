import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../utilities/loaclStorage";
import Gadget from "../Gadget/Gadget";

const Wish = () => {
  const [wishList, setWishList] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishProductList = products.filter((product) =>
      storedWishListInt.includes(product.product_id)
    );

    setWishList(wishProductList);
  }, []);

  return (
    <div>
      <h1>wish {wishList.length}</h1>
      <div className="flex md:grid grid-cols-3">
        {wishList.map((gadget) => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Wish;
