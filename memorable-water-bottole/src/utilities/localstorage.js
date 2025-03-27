
// to get the value from local storage
const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

// to save the array of items in local storage
const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// add items in local storage array
const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToLS(cart);
};

//  remove item from local storage array
const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx != id);
  saveCartToLS(remaining);
};

export { addToLS, getStoredCart, removeFromLS };
