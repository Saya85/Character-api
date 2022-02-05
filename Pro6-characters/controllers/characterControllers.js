//Importo modelo de datos
const charactersModels = require('../models/characterModels');

const characterController = {};
// todos los personajes

characterController.getAll = (req, res) =>{
    res.json(charactersModels.findAll());
};

// personajes por ID

characterController.getById = (req, res) =>{
    const id = req.params.id;
    res.json(charactersModels.findById(id));
};

//personages por nombre

characterController.getByname = (req, res) =>{
    const name = req.params.name;
    res.json(charactersModels.findByname(name));
};

//personajes por estado

characterController.getBystatus = (req, res) =>{
    const status = req.params.status;
    res.json(charactersModels.findBystatus(status));
};

//personajes por genero

characterController.getBygender = (req, res) =>{
    const gender = req.params.gender;
    res.json(charactersModels.findBygender(gender));
};

//personajes por especie

characterController.getByspecies = (req, res) =>{
    const species = req.params.species;
    res.json(charactersModels.findByspecies(species));
};

//personajes por origen

characterController.getByorigin = (req, res) =>{
    const origin = req.params.origin;
    res.json(charactersModels.findByorigin(origin));
};

//personajes por imagen

characterController.getByimage = (req, res) =>{
    const image = req.params.image;
    res.json(charactersModels.findByimage(image));
};

// crear personaje

characterController.create = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const status = req.body.status;
    const species = req.body.species;
    const gender = req.body.gender;
    const origin = req.body.origin;
    const image = "https://rickandmortyapi.com/api/character/avatar/4.jpeg";
    const character = {id, name, status, species, gender, origin, image};
    res.json(charactersModels.post(character));
};

//modificar personaje

characterController.update =  (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(charactersModels.update({id, ...body}));
};

//borrar personaje

characterController.delete =  (req, res) => {
    const {id} = req.params;
    res.json(charactersModels.delete(id));
};


module.exports = characterController;