import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';

const SearchPage = ({ addToBookshelf }) => {
  return (
    <div>
      <h1>Book Search</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <button onClick={() => window.location.href = '/bookshelf'}>Go to My Bookshelf</button>
    </div>
  );
};

export default SearchPage;
