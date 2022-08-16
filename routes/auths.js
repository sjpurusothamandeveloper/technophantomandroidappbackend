const express = require('express');
const router = express.Router();
const AddTechnoPhantomUser = require('../models/AddTechnoPhantomUser');
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

router.post('/signin', async (req, res) => {
  try {
    console.log("Req", req.body)
    const getUserByCred = await AddTechnoPhantomUser.findOne({ email: req.body.email });
    console.log("#$%", getUserByCred)
    if (Object.keys(getUserByCred).length > 0) {
      let reqUEmail = req.body.email;
      let reqUPwd = req.body.pwd;
      let dbUEmail = getUserByCred.email;
      let dbUPwd = getUserByCred.password;
      if ((reqUEmail == dbUEmail) && (reqUPwd == dbUPwd)) {
        res.json({
          statuscode: 200,
          bodymsg: "User Found"
        });
      }
      else {
        res.json({
          statuscode: 200,
          bodymsg: "Invalid Found"
        });
      }
    }

  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;