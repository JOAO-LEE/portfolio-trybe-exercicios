const BooksSchema = (sequelize, DataTypes) => {
  const BooksTable = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER,
  },
    {
      tableName: 'books',
      timestamps: false,
    });
  return BooksTable;
};

module.exports = BooksSchema;