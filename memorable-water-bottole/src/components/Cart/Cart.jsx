import PropTypes from "prop-types";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div> 
      <h4>Cart: {cart.length}</h4>
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img
            style={{ width: "100px", height: "100px", marginRight: "5px" }}
            src={bottle.img}
          ></img>
          <button onClick={() => handleRemoveFromCart(bottle.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
