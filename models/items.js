module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    category: DataTypes.TEXT,
    img: DataTypes.TEXT
  });

  return items;
};
