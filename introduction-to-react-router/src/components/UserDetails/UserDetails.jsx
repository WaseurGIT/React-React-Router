import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, email, phone } = user;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>User Id : {id}</h3>
      <h3>User Name : {name}</h3>
      <h3>User Email : {email}</h3>
      <h3>User Contact : {phone}</h3>

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
