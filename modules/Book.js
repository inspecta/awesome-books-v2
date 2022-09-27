import retrieveFromLocalStorage from './retrieveFromStorage.js';

const titleObj = document.querySelector('#title');
const authorObj = document.querySelector('#author');
const container = document.getElementById('books-list');

const totalBooks = retrieveFromLocalStorage('store') || [];

export default class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addNewBook = () => {
    const id = Math.floor(Math.random() * 10000);
    const book = new Books(titleObj.value, authorObj.value, id);
    totalBooks.push(book);
    localStorage.setItem('store', JSON.stringify(totalBooks));
  }
}
