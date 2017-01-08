var models = require('./models');
var express = require('express');
var app = express();

models.sequelize.sync({
  force: true
})

var models = models.sequelize.models;
var Izdelki = models.Izdelki;
var Kategorije = models.Kategorije;
var Izvajalci = models.Izvajalci;

//PODATKOVNA BAZA

//var Sequelize = require('sequelize');
//var sequelizeConnect = require('sequelize-connect');
//var discover = [__dirname + '/models'];

/*sequelizeConnect.discover = [__dirname + '/models'];
sequelizeConnect.connect(
	'postgres',
	'postgres',
	'postgres',
	{
		dialect: 'postgres'
	}
);

sequelizeConnect.sync({
	force: true,
	logging: console.log
});*/

//vzpostavitev povezave
/*var connection = new Sequelize(
	'postgres',
	'postgres',
	'postgres',
	{
		dialect: 'postgres'
	},
	discover
);*/

//var models = connection.models;

//definicija tabel
/*var Uporabniki = connection.define('uporabniki', {
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
});*/

/*var Uporabniki = connection.import(__dirname + "/models/uporabniki.model");
Uporabniki.sync({
	force: false,
	logging: console.log
});*/

/*var Izdelki = connection.define('izdelki', {
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
});*/

/*var Izvajalci = connection.define('izvajalci', {
	izvajalec: {
		type: Sequelize.CHAR,
		unique: true,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});*/

/*var Kategorije = connection.define('kategorije', {
	kategorija: {
		type: Sequelize.CHAR,
		unique: true,
		allowNull: false
	}
}, {
	timestamps: false,
	freezeTableName: true
});*/

//Izdelki.belongsTo(Izvajalci);
//Izdelki.belongsTo(Kategorije);

/*var Narocila = connection.define('narocila', {
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
});*/

/*var IzdelkiVNarocilu = connection.define('izdelkiVNarocilu', {
	//empty
}, {
	timestamps: false,
	freezeTableName: true
});*/

//IzdelkiVNarocilu.belongsTo(Narocila);
//IzdelkiVNarocilu.belongsTo(Izdelki);

//vstavljanje v bazo
/*connection.sync({
	force: false,
	logging: console.log
}).then(function () {
	Kategorije.bulkCreate([
	{
		kategorija: 'pop'
	},
	{
		kategorija: 'rock'
	},
	{
		kategorija: 'metal'
	},
	{
		kategorija: 'electronic'
	},
	{
		kategorija: 'hip hop'
	},
	{
		kategorija: 'blues'
	},
	{
		kategorija: 'jazz'
	},
	{
		kategorija: 'classical'
	},]);
	Izvajalci.bulkCreate([
	{
		izvajalec: 'Miles Davis'
	},
	{
		izvajalec: 'The Beatles'
	},
	{
		izvajalec: 'Nirvana'
	},
	{
		izvajalec: 'Slum Village'
	},
	{
		izvajalec: 'Deadmau5'
	}]);
	Izdelki.bulkCreate([
	{
		naslov: 'Kind of Blue',
		skladbe: "So What, Freddie Freeloader, Blue in Green, All Blues, Flamenco Sketches",
		cena: 10.00,
		izvajalciId: 1,
		kategorijeId: 7
	},
	{
		naslov: 'Nevermind',
		skladbe: "Smells Like Teen Spirit, In Bloom, Come as You Are, Breed, Lithium, Polly, Territorial Pissings, Drain You, Lounge Act, Stay Away, On a Plain, Something in the Way",
		cena: 10.00,
		izvajalciId: 3,
		kategorijeId: 2
	},
	{
		naslov: 'Fantastic Vol 2',
		skladbe: "Intro, Conant Gardens, I Don't Know, Jealousy, Climax (Girl Shit), Hold Tight, Tell Me, What It's All About, Forth and Back, Untitled/Fantastic, Fall in Love, Get Dis Money, Raise It Up, CB4, Once Upon a Time, Players, Eyes Up, 2 U 4 U, Go Ladies, Thelonius, Who Are We",
		cena: 8.00,
		izvajalciId: 4,
		kategorijeId: 5
	},
	{
		naslov: 'Random Album Title',
		skladbe: "Sometimes Things Get Whatever, Complications, Slip, Some Kind of Blue, Brazil (2nd Edit), Alone With You, I Remember, Faxing Berlin (Piano Acoustic Version), Faxing Berlin, Not Exactly, Arguru, So There I Was",
		cena: 10.00,
		izvajalciId: 5,
		kategorijeId: 4
	},
	{
		naslov: 'Abbey Road',
		skladbe: "Come Together, Something, Maxwell's Silver Hammer, Oh! Darling, Octopus's Garden, I Want You, Here Comes the Sun, Because, You Never Give Me Your Money, Sun King, Mean Mr. Mustard, Polythene Pam, She Came in Thorugh the Bathroom Window, Golden Slumbers, Carry That Weight, The End, Her Majesty",
		cena: 15.00,
		izvajalciId: 2,
		kategorijeId: 1
	}]);
});*/

/*connection.sync({
	force: false,
	logging: console.log
}).then(function () {
	Izdelki.findAll().then(function(test) {
		console.log(test[0].dataValues);
	});
});*/

//Izdelki.findAll();

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