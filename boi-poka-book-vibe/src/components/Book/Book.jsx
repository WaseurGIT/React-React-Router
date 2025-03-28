import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, category, rating, tags } = book;

  return (
    <div className="card bg-base-100 w-96 rounded-2xl shadow-sm p-6">
      <figure className="bg-gray-200 py-4 rounded-2xl">
        <img className="h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          {tags.map((tag, idx) => (
            <button key={idx} className="btn btn-sm p-4 bg-green-200 rounded-4xl font-semibold text-green-700">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title text-2xl mt-3 font-bold">{bookName}</h2>
        <h2 className=" my-2 font-semibold text-xl">By: {author}</h2>
        <div className=" border-t-1 border-dashed "></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline font-semibold">{category}</div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-700"
              aria-label="1 star"
            />
          </div>
        </div>
      </div>
      <Link to={`/books/${bookId}`}><button className="text-green-500 font-semibold text-center border-b border-t p-2 mx-28 rounded-sm">More Details</button></Link>
    </div>
  );
};

export default Book;
