const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res)=>{
    const queryText = `
        SELECT * FROM "post"
        ORDER BY "date" DESC;
    `
    pool.query(queryText).then((response)=>{
        console.log(response);
        res.send(response.rows)
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })
})


//allows us to post new blog entry
router.post('/', rejectUnauthenticated, (req, res)=>{
    const values = [req.user.id, req.body.title, req.body.body, new Date()]
    const queryText = `
        INSERT INTO "post" ("author", "title", "body", "date")
        VALUES ($1, $2, $3, $4)
    `
    pool.query(queryText, values).then((response)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })
})

router.delete('/:id', rejectUnauthenticated, (req, res)=>{
    const id = req.params.id
    const queryText = `
        DELETE FROM "post"
        WHERE "id" = $1
    `
    pool.query(queryText, [id]).then((response)=>{
        console.log(response)
        res.sendStatus(204);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;
