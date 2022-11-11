const BooksSchema = require('../models/book');

const getBooks = async () => {
  const allBooks = await BooksSchema.findAll;
  if (!allBooks) return { type: 'UNKNOWN_ERROR', message: 'Algum erro ocorreu. Tente novamente!' };
  return { type: null, message: allBooks };
};

module.exports = {
  getBooks,
};

