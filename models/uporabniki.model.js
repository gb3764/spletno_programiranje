"use strict";
 
module.exports = function(sequelize, DataTypes) {
var bcrypt = require('bcrypt-nodejs');
var Uporabniki = sequelize.define('uporabniki', {
	uporabniskoIme: {
		type: DataTypes.CHAR,
		unique: true,
		allowNull: false
	},
	geslo: {
		type: DataTypes.TEXT,
		allowNull: false
	}
}, {
	hooks: {
		afterValidate: function(uporabnik) {
			uporabnik.geslo = bcrypt.hashSync(uporabnik.geslo, bcrypt.genSaltSync(1));
		}
	},
	timestamps: false,
	freezeTableName: true
});
 
  return Uporabniki;
};