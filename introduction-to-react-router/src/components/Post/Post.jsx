import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="post">
      <h2>Post ID: {id}</h2>
      <h3>Post Title: {title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Details</button>
      </Link>

      <button onClick={() => handleShowDetails()}>Click TO SHow deTails</button>
    </div>
  );
};

export default Post;
