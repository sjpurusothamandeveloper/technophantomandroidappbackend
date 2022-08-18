const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema(
    {
        employeeId: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        branch: {
            type: String,
            required: false
        },
        location: {
            type: String,
            required: false
        },
        joiningDate: {
            type: String,
            required: false
        },
         role : {
            type: String,
            required: false
        },
         confirmationDate : {
            type: String,
            required: false
        },
         grossSalary : {
            type: String,
            required: false
        },
         officialMobileNumber : {
            type: String,
            required: false
        },
         officialEmailId : {
            type: String,
            required: false
        },
         dateOfBirth : {
            type: String,
            required: false
        },
         age : {
            type: String,
            required: false
        },
         nationality : {
            type: String,
            required: false
        },
         fatherName : {
            type: String,
            required: false
        },
         motherName : {
            type: String,
            required: false
        },
         height : {
            type: String,
            required: false
        },
         weight : {
            type: String,
            required: false
        },
         mole : {
            type: String,
            required: false
        },
         scar : {
            type: String,
            required: false
        },
         educationalQualification : {
            type: String,
            required: false
        },
         professionalQualification : {
            type: String,
            required: false
        },
         specialTraining : {
            type: String,
            required: false
        },
         landlineNumber : {
            type: String,
            required: false
        },
         personalMobileNumber : {
            type: String,
            required: false
        },
         personalEmailId : {
            type: String,
            required: false
        },
         panNo : {
            type: String,
            required: false
        },
         aadharNo : {
            type: String,
            required: false
        },
         permanentAddress : {
            type: String,
            required: false
        },
         currentAddress : {
            type: String,
            required: false
        },
         workExperience : {
            type: String,
            required: false
        },
         periodOfService : {
            type: String,
            required: false
        },
         companyName : {
            type: String,
            required: false
        },
         designation : {
            type: String,
            required: false
        },
         languagesKnown : {
            type: String,
            required: false
        },
         speaking : {
            type: String,
            required: false
        },
         reading : {
            type: String,
            required: false
        },
         writing : {
            type: String,
            required: false
        },
         emergencyContactPerson : {
            type: String,
            required: false
        },
         emergencyContactNumber : {
            type: String,
            required: false
        },
         relationship : {
            type: String,
            required: false
        },
         familyMemberName : {
            type: String,
            required: false
        },
         familyMemberAge : {
            type: String,
            required: false
        },
         familyMemberRelationship : {
            type: String,
            required: false
        },
         bankName : {
            type: String,
            required: false
        },
         accountNumber : {
            type: String,
            required: false
        },
         ifscCode : {
            type: String,
            required: false
        },
         uanNumber : {
            type: String,
            required: false
        },
         epfNominee : {
            type: String,
            required: false
        },
         nomineeDob : {
            type: String,
            required: false
        },
         esicNumber : {
            type: String,
            required: false
        },
         esiNominee : {
            type: String,
            required: false
        },
        createdat: {
            type: Date,
            default: Date.now
        },
        updatedat: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = mongoose.model('FitsyEmployees', EmployeeSchema);