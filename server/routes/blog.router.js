const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res)=>{
    console.log('in demo route')
    res.sendStatus(200)
})

router.post('/', rejectUnauthenticated, (req, res)=>{
    console.log(req.body)
    const date = new Date();
    console.log(date)
    const values = [req.user.id, req.body.title, req.body.body, date, req.body.playlist]
    const queryText = `
        INSERT INTO "post" ("author", "title", "body", "date", "playlist")
        VALUES ($1, $2, $3, $4, $5);
    `
    pool.query(queryText, values).then((response)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })
})



module.exports = router;
