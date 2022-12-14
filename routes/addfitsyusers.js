const express = require('express');
const router = express.Router();
const AddFitsyUser = require('../models/AddFitsyUser');
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
router.use(cors(corsOptions));
router.options('*', cors());
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Accept");
    next();
});

router.post('/fitsy-signup', async (req, res) => {
    const addNewFitsyUser = new AddFitsyUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedFitsyUser = await addNewFitsyUser.save();
        res.json({
            statuscode: 200,
            bodymsg: "Saved Successfully",
            dbresp: savedFitsyUser
        });
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/fitsy-userlist', async (req, res) => {
    try {
        const getUserList = await AddFitsyUser.find();
        res.json({
            statuscode: 200,
            bodymsg: getUserList
        });
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;