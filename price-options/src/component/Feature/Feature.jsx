import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {

    return (
        <div>
            <p className="font-semibold ml-10 flex items-center gap-2"><FaCheckCircle className="text-green-300" />{feature}</p>
        </div>
    );
};

export default Feature;