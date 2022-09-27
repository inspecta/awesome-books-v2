import displayBooks from './modules/displayBook.js';
import deleteBook from './modules/deleteBook.js';
import displayTime from './modules/displayTime.js';
import singePageNavigation from './modules/navigation.js';
import Books from './modules/Book.js';
import retrieveFromLocalStorage from './modules/retrieveFromStorage.js';

const container = document.getElementById('books-list');
const dateContainer = document.querySelector('.date-time');
const formObj = document.querySelector('#form');

const book = new Books();
let totalBooks = retrieveFromLocalStorage('store');

if (totalBooks.length === 0) {
  container.innerHTML = '<p class="no-books">No books available!</p>';
}

formObj.addEventListener('submit', () => {
  book.addNewBook();
  container.innerHTML = '';
  totalBooks = JSON.parse(localStorage.getItem('store'));
  totalBooks.forEach((item) => {
    displayBooks(item);
  });
  formObj.reset();
});

const setRealTime = () => {
  dateContainer.innerHTML = displayTime();
};
setRealTime();
setInterval(setRealTime, 1000);

totalBooks.forEach((item) => {
  displayBooks(item);
});

container.addEventListener('click', (e) => {
  deleteBook(e.target);
});

singePageNavigation();
