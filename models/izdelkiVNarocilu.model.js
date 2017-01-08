"use strict";
 
module.exports = function(sequelize, DataTypes) {
var IzdelkiVNarocilu = sequelize.define('izdelkiVNarocilu', {
	//empty
}, {
	timestamps: false,
	freezeTableName: true,
	classMethods: {
      associate: function(models) {
        IzdelkiVNarocilu.belongsTo(models.narocila);
		IzdelkiVNarocilu.belongsTo(models.izdelki);
      }
    }
});
 
  return IzdelkiVNarocilu;
};