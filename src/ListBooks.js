import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

const Bookshelves = [
  {
    title: "Currently Reading",
    id: "currentlyReading"
  },
  {
    title: "Want to Read",
    id: "wantToRead"
  },
  {
    title: "Read",
    id: "read"
  }
];

function ListBooks(props) {
  const { books, changeShelf } = props;

  return  (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Bookshelves.map((bookshelf) => (
            <Bookshelf
              key={bookshelf.id}
              title={bookshelf.title}
              books={books.filter((book) => book.shelf === bookshelf.id)}
              changeShelf={changeShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default ListBooks