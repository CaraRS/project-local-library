function getTotalBooksCount(books) {
  return books.length;
};

function getTotalAccountsCount(accounts) {
  return accounts.length;
};

function getBooksBorrowedCount(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  let totalBorrowed = borrowed.length;
  return totalBorrowed;
};

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    const { genre } = book;
    if (!acc[genre]) acc[genre] = { name: genre, count: 1 };
    else acc[genre].count++;
    return acc;
  }, {});
  return Object.values(genres).sort(sortByPopularity).slice(0, 5);
};

function sortByPopularity(item1, item2) {
  return item2.count - item1.count;
};

function getMostPopularBooks(books) {
  return books.map((book) => {
   return {name: book.title, count: book.borrows.length}
  }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
};

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let bookMatch = books.filter((book) => book.authorId === author.id);
    let bookMatchBorrows = bookMatch.reduce((borrows, book) => borrows + book.borrows.length, 0);
    result.push({name: author.name.first + " " + author.name.last, count: bookMatchBorrows});
  });
  return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5);
};



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
