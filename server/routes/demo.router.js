const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=>{
    console.log('in demo route')
    res.sendStatus(200)
})

module.exports = router;
