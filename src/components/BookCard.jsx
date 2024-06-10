import React from "react";

const BookCard = ({ book, addToBookshelf }) => {
  return (
    <div className=" mt-4 flex  bg-slate-100 text-black rounded-2xl">
      <div className="cards p-3 ">
        <h3><span className='font-bold'>Book Title:</span> {book.title}</h3>
        <p><span className='font-bold'>Book Author_Name:</span>
           {book.author_name ?  book.author_name.join(", ") :  "Unknown Author"}
        </p>
        <p><span className='font-bold'>Book Edition_Count:</span> {book.edition_count}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => addToBookshelf(book)}
        >
          Add to Bookshelf
        </button>
      </div>
    </div>
  );
};

export default BookCard;
