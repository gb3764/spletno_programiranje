var express = require('express');
var app = express();
var Sequelize = require('sequelize');

//PODATKOVNA BAZA

//vzpostavitev povezave
var connection = new Sequelize('postgres','postgres','postgres', {
	dialect: 'postgres'
});

//definicija tabel
var Uporabniki = connection.define('uporabniki', {
	uporabniskoIme: {
		type: Sequelize.CHAR,
		unique: true,
		allowNull: false
	},
	geslo: {
		type: Sequelize.CHAR,
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

var Izdelki = connection.define('izdelki', {
	naslov: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	skladbe: {
		type: Sequelize.TEXT
	},
	cena: {
		type: Sequelize.FLOAT,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});

var Izvajalci = connection.define('izvajalci', {
	izvajalec: {
		type: Sequelize.CHAR,
		unique: true,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});

var Kategorije = connection.define('kategorije', {
	kategorija: {
		type: Sequelize.CHAR,
		unique: true,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});

Izdelki.belongsTo(Izvajalci);
Izdelki.belongsTo(Kategorije);

var Narocila = connection.define('narocila', {
	cena: {
		type: Sequelize.FLOAT,
		allowNull: false
	},
	ime: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	priimek: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	ulica: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	kraj: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	telefon: {
		type: Sequelize.CHAR
	},
	email: {
		type: Sequelize.CHAR,
	},
	placilo: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	dostava: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	datum: {
		type: Sequelize.DATE
	}
}, {
	timestamps: false,
	freezeTableName: true
});

var IzdelkiVNarocilu = connection.define('izdelkiVNarocilu', {
	//empty
}, {
	timestamps: false,
	freezeTableName: true
});

IzdelkiVNarocilu.belongsTo(Narocila);
IzdelkiVNarocilu.belongsTo(Izdelki);

//sinhronizacija z bazo
connection.sync({
	force: true,
	logging: console.log
});

//VIEWS

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	
	res.render('landing_page');
});

app.use('/', express.static(__dirname + '/'));

//vklop strežnika
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Strežnik zagnan na http://%s:%s", host, port)

})