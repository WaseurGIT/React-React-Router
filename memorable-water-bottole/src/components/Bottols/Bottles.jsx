import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //   load  cart values from local storage
  useEffect(() => {
    if (bottles.length) {
      // get the local storage data
      const storedCart = getStoredCart();

      // to store the matched id
      const savedCart = [];

      // matching the id of every bottles with the local storage saved bottle id
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      // set the matched id bottles in the UI using the state
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLS(id);
  };

  return (
    <div>
      <h4>Total Bottles : {bottles.length}</h4>

      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
