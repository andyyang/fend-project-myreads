# MyReads Project

This is a bookshelf application that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and it also aceesses an API server to persist information as you interact with the aplication.

[View MyReads](https://react-myreads.netlify.com/)

## Table of Contents

* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [Backend Server](#backend-server)

## Instructions

1. Clone the GitHub repository.

2. Go into the directory where the project now lives.

3. Install all project dependencies with `npm install`.

4. Start the development server with `npm start`. The command will open a web browser to visit the application. You can look around to see what the experience looks like.

## Dependencies

This project uses [React](https://reactjs.org/) and [React Router](https://reacttraining.com/react-router/).

## Backend Server

There is a backend server for you to persist information. The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
