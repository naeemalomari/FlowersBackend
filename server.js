'use strict';

const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 3005;
const getFlowersData = require('./controller/Flowers.controller')
const crud = require('./controller/flower.crud.controller')


const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/FavFlowers',{});

//http://localhost:3005/allFlowers
server.get('/allFlowers', getFlowersData);


server.get('/feels', (req, res) => {
    res.send(`I FEEL LIKE THIS IS THE FIRST TIME I AM DEVELOPING MAN WHAT THE HELL I NEED TO KEEP PRACTICING EVERY TIME MAN`)
})
///////////////////////CRUD SERVERS///////////////////////
//http://localhost:3005/flower/favorite
server.post('/flower/favorite', crud.createFavFlower)

server.get('/flower/favorite', crud.getFavFlower)

server.delete('/flower/favorite', crud.deleteFavFlower)

server.put('/flower/favorite', crud.updateFavFlower)

////////////////////////////////////////////////////////////////////
//http://localhost:3005/testest
server.get('/testest', (req, res) => {
    res.send(`I AM DOING WELL BABY THANKS FOR ASKING `)
})

server.listen(PORT, () => {

    console.log(`listen to the ${PORT} baby`)
})