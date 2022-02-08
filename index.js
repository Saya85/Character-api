const express = require('express');
//const bodyParser = require('body-parser');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');


const app = express();
const PORT = process.env.PORT || 3000; //Configuramos puerto heroku

//Middleware
//app.use(morgan('dev'));
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//Routing
//const charactersRouter = require('./views/characters');
//app.use('/caracters', charactersRouter);
const router = require('./router.js');
app.use(router);

//Ruta Raiz
app.get('/', (req, res) => {
    let date = new Date();
    console.log(`home route works ------  ${date}`);
    res.send('Express mañana 2');
});

// Iniciamos el server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}.bgGreen.black`);
});

