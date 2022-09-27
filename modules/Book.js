export default class Books {
  constructor() {
    this.books = undefined || [];
  }

  addBook = (title, author) => {
    const id = Math.floor(Math.random() * 10000);
    this.books = this.books.concat({ title, author, id });
    return this.books;
  }
}
