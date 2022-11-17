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
  const insertedBook = await Book.findByPk(id);
  return { type: null, message: insertedBook };
};

const updateBook = async (id, { title, author, page_quantity }) => {
  await Book.update({ title, author, page_quantity }, { where: { id } });
  return { type: null, message: "Livro atualizado com sucesso!" };
};


module.exports = {
  getBooks,
  getById,
  insertBook,
  updateBook,
};

