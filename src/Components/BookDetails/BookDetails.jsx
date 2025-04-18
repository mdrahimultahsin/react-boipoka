import React from "react";
import {Link, useLoaderData, useParams} from "react-router";
import { addBooksMarkAsRead } from "../../utils/localStorage";

const BookDetails = () => {
  const params = useParams().bookId;
  const convertedId = parseInt(params);
  const bookData = useLoaderData();
  const newBook = bookData.find((book) => book.bookId === convertedId);
  
  const {
    bookId,
    image,
    bookName,
    review,
    category,
    author,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    rating,
  } = newBook;


  const handleMarkAsRead = id =>{
    addBooksMarkAsRead(id)
  }


  return (
    <div className="px-4 flex flex-col md:flex-row gap-10 md:gap-15 lg:gap-20 py-10">
      <div className="bg-[#f3f3f3] p-16 rounded-lg w-full md:max-w-2/5">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="p-2 w-full md:max-w-3/5">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="font-work-sans font-medium text-lg mt-2">By: {author}</p>
        <div className="py-5 border-t-1 border-b-1 border-[#13131315] mt-4">
          <p className="font-work-sans font-medium text-lg opacity-80">
            {category}
          </p>
        </div>
        <div className="py-4 border-b border-[#13131315] font-work-sans mb-2">
          <p>
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <h2 className="font-bold">Tags:</h2>
            <div className="flex gap-5">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn text-primary-color border-none bg-[#23BE0A10] font-medium"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-2 font-work-sans py-2">
          <h2 className="opacity-70">Number Of Pages:</h2>
          <p className="font-bold">{totalPages}</p>

          <h2 className="opacity-70">Publisher:</h2>
          <p className="font-bold">{publisher}</p>

          <h2 className="opacity-70">Year Of Publishing:</h2>
          <p className="font-bold">{yearOfPublishing}</p>

          <h2 className="opacity-70">Rating:</h2>
          <p className="font-bold">{rating}</p>
        </div>

        <div className="mt-4 flex gap-4">
          <Link onClick={()=>handleMarkAsRead(bookId)} className="btn bg-transparent py-6 px-5 rounded-lg font-semibold text-lg border-[#13131315]">
            Mark as Read
          </Link>
          <Link className="btn bg-skyblue-color text-white py-6 px-5 rounded-lg font-semibold text-lg">
            Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
