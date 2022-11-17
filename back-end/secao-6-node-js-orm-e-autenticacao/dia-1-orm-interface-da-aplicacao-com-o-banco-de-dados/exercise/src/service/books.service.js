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

const insertBook = async ({ title, author, page_quantity }) => {
  const { dataValues: { id } } = await Book.create({ title, author, page_quantity });
  // console.log(createBook.dataValues);
  const insertedBook = await Book.findByPk(id);
  return { type: null, message: insertedBook };
};

module.exports = {
  getBooks,
  getById,
  insertBook,
};

