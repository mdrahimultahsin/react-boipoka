import React, {useEffect, useState} from "react";
import {FaAngleDown} from "react-icons/fa";
import {useLoaderData} from "react-router";
import {getMarkedbooks, removeMarkedBook} from "../../utils/localStorage";
import ReadBooks from "../../Components/ReadBooks/ReadBooks";
const ListedBooks = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedIds = getMarkedbooks();
    const newBooks = [];
    for (const id of storedIds) {
      const storedBooks = data.find((book) => book.bookId === id);
      newBooks.push(storedBooks);
    }
    setReadList(newBooks);
  }, [data]);
  const handleRemoveMarkAsListBook =id =>{
    removeMarkedBook(id)
    
    const remainingBooks = readList.filter(book=>book.bookId!==id);
    setReadList(remainingBooks);
  }
  return (
    <div className="px-4 font-work-sans">
      <div className="bg-[#f3f3f3] flex justify-center items-center p-5">
        <h2 className="font-bold text-2xl">Books</h2>
      </div>
      <button className="mx-auto flex mt-6 btn text-white border-none bg-primary-color font-medium text-lg">
        Sort By <FaAngleDown />
      </button>

      <div className="tabs tabs-lift mt-8">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-lg font-semibold"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 space-y-6">
          {
            readList.map(book=><ReadBooks handleRemoveMarkAsListBook={handleRemoveMarkAsListBook} key={book.bookId} book={book}></ReadBooks>)
          }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-lg font-semibold p-2"
          aria-label="Wishlist Books"
          
        />
        <div className="tab-content bg-base-100">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
