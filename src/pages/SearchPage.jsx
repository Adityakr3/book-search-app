import React, { useState } from "react";
import BookSearch from "../components/BookSearch";

const SearchPage = ({ addToBookshelf }) => {
  return (
    <>
      <h1 className="text-center font-bold text-5xl p-4 text-gray-100">
        Book Search
      </h1>
      <div className="flex justify-evenly">
        <div className="flex justify-evenly">
          <BookSearch addToBookshelf={addToBookshelf} />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-900 h-12 text-white font-bold py-2 px-4 rounded"
          onClick={() => (window.location.href = "/bookshelf")}
        >
          Go to My Bookshelf
        </button>
      </div>
    </>
  );
};

export default SearchPage;
