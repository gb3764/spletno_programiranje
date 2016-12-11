var express = require('express');
var app = express();

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