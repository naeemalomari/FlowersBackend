'use strict';

const axios = require('axios')
const flowerModel = require('../model/flower.model')


const getFlowersData = async (req, res) => {
    const url = `https://flowers-api-13.herokuapp.com/getFlowers`
    axios.get(url)
        .then(result => {
            const flowerData = result.data.flowerslist.map(smell => {
                return new flowerModel(smell)
            })
            res.send(flowerData);
        }).catch(err => {
            console.log(`==========000000=======`)
            console.log(err);
            console.log(`==========0000==============`)
        })

}
module.exports = getFlowersData;