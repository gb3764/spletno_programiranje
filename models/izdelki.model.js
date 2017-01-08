"use strict";
 
module.exports = function(sequelize, DataTypes) {
var Izdelki = sequelize.define('izdelki', {
	naslov: {
		type: DataTypes.CHAR,
		allowNull: false
	},
	skladbe: {
		type: DataTypes.TEXT
	},
	cena: {
		type: DataTypes.FLOAT,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true,
	classMethods: {
      associate: function(models) {
        Izdelki.belongsTo(models.izvajalci);
		Izdelki.belongsTo(models.kategorije);
      }
    }
});
 
  return Izdelki;
};