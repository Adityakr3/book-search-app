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
      <h1>My Bookshelf</h1>
      <Bookshelf books={books} />
      <button onClick={() => window.location.href = '/'}>Back to Search</button>
    </div>
  );
};

export default BookshelfPage;
