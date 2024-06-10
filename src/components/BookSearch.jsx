import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    const query = e.target.value;
    setQuery(query);

    if (query.length > 1) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      console.log(response.data.docs);
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  return (
    <div>
      <input className='w-96 p-4 rounded-lg text-neutral-950 bg-slate-100' type="text" value={query} onChange={searchBooks} placeholder="Search for books..." />
      <div className="book-list grid grid-cols-2 gap-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
