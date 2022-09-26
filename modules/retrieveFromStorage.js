import Books from './Book.js';

const book = new Books();

const retrieveFromLocalStorage = (key) => {
  book.books = JSON.parse(localStorage.getItem(key));
  return book.books;
};

export default retrieveFromLocalStorage;