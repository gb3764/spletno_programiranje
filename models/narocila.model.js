"use strict";
 
module.exports = function(sequelize, DataTypes) {
var Narocila = sequelize.define('narocila', {
	cena: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	ime: {
		type: DataTypes.CHAR,
		allowNull: false
	},
	priimek: {
		type: DataTypes.CHAR,
		allowNull: false
	},
	ulica: {
		type: DataTypes.CHAR,
		allowNull: false
	},
	kraj: {
		type: DataTypes.CHAR,
		allowNull: false
	},
	telefon: {
		type: DataTypes.CHAR
	},
	email: {
		type: DataTypes.CHAR,
	},
	placilo: {
		type: DataTypes.CHAR,
		allowNull: false
	},
	dostava: {
		type: DataTypes.CHAR,
		allowNull: false
	},
	datum: {
		type: DataTypes.DATE
	}
}, {
	timestamps: false,
	freezeTableName: true
});
 
  return Narocila;
};