import React, {useEffect, useState} from "react";
import {FaAngleDown} from "react-icons/fa";
import {useLoaderData} from "react-router";
import {
  getMarkedbooks,
  getWishlistedBooks,
  removeFromWishlist,
  removeMarkedBook,
} from "../../utils/localStorage";
import ReadBooks from "../../Components/ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
const ListedBooks = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState("");

  //mark as read
  useEffect(() => {
    const storedIds = getMarkedbooks();
    const newBooks = [];
    for (const id of storedIds) {
      const storedBooks = data.find((book) => book.bookId === id);
      newBooks.push(storedBooks);
    }
    setReadList(newBooks);
  }, [data]);

  const handleRemoveMarkAsListBook = (id) => {
    removeMarkedBook(id);

    const remainingBooks = readList.filter((book) => book.bookId !== id);
    setReadList(remainingBooks);
  };

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "pages") {
      const sortByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPages);
      const wislistSortByPages =[...wishlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setWishlist(wislistSortByPages)
    }
    if (sortType === "rating") {
      const sortByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortByRating);
      const wislistSortByRating = [...wishlist].sort((a, b) => b.rating - a.rating);
      setWishlist(wislistSortByRating)
    }
  };
  
  //wishlist
  useEffect(() => {
    const storedIds = getWishlistedBooks();
    const newBooks = [];
    for (const id of storedIds) {
      const storedBooks = data.find((book) => book.bookId === id);
      newBooks.push(storedBooks);
    }
    setWishlist(newBooks);
  }, [data]);

  const handleRemoveFromWislist = (id) => {
    removeFromWishlist(id);

    const remainingBooks = wishlist.filter((book) => book.bookId !== id);
    setWishlist(remainingBooks);
  };

  return (
    <div className="px-4 font-work-sans">
      <div className="bg-[#f3f3f3] flex justify-center items-center p-5">
        <h2 className="font-bold text-2xl">Books</h2>
      </div>

      <details className="dropdown mx-auto flex flex-col justify-center items-center">
        <summary className="w-auto mx-auto mt-6 btn text-white border-none bg-primary-color font-medium text-lg capitalize">
          Sort By : {sort && sort}
          <FaAngleDown />
        </summary>
        <ul className="left-0 right-0 mx-auto menu dropdown-content bg-base-100 rounded-box z-1 w-52 shadow-sm ">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
        </ul>
      </details>

      <div className="tabs tabs-lift mt-8">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-lg font-semibold"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 space-y-6">
          {readList.map((book) => (
            <ReadBooks
              handleRemoveMarkAsListBook={handleRemoveMarkAsListBook}
              key={book.bookId}
              book={book}
            ></ReadBooks>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-lg font-semibold p-2"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100">
          {wishlist.map((book) => (
            <WishlistBooks
              handleRemoveFromWislist={handleRemoveFromWislist}
              key={book.bookId}
              book={book}
            ></WishlistBooks>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
