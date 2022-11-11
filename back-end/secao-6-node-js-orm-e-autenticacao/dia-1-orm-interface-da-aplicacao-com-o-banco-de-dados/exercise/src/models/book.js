const BooksSchema = (sequelize, DataTypes) => {
  const BooksTable = sequelize.define('Book', {
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
  return BooksTable;
};

module.exports = BooksSchema;