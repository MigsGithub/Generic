// var bcrypt = require("bcryptjs");
// // Creating our sharedLibrary model
// module.exports = function(sequelize, DataTypes) {
//   var ReadList = sequelize.define("List", {
//       title: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//               len: [1]
//           }
//       },
//       author: {
//           type: DataTypes.STRING,
//           allowNull: false
//       },
//       isdn: {
//           type: DataTypes.STRING,
//           allowNull: false
//       },
//       checkedOut: {
//           type: DataTypes.BOOLEAN,
//           defaultValue: false
//       }
//     });
//     // associating the Read List with all users
    
//     // ReadList.associate = function(models) {
//     //     ReadList.hasMany(models.User, {
//     //         foreignKey: {
//     //             allowNull: false
//     //         }
//     //     });
//     // };
    
//     return ReadList;
// };