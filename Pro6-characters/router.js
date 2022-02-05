
const charactersRouter= require('./views/characters');
const router = require('express').Router();

//Rutas

//const charactersRouter = require('./views/characters');
router.use('/caracters', charactersRouter);

module.exports = router;




