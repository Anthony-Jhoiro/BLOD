var mysql = require('mysql');
var express = require('express');
var http = require('http');
var fs = require('fs');
var bodyParser = require("body-parser");

var app = express();

var bdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "chocolat78",
    database: 'blod_db'
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





bdd.connect(err => {
    //connection à la base
    if (err) throw err;
    console.log("Connecté à la base de donnée");


    var server = http.createServer(app);
    //Création du serveur

    //Le fichier débug du serveur
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    //initialisation de socket.io
    var io = require('socket.io').listen(server);

    //quand un utilisateur se connecte
    io.sockets.on('connection', function (socket, user_id) {

        // Débug d'envoie de notification

        rl.on('line', (input) => {
            console.log(`Received: ${input}`);
            if (input === 'ping') {
                bdd.query('SELECT DISTINCT g_id FROM user_groupe', (err, result) => {
                    for (let groupe in result) {
                        socket.broadcast.to(groupe).emit('rep', {
                            group: groupe.u_id,
                            content: "ping",
                            datetime: '2019-11-03',
                            autor: 0
                        });
                    }
                })
            }
        });

        /*-----------------------------------------------------------------------------------------------------------------*/

        // Création d'un compte

        socket.on('new_Account', (data, fn) => {
            bdd.query('SELECT u_id FROM user WHERE u_mail="' + data.mail + '";', (err, result) => {
                if (err) throw err;
                // Si l'adresse mail n'est pas utilisée

                //TODO: Vérifier le nom d'utilisateur (éviter les doublons)

                if (result == 0) { // Si l'adresse mail et le pseudo sont disponible
                    console.log("Nouveau compte :", data.name);
                    socket.name = data.name;
                    bdd.query('INSERT INTO user (u_name, u_password, u_birth, u_mail) VALUES("' + data.name + '", "' + data.password + '", "' + data.birthDate + '", "' + data.mail + '")', (err, result) => {
                        //exploitation du fichier
                        if (err) throw err;
                    });
                    fn({ result: true });
                } else { // Si l'adresse mail ET/OU le pseudo est pris, renvoie false
                    fn({ result: false });
                }
            });

        });

        /*-----------------------------------------------------------------------------------------------------------------*/

        // Quandl'utilisateur veut récupérer les précédents messages

        socket.on('getMessagesContent', (data, rep) => {
            // Récupération des informations de connection
            bdd.query('SELECT u_name, m_content, m_datetime FROM messages INNER JOIN user ON messages.m_from = user.u_id WHERE m_group=' + data + ' ORDER BY m_datetime;', (err, result) => {
                if (err) throw err;

                //Mise en forme du résultat
                let msgContent = [];
                for (let message of result) {
                    msgContent.push({
                        autor: message.u_name,
                        content: message.m_content,
                        dateTime: message.m_datetime
                    });
                }
                //envoie de la réponse
                rep(msgContent);
            })
        });

        /*-----------------------------------------------------------------------------------------------------------------*/

        // Quand l'utilisateur veut créer un nouveau groupe de chat

        socket.on('new_chat', data => {
            // TODO: Vérifier l'autorisation de l'utilisateur
            bdd.query('INSERT INTO groupe (g_name) VALUES ("' + data.name + '"); ', (err, result) => {
                if (err) throw err;
            })
        });

        /*-----------------------------------------------------------------------------------------------------------------*/

        // Quand l'utilisateur se connecte à son compte

        socket.on('login', (data, rep) => {
            // Vérification des informations utilisateurs
            bdd.query('SELECT u_id, u_name FROM user WHERE u_name="' + data.name + '" AND u_password="' + data.password + '";', (err, result) => {
                if (err) throw err;

                // On renvoie la réponse de la bdd
                if (result == 0) { // Si le compte n'est pas dans la bdd
                    rep(false, result[0]);

                } else { // Si le compte existe
                    rep(true, result[0]);
                    bdd.query('SELECT g_id FROM user_groupe WHERE u_id=' + result[0].u_id + ';', (err, result) => {
                        if (err) throw err;
                        console.log(result);
                        for (let groupe in result) socket.join(groupe.g_id);
                    });
                }
            });
        });

        /*-----------------------------------------------------------------------------------------------------------------*/

        // Quand l'utilisateur envoie un message
        socket.on('message', data => {

            // TODO: Ajouter une récupération du dateTime
            data.datetime = '2019-11-03'; /* À suprimer */

            // envoie des données à la base de donnée
            bdd.query('INSERT INTO messages (m_group, m_content, m_datetime, m_from) VALUES ("' + data.group + '", "' + data.content + '", "' + data.datetime + '", "' + data.user.id + '");', err => {
                if (err) throw err;
            });

            // envoie du message aux utilisateurs connectés sur le groupe
            socket.broadcast.to(data.group).emit('rep', data);
        });

        /*-----------------------------------------------------------------------------------------------------------------*/

        // Changement de groupe de message

        // TODO: Ajouter une condition si l'utilisateur a le droit ou non d'entrer dans le nouveau groupe
        socket.on('changeroom', room => {
            // socket.leave(socket.room); // On quitte l'ancien groupe
            socket.join(room); // On rejouint le nouveau
            socket.room = room; // On met à jour le groupe courant
        });

        /*-----------------------------------------------------------------------------------------------------------------*/


    });

    server.listen(8080);
    //mise en écoute du serveur
});
