//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan')
var controlador=require("../servidor/controladores/controlador");


var app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());


// routes

app.get("/", controlador.todosLosPosts);




// start server
var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});