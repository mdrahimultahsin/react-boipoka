import React from "react";
import {IoLocationOutline } from "react-icons/io5";
import {IoMdPeople} from "react-icons/io";
import {MdOutlineFindInPage} from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import {Link} from "react-router";
const ReadBooks = ({book,handleRemoveMarkAsListBook}) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    totalPages,
    category,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  
  return (
    <div className="p-4 flex gap-5 md:gap-8 rounded-lg border border-[#13131315]">
      <div className="bg-[#f3f3f3] p-8 rounded-lg">
        <img className="h-44" src={image} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-2xl font-primary">{bookName}</h1>
        <p className="mt-2 opacity-80 font-medium">By: {author}</p>
        <div className="flex items-center gap-4 mt-3">
          <h2 className="font-bold">Tag:</h2>
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn text-primary-color border-none bg-[#23BE0A10] font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
          <span className="flex items-center gap-2 text-lg">
            <IoLocationOutline size={23} />
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex gap-5 border-b border-[#13131315] py-4">
          <p className="flex gap-2 items-center text-lg opacity-60">
            <IoMdPeople size={25} />
            Publisher: {publisher}
          </p>
          <p className="flex gap-2 items-center text-lg opacity-60">
            <MdOutlineFindInPage size={25} />
            Page {totalPages}
          </p>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            className="btn rounded-full bg-[#328EFF15] text-[#328EFF] 
            font-normal border-none"
          >
            Category: {category}
          </button>
          <button
            className="btn rounded-full bg-[#FFAC3315] text-[#FFAC33] 
            font-normal border-none"
          >
            Rating: {rating}
          </button>
          <Link to={`/bookDetails/${bookId}`}>
            <button
              className="btn rounded-full bg-primary-color text-white 
            font-normal border-none"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Link onClick={()=>handleRemoveMarkAsListBook(bookId)} className="ml-4 p-2 bg-red-500 text-white rounded-full">
            <RiCloseLargeLine size={25}/>
        </Link>
      </div>
    </div>
  );
};

export default ReadBooks;
