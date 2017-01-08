"use strict";
 
module.exports = function(sequelize, DataTypes) {
var Uporabniki = sequelize.define('uporabniki', {
	uporabniskoIme: {
		type: DataTypes.CHAR,
		unique: true,
		allowNull: false
	},
	geslo: {
		type: DataTypes.CHAR,
		allowNull: false
	}
}, {
	hooks: {
		afterValidate: function(uporabnik) {
			uporabnik.geslo = bcrypt.hashSync(uporabnik.geslo,8);
		}
	},
	timestamps: false,
	freezeTableName: true
});
 
  return Uporabniki;
};