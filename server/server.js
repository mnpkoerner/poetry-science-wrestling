const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

//Passport
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());





//Routes
const demo = require('./routes/demo.router.js');
const userRouter = require('./routes/user.router');

//Routes AGAIN
app.use('/demo', demo);
app.use('/api/user', userRouter);





const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for post/put requests
app.use(express.static('build'));


/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
