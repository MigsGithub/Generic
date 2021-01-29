var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  var ReadList = sequelize.define("List", {
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
      read: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
  
    
    // ReadList.associate = function(models) {
    //     ReadList.hasMany(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    
    return ReadList;
};