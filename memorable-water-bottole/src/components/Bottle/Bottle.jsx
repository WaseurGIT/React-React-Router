import PropTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, img, ratings } = bottle;

  return (
    <div className="bottle">
      <img src={img} style={{ width: "100px", height: "100px" }} alt={name} />
      <h3>{name}</h3>
      <h4>Price: {price} $</h4>
      <h4>Rating: {ratings}</h4>

      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle;
