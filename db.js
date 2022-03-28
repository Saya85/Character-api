
const config = require ('./config/config.json');
const {Sequelize, DataTypes} = requiere('sequelize');

/* const sequelize = new Sequelize(
  process.env.mysql_DATABASE || config.development.datebase,
  process.env.mysql_USER || config.development.username,
  process.env.mysql_PASSWORD || config.development.password,
  {
    
  }
) */

   let characters = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": "Citadel of Ricks",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin":"Earth (Replacement Dimension)",
      "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
  ]

module.exports = characters; 