import { useEffect, useState } from "react";
import { getStoredCart, removeFromLS } from "../../utilities/loaclStorage";
import { useLoaderData } from "react-router-dom";
import Gadget from "../Gadget/Gadget";

const Cart = ({ cart }) => {
  const [cartList, setCartList] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    const storedProductList = getStoredCart();
    const storedProductListInt = storedProductList.map((id) => parseInt(id));

    const productList = products.filter((product) =>
      storedProductListInt.includes(product.product_id)
    );
    setCartList(productList);
  }, []);

  return (
    <div>
      <div className="md:grid grid-cols-3 mt-6">
        {cartList.map((gadget) => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Cart;
