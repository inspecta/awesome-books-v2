import displayBooks from './modules/displayBook.js';
import deleteBook from './modules/deleteBook.js';
import addNewBook from './modules/addBook.js';
import retrieveFromLocalStorage from './modules/retrieveFromStorage.js';
import displayTime from './modules/displayTime.js';
import singePageNavigation from './modules/navigation.js';
import Books from './modules/Book.js';

const container = document.getElementById('books-list');
const dateContainer = document.querySelector('.date-time');

const totalBooks = new Books();
totalBooks.books = retrieveFromLocalStorage('store') || [];

if (totalBooks.books.length === 0) {
  container.innerHTML = '<p class="no-books">No books available!</p>';
}

// Add new book
addNewBook();

// Set real time
const setRealTime = () => {
  dateContainer.innerHTML = displayTime();
};
setInterval(setRealTime, 1000);

totalBooks.books.forEach((book) => {
  displayBooks(book);
});

container.addEventListener('click', (e) => {
  deleteBook(e.target);
});

singePageNavigation();
