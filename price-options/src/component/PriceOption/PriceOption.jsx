import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  
    const { name, price, features } = option;


  return (
    <div className="bg-blue-400 rounded-lg p-4 flex flex-col">
        <h1 className="text-center">
            <span className="text-7xl font-bold">{price}</span>
            <span>/mon</span>
        </h1>
        <h4 className="text-4xl my-5 text-center">
            {name}
        </h4>
        <h2 className="flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
        </h2>
        <button className="mt-12 bg-green-500 w-full p-2 font-bold rounded-lg hover:bg-green-300">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
