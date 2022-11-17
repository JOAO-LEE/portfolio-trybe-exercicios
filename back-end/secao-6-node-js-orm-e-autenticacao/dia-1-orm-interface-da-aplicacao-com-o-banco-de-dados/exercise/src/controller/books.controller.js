const { bookService } = require('../service/');

const getBooks = async (_req, resp) => {
  const { type, message } = await bookService.getBooks();
  if (type) return resp.status(500).json({ message })
  return resp.status(200).json(message);
};

const getById = async (req, resp) => {
  const { id } = req.body;
  const { message } = await bookService.getById(id);
  if (!message) return resp.status(404).json({ message: 'Book not found' })
  return resp.status(200).json(message);
};

const insertBook = async (req, resp) => {
  const bookToCreate = req.body;
  const insertedBook = await bookService.insertBook(bookToCreate);
  return resp.status(200).json(insertedBook.message);
};

const updateBook = async (req, resp) => {
  const { id } = req.params;
  const bookToUpdate = req.body;
  const updateBook = await bookService.updateBook(id, bookToUpdate);
  if (!updateBook) return resp.status(404).json({ message: 'Book not found' });
  return resp.status(200).json({ message });
};

const deletedBook = async (req, resp) => {
  const { id } = req.params;
  await bookService.deleteBook(id);
  return resp.status(200).json({ message: "deletado" })
};


module.exports = {
  getBooks,
  getById,
  insertBook,
  updateBook,
  deletedBook,
};