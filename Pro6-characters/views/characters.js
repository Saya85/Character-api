
const express =require('express');
const router = express.Router();
const characterController = require('../controllers/characterControllers');

//rutas
//ruta todos los personajes

router.get('/', characterController.getAll);

//ruta pesronaje por id

router.get('/:id', characterController.getById );

//ruta personajes por nombre

router.get('/nombre/:name', characterController.getByname );

//ruta personajes por estado

router.get('/estado/:status', characterController.getBystatus );

//ruta personajes por genero

router.get('/genero/:gender', characterController.getBygender );

//ruta personajes por especie

router.get('/especie/:species', characterController.getByspecies );

//ruta personajes por origen

router.get('/origen/:origin', characterController.getByorigin );

//ruta personaje por imagen

router.get('/imagen/:image', characterController.getByimage );

//ruta crear personaje

router.post('/', characterController.create);

//ruta modificar personaje

router.put('/:id',characterController.update);

//ruta eliminar personaje

router.delete('/:id', characterController.delete);



  /*   router.get('/', (req, res) =>{
        res.json(characters);
    });
 */
  /*   router.get('/:id', (req, res) =>{
        const {id} = req.params;
        let.character = characters.find(character => characters.id == id);
        res.json(characters);
    }); */
/* 
    router.get('/nombre/:name', (req, res) =>{
      const {name} = req.params;
      let character = characters.find(character => character.name == name);
      res.json(character);
    } )


    router.post('/', (req, res) => {
      const {id, name} = req.body;
      const character = {id, name};
      characters.push(character);
      res.json(character);
  });


    router.put('/name/:name', (req, res) => {
        const {id} = req.params;
        const {name} = req.body;
        let listCharacter = characters.filter(character => character.id != id);
        let character = {id, name};
        movieList.push(character);
        character = listCharacter;
        res.json(character);
    });

    router.delete('/:id', (req, res) => {
      const {id} = req.params;
      let listCharacter = characters.filter(character => character.id != id);
      characters = listCharacter;
      res.send(`Registro ${id} eliminado`);
  });
  
 */
    module.exports = router;