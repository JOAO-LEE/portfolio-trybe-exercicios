const { Book } = require('../models/');

const getBooks = async () => {
  const allBooks = await Book.findAll();
  if (!allBooks) return { type: 'UNKNOWN_ERROR', message: 'Algum erro ocorreu. Tente novamente!' };
  return { type: null, message: allBooks };
};

const getById = async (id) => {
  const foundBook = await Book.findByPk(id);
  return { type: null, message: foundBook };
};

const insertBook = async ({ author, title, page_quantity }) => {
  const createBook = await Book.create(author, title, page_quantity);
  const insertedBook = await Book.findByPk(createBook.insertId);
  return { type: null, message: insertedBook };
};

module.exports = {
  getBooks,
  getById,
  insertBook,
};

