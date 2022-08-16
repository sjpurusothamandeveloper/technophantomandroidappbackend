const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const port = process.env.PORT || 5050;
const bodyParser = require('body-parser');
const hostname = '0.0.0.0';
require('dotenv/config');
app.use(cors({origin: new URL('http://localhost:3000'), credentials: true}))
app.use(bodyParser.json());

//Import Routes
const authRoute = require('./routes/auths');
const technoPhantomRoute = require('./routes/addtechnophantomusers');

app.use('/auth', authRoute)
app.use('/tp', technoPhantomRoute)
//Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/testme', (req, res) => {
    req.setTimeout(50000)
    res.send('We are on home')
})

//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('Connected to DB!'))
app.listen(port, hostname, () => {
    console.log(`Server listening on the port::${port}`)
});
