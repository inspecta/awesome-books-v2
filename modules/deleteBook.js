import retrieveFromLocalStorage from './retrieveFromStorage.js';
import Books from './Book.js';

const container = document.getElementById('books-list');
const book = new Books();
book.books = retrieveFromLocalStorage('store');

const deleteBook = (e) => {
  if (e.classList.contains('btn')) {
    const id = Number(e.getAttribute('data-id'));

    book.books = book.books.filter((item) => item.id !== id);
    localStorage.setItem('store', JSON.stringify(book.books));
    e.parentElement.remove();

    if (book.books.length === 0) {
      container.innerHTML = '<p class="no-books">No books available!</p>';
    }
  }
};

export default deleteBook;