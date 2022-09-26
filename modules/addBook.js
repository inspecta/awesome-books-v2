import Books from './Book.js';
import retrieveFromLocalStorage from './retrieveFromStorage.js';
import displayBooks from './displayBook.js';

const titleObj = document.querySelector('#title');
const authorObj = document.querySelector('#author');
const formObj = document.querySelector('#form');
const container = document.getElementById('books-list');

const book = new Books();
book.books = retrieveFromLocalStorage('store');

const addNewBook = () => {
  formObj.addEventListener('submit', (e) => {
    e.preventDefault();
    book.addBook(titleObj.value, authorObj.value);
    localStorage.setItem('store', JSON.stringify(book.books));
    container.innerHTML = '';

    book.books.forEach((item) => {
      displayBooks(item);
    });
    formObj.reset();
  });
};

export default addNewBook;
