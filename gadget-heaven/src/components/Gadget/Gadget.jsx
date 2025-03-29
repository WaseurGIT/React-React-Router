import { Link } from "react-router-dom";

const Gadget = ({ gadget, handleAddToCart }) => {
  const { product_id, product_title, product_image, price } = gadget;

  return (
    <div className="card bg-base-100 w-96 mb-2 shadow-sm">
      <figure className="p-2">
        <img
          className="w-fit rounded-lg h-40"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{product_title}</h2>
        <p className="font-bold text-gray-500">Price : {price}</p>
        <div className="card-actions justify-center ">
          <Link to={`/gadgets/${product_id}`}>
            <button className="btn rounded-lg border-t-3 border-b-2 border-b-green-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
