const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios').default;

const router = express.Router();

router.get('/:word', (req, res) => {
    axios.request({
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.word}/pertainsTo`,
        headers: {
            'x-rapidapi-key': `${process.env.WORDS}`,
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
    }).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

module.exports = router;
