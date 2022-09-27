export default class Books {
  constructor(books) {
    this.books = books;
  }

  addBook(title, author) {
    const id = Math.floor(Math.random() * 10000);
    this.books = this.books.concat({ title, author, id });
    return this.books;
  }
}
