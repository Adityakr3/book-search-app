import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div>
      <div className="book-list grid grid-cols-4  m-4">
        {books.map((book, index) => (
          <div key={index} className="book-card w-[315px] m-8 p-4 bg-white text-black rounded-lg">
            <h3> <span className='font-bold'>Book Title:</span> {book.title}</h3>
            <p> <span className='font-bold'>Book Author_Name:</span> {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <p> <span className='font-bold'>Book Edition_Count:</span> {book.edition_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
