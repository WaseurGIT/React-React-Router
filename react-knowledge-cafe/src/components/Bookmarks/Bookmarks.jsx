import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 ml-3 rounded-lg text-center pt-3">
      <div className="p-4 m-4">
        <h3 className="text-2xl font-bold border-b-1">
          Total Reading Time: {readingTime}
        </h3>
      </div>
      <h5 className="text-xl font-bold">
        Bookmarked Blogs : {bookmarks.length}
      </h5>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
