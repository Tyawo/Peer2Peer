module.exports = function(sequelize, DataTypes) {
  var signup = sequelize.define("signup", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        IsLowercase: true,
        isUppercase: true,
        isAlphanumeric: true,
        len: [6, 10]
      }
    }
  });
  return signup;
};