import retrieveFromLocalStorage from './retrieveFromStorage.js';

const container = document.getElementById('books-list');

let totalBooks = retrieveFromLocalStorage('store');

const deleteBook = (e) => {
  if (e.classList.contains('btn')) {
    const id = Number(e.getAttribute('data-id'));
    totalBooks = totalBooks.filter((item) => item.id !== id);
    localStorage.setItem('store', JSON.stringify(totalBooks));
    e.parentElement.remove();

    if (totalBooks.length === 0) {
      container.innerHTML = '<p class="no-books">No books available!</p>';
    }
  }
};

export default deleteBook;