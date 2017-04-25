const express = require('express');
const books = require('./books');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/books', (req, res) => {
  res.send(books);
});

app.get('/books/:id', (req, res) => {
  res.send(books[req.params.id]);
});

app.get('/books/search/:id', (req, res) => {
  let getBook;
  books.forEach((book) => {
    if (book.id === parseInt(req.params.id)) getBook = book.name;
  });
  res.send(getBook);
});

app.post('/newbook:id', (req, res) => {
  const newBook = req.body;
  book.id = books.length + 1;
  books.push(newBook);
});

app.listen(3000, () => {
  console.log('running on port 3000');
});
