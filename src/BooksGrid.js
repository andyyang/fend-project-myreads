import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

function BooksGrid(props) {
  const { books, changeShelf } = props;

  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")`}}></div>
              <ShelfChanger
                book={book}
                onChangeShelf={changeShelf}
              />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BooksGrid