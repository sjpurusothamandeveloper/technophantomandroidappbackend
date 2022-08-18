const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5050;
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const authRoute = require('./routes/auths');
// const fitsyRoute = require('./routes/addfitsyusers');
// const employeeRoute = require('./routes/employee');
const technoPhantomRoute = require('./routes/addtechnophantomusers');

app.use('/auth', authRoute)
// app.use('/fitsy', fitsyRoute)
// app.use('/fitsyemp', employeeRoute)
app.use('/tp', technoPhantomRoute)
//Routes
app.get('/', (req, res) => {
    res.send('Tadaaaaaa')
})

//Connect To DB
mongoose.connect(
    "mongodb+srv://admintechnophantom:Admin@TechnoPhantom@cluster0.yhcesgg.mongodb.net/?retryWrites=true&w=majority", 
    { useUnifiedTopology: true, useNewUrlParser: true }, 
    () => console.log('Connected to DB!'))
    
app.listen(port, () => console.log(`Server listening on the port::${port}`));
