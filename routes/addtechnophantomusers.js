const express = require('express');
const router = express.Router();
const AddFitsyUser = require('../models/AddTechnoPhantomUser');
var cors = require('cors');
var corsOptions = {
    // origin: '0.0.0.0',
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

router.post('/technophantom-signup', async (req, res) => {
    console.log("#####", req.body)
    // req.setTimeout(50000)
    const addNewFitsyUser = new AddFitsyUser({
        // name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedFitsyUser = await addNewFitsyUser.save();
        res.json({
            statuscode: 200,
            message: "Registered Successfully, now go to Login screen",
            dbresp: savedFitsyUser
        });
    console.log("##### savedFitsyUser", savedFitsyUser)

    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/technophantom-dummysignup', async (req, res) => {
    console.log("#####", req.body)
    // req.setTimeout(999999000)
    const addNewFitsyUser = new AddFitsyUser({
        // name: req.body.name,
        userName: req.body.userName,
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

router.post('/technophantom-userlist', async (req, res) => {
    // req.setTimeout(50000)
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

router.post('/technophantom-updateprofile', async (req, res) => {
    // req.setTimeout(50000)
    try {
        console.log('updateprofile req.body', req.body)
        await AddFitsyUser.updateOne({_id : req.body.id}, { $set: { userName: req.body.userName, email: req.body.email}});  
        res.json({
            statuscode: 200,
            bodymsg:{
                id: req.body.id
            },
            message: "Profile Updated"
        });
    } catch (err) {
        res.json({ message: err });
    }
})

router.put('/technophantom-updateWorkoutdetails', async (req, res) => {
    try {
        const userObj = await AddFitsyUser.findById({_id : req.body.id})

        //  const    totalHrs = req.body.totalHrs
        console.log(userObj, 'userObj')

        if (!userObj){
           return res.status(404).json({message: "Not Found"})
        }
        const dbVal = Number(userObj.totalWorkingHrs) ? Number(userObj.totalWorkingHrs) : 0 ;
        let workingHrs = dbVal + Number(req.body.totalWorkingHrs);

        await AddFitsyUser.updateOne({_id : req.body.id}, { $set: { totalWorkingHrs: workingHrs.toString()}}); 
        const updatedUserObj = await AddFitsyUser.findById({_id : req.body.id})

        res.status(200).json({
            bodymsg:{
            id: req.body.id
            },
            message: "Workout Hours Updated"})

    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/technophantom-getUserDetails', async (req, res) => {
    try {
        const userObj = await AddFitsyUser.findById({_id : req.body.id})


        if (!userObj){
          return res.status(404).json({msg: "Not Found"})
        }

        let updatedUserObj = await AddFitsyUser.findById({_id : req.body.id})

        res.status(200).json({ usedDetails: updatedUserObj})

    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/technophantom-user-signIn', async (req, res) => {
    try {

        let userObj = await AddFitsyUser.findOne({ userName : req.body.userName})

        console.log(userObj, 'userObj')
        if (!userObj){
           return res.status(200).json({msg: "Not Found"})
        }

        if (userObj.password !== req.body.password){
            return res.status(200).json({msg: "Invalid user credentials"})
         }


        res.status(200).json({ usedDetails: userObj, message: "Signed In Successfully"})

    } catch (err) {
        res.status(404).json({ message: err });
    }
})

module.exports = router;