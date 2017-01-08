"use strict";
 
module.exports = function(sequelize, DataTypes) {
var Kategorije = sequelize.define('kategorije', {
	kategorija: {
		type: DataTypes.CHAR,
		unique: true,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});
 
  return Kategorije;
};