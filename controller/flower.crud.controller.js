'use strict';

const flower = require('../model/flower.mongoose.model')

const createFavFlower = async (req, res) => {
    const { instructions, photo, name } = req.body


    const slug = name.toLowerCase().split(' ').join('-')
    flower.find({ name: name }, (error, data) => {
        if (data.length > 0) {
            res.send('Please you entered this data before')
        } else {
            const newFlower = new flower({
                name: name,
                slug: slug,
                instructions: instructions,
                photo: photo
            });
            newFlower.save()
            res.send(newFlower);
        }
    })

}



const getFavFlower = async (req, res) => {
    flower.find({}, (error, result) => {

        res.send(result);
    })
}

const deleteFavFlower = async (req, res) => {
    const slug = req.params.slug;
    flower.deleteOne({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
}

const updateFavFlower= async (req, res) => {
    const id=req.params.slug;
    const {name} =req.body
    flower.findOneAndUpdate({_id:id} , {name:name} , (error,item)=>{
        res.send(item)
    })
}

module.exports = {
    createFavFlower,
    getFavFlower,
    deleteFavFlower,
    updateFavFlower
}