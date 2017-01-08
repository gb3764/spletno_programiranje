"use strict";
 
module.exports = function(sequelize, DataTypes) {
var Izvajalci = sequelize.define('izvajalci', {
	izvajalec: {
		type: DataTypes.CHAR,
		unique: true,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});
 
  return Izvajalci;
};