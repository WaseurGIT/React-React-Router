import {
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  addToLs,
  addToLsWish,
  getStoredCart,
} from "../../utilities/loaclStorage";

const GadgetDetails = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const storedCart = getStoredCart();

      const savedCart = [];

      for (const id of storedCart) {
        const product = products.find((product) => product.product_id === id);
        if (product) {
          savedCart.push(product);
        }
      }
      setCart(savedCart);
    }
  }, [products]);

  const { product_id } = useParams();
  const gadgets = useLoaderData();

  const id = parseInt(product_id);

  const gadget = gadgets.find((gadget) => gadget.product_id === id);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = (id) => {
    addToLs(id);
  };

  const handleAddToWish = (id) => {
    addToLsWish(id);
  };
  const {
    product_id: gadgetId,
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
  } = gadget;

  return (
    <div>
      <div className="max-w-[1350px] h-[300px] mx-auto  rounded-lg bg-purple-500">
        <h1 className="text-center mt-5 pt-3 font-bold text-white mb-5 text-3xl">
          Product Details
        </h1>
        <p className="text-center text-gray-800 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="hero bg-white ml-32 w-[1000px] rounded-2xl border mt-[-160px] min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between gap-12">
          <img
            src={product_image}
            className="mt-[-150px] ml-12 rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-4xl mt-[-150px] font-bold">{product_title}</h1>
            <h1 className="text-xl mt-3 font-bold">Price: {price}</h1>
            <h1 className="text-xl mt-3 font-bold">{description}</h1>
            <h1 className="mt-6">
              <span className="font-bold">Specification </span>{" "}
              {Specification.map((s, idx) => (
                <li
                  key={idx}
                  className="btn btn-sm p-4 my-1 bg-green-200 rounded-4xl font-semibold ml-3 text-green-700"
                >
                  {s}
                </li>
              ))}
            </h1>

            <div className="flex justify-start mt-6 gap-3 items-center">
              <p className="py-2 ">
                <span className="font-semibold">Rating : </span>
                {rating}
              </p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-red-600"
                  aria-label="3 star"
                />
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(product_id)}
              className="btn border-b-2 border-b-green-400 mt-5 px-6"
            >
              Add To Cart
              <FaOpencart />
            </button>
            <button
              onClick={() => handleAddToWish(product_id)}
              className="btn border-b-2 ml-3 border-b-green-400 mt-5 px-6"
            >
              <FaRegHeart />
            </button>
            <button
              className="btn border-b-2 border-b-green-400 mt-5 px-6 ml-6"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
