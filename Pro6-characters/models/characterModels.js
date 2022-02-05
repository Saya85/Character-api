



let db = require('../db');

charactersModels = {};

//Defino las funciones que se ejecutaran en los endpoints

charactersModels.findAll = () => db;

charactersModels.findById = (id) => db.find(characters => characters.id == id);

charactersModels.findByname = (name) => db.filter(characters => characters.name == name);

charactersModels.findBystatus = (status) => db.filter(characters => characters.status == status);

charactersModels.findBygender = (gender) => db.filter(characters => characters.gender == gender);

charactersModels.findByspecies = (species) => db.filter(characters => characters.species == species);

charactersModels.findByorigin = (origin) => db.filter(characters => characters.origin == origin);

charactersModels.findByimage = (image) => db.find(characters => characters.image == image);

charactersModels.post = (newCharacter) => {
    db.push(newCharacter);
    return newCharacter;
}

charactersModels.update = (newCharacter) => {
    let characters = db.filter(character => character.id != newCharacter.id);
    characters.push(newCharacter);
    db = characters;
    return newCharacter;
}
charactersModels.delete = (id) => {
    let characters = db.filter(character => character.id != id);
    db = characters;
    return `Registro ${id} eliminado correctamente`;
}


//Exporto la funcionalidad del modelo de datos
module.exports = charactersModels;