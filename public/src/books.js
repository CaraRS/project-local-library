function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
};


function partitionBooksByBorrowedStatus(books) {
  let currentlyOut = books.filter((book) => book.borrows[0].returned === false);
  let returned = books.filter((book) => book.borrows[0].returned !== false);
  return [currentlyOut, returned];
};

function getBorrowersForBook(book, accounts) {
  let borrows = book.borrows.map((borrow) => { 
    let account = findAuthorById(accounts, borrow.id)
    account.returned = borrow.returned
  return account
  }).slice(0, 10);
return borrows;
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
