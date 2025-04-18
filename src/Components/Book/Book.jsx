import React from "react";
import {FaStarHalfAlt} from "react-icons/fa";
import {Link} from "react-router";

const Book = ({book}) => {
  const {bookId,bookName, image, author, rating, category, tags} = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="p-4 border border-[#13131315] rounded-2xl cursor-pointer">
        <div className="p-6 bg-[#f3f3f3] rounded-2xl">
          <img className="max-h-42 mx-auto" src={image} alt="" />
        </div>
        <div className="mt-2 p-2">
          <div className="flex gap-4">
            {tags.map((tag,index) => (
              <button key={index} className="btn text-primary-color border-none bg-[#23BE0A10] font-medium">
                {tag}
              </button>
            ))}
          </div>
          <div className="py-4 border-b-2 border-dashed border-[#13131315]">
            <h1 className="text-2xl font-bold">{bookName}</h1>
            <p className="font-work-sans mt-1 px-1">By : {author}</p>
          </div>
          <div className="flex justify-between items-center pt-3 font-medium font-work-sans">
            <p>{category}</p>
            <span className="flex gap-3 items-center">
              {rating}
              <FaStarHalfAlt></FaStarHalfAlt>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
