var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("List", {
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
  
    
    List.associate = function(models) {
        List.belongsToMany(models.User, {
            through: 'UserList',
            as: "user",
            foreignKey: "userId"
        });
    };
    
    return List;
};