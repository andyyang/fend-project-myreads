import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    book.shelf = shelf;
    this.setState((state) => ({
      books: state.books.filter((myBook) => myBook.id !== book.id).concat([book])
    }));
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search
            myBooks={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>

        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
