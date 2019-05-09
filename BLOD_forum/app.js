var mysql = require('mysql');
var express = require('express');
var http = require('http');
var fs = require('fs');
var io = require('socket.io');

var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'blod_db'
});

con.connect(err => {
    //connection à la base
    if (err) throw err;
    console.log("Connecté");

    var server = http.createServer(app);
    app.get('/', (req, res)=>{
        res.sendFile(__dirname + '/index.html');
    })

    var io = require('socket.io').listen(server);

    io.sockets.on('connection', function (socket, pseudo) {
        // Dès qu'on nous donne un pseudo, on le stocke en variable de session
        socket.on('new_Account', function (data) {
            console.log(data);
            socket.name = data.name;
            con.query('INSERT INTO user (user_name, user_password) VALUES("'+data.name+'", "'+data.password+'")', (err, result) => {
                //exploitation du fichier
                if (err) throw err;
            });
        });

        // Dès qu'on reçoit un "message" (clic sur le bouton), on le note dans la console
        socket.on('message', function (message) {
            // On récupère le pseudo de celui qui a cliqué dans les variables de session
            socket.broadcast.emit('rep', message);
        });
    });

    server.listen(8080);

    // con.query('SELECT * FROM user', (err, result) => {
    //     //exploitation du fichier
    //     if (err) throw err;
    //     console.log(result);
    // });
});
