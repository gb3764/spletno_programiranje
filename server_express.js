var express = require('express');
var app = express();
var Sequelize = require('sequelize');

//PODATKOVNA BAZA
var connection = new Sequelize('postgres','postgres','postgres', {
	dialect: 'postgres'
});

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

connection.sync({
	force: true,
	logging: console.log
});

app.use('/public', express.static(__dirname + '/public'));

//GET HTML
app.get('/landing_page.html', function (req, res) {
   res.sendFile( __dirname + "/" + "landing_page.html" );
})

app.get('/izdelek_page.html', function (req, res) {
   res.sendFile( __dirname + "/" + "izdelek_page.html" );
})

app.get('/kontakt.html', function (req, res) {
   res.sendFile( __dirname + "/" + "kontakt.html" );
})

app.get('/o_nas.html', function (req, res) {
   res.sendFile( __dirname + "/" + "o_nas.html" );
})

app.get('/pogoji_poslovanja.html', function (req, res) {
   res.sendFile( __dirname + "/" + "pogoji_poslovanja.html" );
})

app.get('/kosarica_page1.html', function (req, res) {
   res.sendFile( __dirname + "/" + "kosarica_page1.html" );
})

app.get('/kosarica_page2.html', function (req, res) {
   res.sendFile( __dirname + "/" + "kosarica_page2.html" );
})

app.get('/kosarica_page3.html', function (req, res) {
   res.sendFile( __dirname + "/" + "kosarica_page3.html" );
})

app.get('/kosarica_page4.html', function (req, res) {
   res.sendFile( __dirname + "/" + "kosarica_page4.html" );
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Strežnik zagnan na http://%s:%s", host, port)

})