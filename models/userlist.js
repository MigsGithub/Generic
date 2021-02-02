var bcrypt = require("bcryptjs");
// the associative model to get the two db's to talk
module.exports = function(sequelize, DataTypes) {
    // const ReadList = sequelize.define('readList', { name: DataTypes.STRING });
    // const User = sequelize.define('User', { name: DataTypes.STRING });
    // ReadList.belongsToMany(User, { through: 'UserReadList' });
    // User.belongsToMany(ReadList, { through: 'UserReadList' });
    var UserList = sequelize.define("UserReadList", {
        userId: {
           type: DataTypes.INTEGER,
           allowNull: false,
           references: {
               model: "User",
               key: "id"
           }
        },
        listId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "List",
                key: "id"
            }
        }
    });
    return UserList;
};