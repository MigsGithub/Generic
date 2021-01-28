var bcrypt = require ("readList");
const user = require("./user");

module.exports = function(sequelize, DataTypes) {
    var readList = sequelize.define("Read List", {
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isbookTitle: true
            }
        },

    });

}

// not complete yet