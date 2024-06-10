import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(storedBooks);
  }, []);

  return (
    <div>
      <div className='flex justify-between mt-4 mx-11'>
      <h1 className='font-bold text-4xl text-center px-4'>My Bookshelf</h1>
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = '/'}>Back to Search</button>
      </div>
      <Bookshelf books={books} />
    </div>
  );
};

export default BookshelfPage;
