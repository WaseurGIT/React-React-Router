import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    hashtags,
    reading_time,
  } = blog;

  return (
    <div className="mb-20 space-y-5">
      <img className="w-full rounded-4xl mb-8" src={cover} alt="title" />
      <div className="flex justify-between mb-4 ">
        <div className="flex">
          <img className="w-14" src={author_img} alt={author} />
          <div className="ml-6">
            <h3 className="text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button className="ml-2" onClick={() => handleAddToBookmarks(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a>#{hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-700 underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
