const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
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

router.post('/fitsy-employee', async (req, res) => {
    const addNewEmployee = new Employee({
        "employeeId": req.body.employeeId,
        "title":req.body.title,
        "branch":req.body.branch,
        "location":req.body.location,
        "country":req.body.country,
        "joiningDate":req.body.joiningDate,
        "role":req.body.role,
        "confirmationdate":req.body.confirmationdate,
        "grossSalary":req.body.grossSalary,
        "officialMobileNumber":req.body.officialMobileNumber,
        "officialEmailId":req.body.officialEmailId,
        "dateOfBirth":req.body.dateOfBirth,
        "age":req.body.age,
        "nationality":req.body.nationality,
        "fatherName":req.body.fatherName,
        "motherName":req.body.motherName,
        "height":req.body.height,
        "weight":req.body.weight,
        "mole":req.body.mole,
        "scar":req.body.scar,
        "educationalQualification":req.body.educationalQualification,
        "professionalQualification":req.body.professionalQualification,
        "specialTraining":req.body.specialTraining,
        "landlineNumber":req.body.landlineNumber,
        "personalMobileNumber":req.body.personalMobileNumber,
        "personalEmailId":req.body.personalEmailId,
        "panNo":req.body.panNo,
        "aadharNo":req.body.aadharNo,
        "permanentAddress":req.body.permanentAddress,
        "currentAddress":req.body.currentAddress,
        "workExperience":req.body.workExperience,
        "periodOfService":req.body.periodOfService,
        "companyName":req.body.companyName,
        "designation":req.body.designation,
        "languagesKnown":req.body.languagesKnown,
        "speaking":req.body.speaking,
        "reading":req.body.reading,
        "writing":req.body.writing,
        "emergencyContactPerson":req.body.emergencyContactPerson,
        "emergencyContactNumber":req.body.emergencyContactNumber,
        "relationship":req.body.relationship,
        "familyMemberName":req.body.familyMemberName,
        "familyMemberAge":req.body.familyMemberAge,
        "familyMemberRelationship":req.body.familyMemberRelationship,
        "bankName":req.body.bankName,
        "accountNumber":req.body.accountNumber,
        "ifscCode":req.body.ifscCode,
        "uanNumber":req.body.uanNumber,
        "epfNominee":req.body.epfNominee,
        "nomineeDob":req.body.nomineeDob,
        "esicNumber":req.body.esicNumber,
        "esiNominee":req.body.esiNominee
    })

    try {
        const savedEmployee = await addNewEmployee.save();
        res.json({
            statuscode: 200,
            bodymsg: "Saved Successfully",
            dbresp: savedEmployee
        });
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/fitsy-employeelist', async (req, res) => {
    console.log("req-list", req)
    try {
        const getEmployeeList = await Employee.find();
        res.json({
            statuscode: 200,
            bodymsg: getEmployeeList
        });
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;