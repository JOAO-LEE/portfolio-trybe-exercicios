const BooksSchema = (sequelize, DataTypes) => {
  const BooksTabel = sequelize.define('Book', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
    {
      tableName: 'books',
      underscored: true
    });
  return BooksTabel;
};
module.exports = BooksSchema;