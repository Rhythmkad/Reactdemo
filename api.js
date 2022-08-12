/*var order = require("./user")
const dbop = require("./getuser")

dbop.getData().then(result => {
console.log(result)

})*/




var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var router = express.Router();


app.use (bodyparser.urlencoded({ extended: true }));
app.use (bodyparser.json());
app.use (cors());
app.use ('/api', router);

var mysql      = require('mysql');
const { request, response } = require('express');
var connection = mysql.createConnection({
    host     : 'localhost',
    port: '3306',
    database : 'mydb',
    user     : 'root',
    password : '',
});


router.use((request,response,next) =>{

    console.log('middleware');
    next();
});


router.route('/user').get((request,response)=>{
    connection.connect(function(err) {
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
    
        console.log('Connected as id ' + connection.threadId);
    });
    
    connection.query('SELECT * FROM customer', function (error, results, fields) {
        if (error)
            throw error;
    
        results.forEach(result => {
            response.json(result[0]);
        });
    });

});
var port = mysql.Port;
app.listen(port);
console.log('user api running at' + port);




/*var mysql      = require('mysql');
const { request, response } = require('express');
var connection = mysql.createConnection({
    host     : 'localhost',
    port: '3306',
    database : 'mydb',
    user     : 'root',
    password : '',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM customer', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});*/

connection.end();