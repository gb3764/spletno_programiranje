"use strict";
 
module.exports = function(sequelize, DataTypes) {
var Izvajalci = sequelize.define('izvajalci', {
	izvajalec: {
		type: DataTypes.TEXT,
		unique: true,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});
 
  return Izvajalci;
};