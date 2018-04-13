import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'


class Search extends Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    query = query.trim();
    this.setState({ query, books:[] });
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if(Array.isArray(books)) {
          this.setState({ books: books.map((book) => {
            return this.props.myBooks.find((myBook) => myBook.id === book.id) || book;
          })});
        }
      });
    }
  }

  render() {
    const { query, books } = this.state;
    const { changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BooksGrid
              books={books}
              changeShelf={changeShelf}
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default Search