const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const getStoredWishList = () => {
  const storedWishString = localStorage.getItem("wish");

  if (storedWishString) {
    return JSON.parse(storedWishString);
  }
  return [];
};

const saveToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const saveWishToLS = (wish) => {
  const wishStringified = JSON.stringify(wish);
  localStorage.setItem("wish", wishStringified);
};

const addToLs = (id) => {
  const cart = getStoredCart();

  cart.push(id);
  saveToLS(cart);
};
const addToLsWish = (id) => {
  const wish = getStoredWishList();

  wish.push(id);
  saveWishToLS(wish);
};gi

const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveToLS(remaining);
};

export { getStoredCart, addToLs, addToLsWish, getStoredWishList, removeFromLS };
