const { bookService } = require('../service/');

const getBooks = async (_req, resp) => {
  const { type, message } = await bookService.getBooks();
  if (type) return resp.status(500).json({ message })
  return resp.status(200).json(allBooks);
};

module.exports = {
  getBooks,
};