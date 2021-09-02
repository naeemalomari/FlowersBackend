'use strict';

const mongoose = require('mongoose');

const flowerSchema =mongoose.Schema({
    name :{ 
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    instructions:String,
    photo:String,
});

const favFlowerModel=mongoose.model('userFlowers',flowerSchema)
module.exports= favFlowerModel;