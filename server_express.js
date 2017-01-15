var models = require('./models');
var express = require('express');
var expressSession = require('express-session');
var app = express();
var $ = require('jquery');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(
  expressSession({
    secret: '1234567890QWERTY',
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 3600000
    }
  })
);

var Promise = require('bluebird');
var orm = models.sequelize;
var modeli;
var izdelki;
var kategorije;
var izvajalci;
var narocila;
var izdelkiVNarocilu;

orm.sync({
  force: true,
  logging: console.log
}).then(function() {
	modeli = orm.models;
	izdelki = modeli.izdelki;
	kategorije = modeli.kategorije;
	izvajalci = modeli.izvajalci;
	narocila = modeli.narocila;
	izdelkiVNarocilu = modeli.izdelkiVNarocilu;
	kategorije.bulkCreate([
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
	izvajalci.bulkCreate([
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
	izdelki.bulkCreate([
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
});

//VIEWS

app.set('view engine', 'ejs');

app.get('/landing_page.html', function(req, res) {
	
	izdelki.findAll().then(function(seznamIzdelkov) {
		kategorije.findAll().then(function(seznamKategorij) {
			izvajalci.findAll().then(function(seznamIzvajalcev) {
				res.render('landing_page', {
					seznamIzdelkov: seznamIzdelkov,
					seznamKategorij: seznamKategorij,
					seznamIzvajalcev: seznamIzvajalcev
				});
			});
		});
	});
});

app.get('/izdelek_page.html', function(req, res) {
	
	var apos = "&#39;";
	var regex = new RegExp(apos, 'g');
	
	res.render('izdelek_page', {
		izvajalec: req.query.izvajalec,
		naslov: req.query.naslov,
		skladbe: req.query.skladbe.replace(regex, "'"),
		cena: req.query.cena
	});
});

app.get('/dodajVKosarico', function(req, res) {
	
	if (!req.session.kosarica) {
		
		req.session.kosarica = [];
	}
	var item = {izvajalec: req.query.izvajalec, naslov: req.query.naslov, cena: req.query.cena};
	req.session.kosarica.push(item);
	res.send(req.session.kosarica);
});

app.get('/odstraniIzKosarice', function(req, res) {
	
	var index = -1;
	for (var i=0; i < req.session.kosarica.length; i++) {
		
		if (req.session.kosarica[i].naslov == req.query.naslov) {
			
			index = i;
			break;
		}
	}
	
	if (index > -1) {
		
		req.session.kosarica.splice(index, 1);
	}
	
	res.render('kosarica_page1', {
		kosarica: req.session.kosarica
	});
});

app.get('/kosarica_page1.html', function(req, res) {
	
	if (!req.session.kosarica) {
		
		req.session.kosarica = [];
	}
	
	res.render('kosarica_page1', {
		kosarica: req.session.kosarica
	});
});

app.post('/kosarica_page3.html', function(req, res) {
	
	if (!req.session.racun) {
		
		req.session.racun = [];
	}
	
	var racun = req.body;
	req.session.racun[0] = racun;
	
	res.render('kosarica_page3');
});

app.post('/kosarica_page4.html', function(req, res) {
	
	if (!req.session.dostava) {
		
		req.session.dostava = [];
	}
	
	var dostava = req.body;
	req.session.dostava[0] = dostava;
	
	res.render('kosarica_page4', {
		kosarica: req.session.kosarica,
		racun: req.session.racun,
		dostava: req.session.dostava
	});
});

app.get('/oddajNarocilo', function(req, res) {
	
	var cena = 0.00;
	req.session.kosarica.forEach(function(izdelek) {
		
		cena += parseFloat(izdelek.cena);
	});
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	
	if (dd < 10) {
		
		dd='0'+dd;
	} 
	if (mm < 10) {
		
		mm='0'+mm;
	} 

	today = mm+'/'+dd+'/'+yyyy;
	
	narocila.create({
		cena: cena,
		ime: req.session.racun[0].ime,
		priimek: req.session.racun[0].priimek,
		ulica: req.session.racun[0].ulica,
		kraj: req.session.racun[0].mesto,
		telefon: req.session.racun[0].telefon,
		email: req.session.racun[0].email,
		placilo: req.session.dostava[0].nacinplacila,
		dostava: req.session.dostava[0].tipdostave,
		datum: today
	}).then(function(narocilo) {
		
		req.session.kosarica.forEach(function(izdelek) {

			izdelki.findAll({
				where: {
					naslov: izdelek.naslov
				},
				attributes: ['id']
			}).then(function(izdelekBaza) {
				izdelkiVNarocilu.create({
					narocilaId: narocilo.id,
					izdelkiId: izdelekBaza[0].id
				});
			});
		});
	}).then(function() {
		req.session.kosarica = [];
		res.redirect('landing_page.html');
	});
});

app.use('/', express.static(__dirname + '/'));

//vklop strežnika
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Strežnik zagnan na http://%s:%s", host, port)

})