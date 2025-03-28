import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utilites/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const handleMarkAsRead = (id) => {
    /**
     * understand what to store -> bookId
     * where to store -> db
     * array, list, collection
     * check : if the book already in the list
     * if not add the book to the list
     * if yes: do not add the book
     */

    addToStoredReadList(id);
  };

  const handleAddToWish = (id) => {
    addToStoredWishList(id);
  };

  const {
    bookId: currentBookId,
    bookName,
    image,
    author,
    review,
    totalPages,
    rating,
    category,
    publisher,
    tags,
    yearOfPublishing,
  } = book;

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen my-7 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row gap-16 mx-10 justify-between items-center ">
          <div className="bg-gray-300 p-10 rounded-2xl h-[700px]">
            <img src={image} className="max-w-sm h-[566px] rounded-lg" />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-6">{bookName}</h1>
            <h1 className="text-xl font-bold">By: {author}</h1>
            <div className="divider"></div>
            <h1 className="font-semibold">{category}</h1>
            <div className="divider"></div>
            <p>
              <span className="font-bold">Review:</span> {review}
            </p>
            <h1 className="mt-6">
              <span className="font-bold">Tags: </span>{" "}
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn btn-sm p-4 bg-green-200 rounded-4xl font-semibold ml-3 text-green-700"
                >
                  {tag}
                </button>
              ))}
            </h1>
            <div className="divider"></div>
            <div>
              <p className="mt-3 ">
                Number of Pages:{" "}
                <span className="ml-28 font-bold">{totalPages}</span>
              </p>
              <p className="mt-3 ">
                Publisher:{" "}
                <span className="font-bold ml-[170px]">{publisher}</span>
              </p>
              <p className="mt-3 ">
                Year of Publishing:{" "}
                <span className="font-bold ml-[108px]">{yearOfPublishing}</span>
              </p>
              <p className="mt-3 ">
                Rating: <span className="font-bold ml-[190px]">{rating}</span>
              </p>
              <div className="my-6">
                <button
                  onClick={() => handleMarkAsRead(bookId)}
                  className="btn btn-outline btn-accent mr-5 px-10"
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => handleAddToWish(bookId)}
                  className="btn btn-accent px-10"
                >
                  Add to Wish List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
