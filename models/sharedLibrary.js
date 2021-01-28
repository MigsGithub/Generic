var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var SharedLibrary = sequelize.define("Book", {
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      author: {
          type: DataTypes.STRING,
          allowNull: false
      },
      isdn: {
          type: DataTypes.STRING,
          allowNull: false
      },
      checkedOut: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });

    SharedLibrary.associate = function(models) {
        SharedLibrary.hasMany(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return SharedLibrary;
};