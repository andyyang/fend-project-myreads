import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

function Bookshelf(props) {
  const { title, books, changeShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksGrid
          books={books}
          changeShelf={changeShelf}
        />
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Bookshelf