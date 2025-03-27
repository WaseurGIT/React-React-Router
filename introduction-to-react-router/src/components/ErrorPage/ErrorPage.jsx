import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div>
            <h2>Oopps!!!</h2>    
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }        
        </div>
    );
};

export default ErrorPage;