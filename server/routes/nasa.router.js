const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/photo', (req, res) =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA}`).then((response)=>{
        console.log(response.data)
        res.send(response.data)
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })

})

module.exports = router;
