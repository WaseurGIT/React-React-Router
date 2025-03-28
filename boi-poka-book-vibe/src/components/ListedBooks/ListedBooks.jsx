import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utilites/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h3> All listed Books</h3>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
        />
        <br />
        <div className="tab-content bg-base-100 border-base-300 p-6 my-10">
          Read List {readList.length}
        </div>

        <div className="mt-16 md:grid grid-cols-3 gap-10">
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
      </div>
    </div>
  );
};

export default ListedBooks;
