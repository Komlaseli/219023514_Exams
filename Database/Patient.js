const mongoose = require('mongoose');


const PatientSchema = new mongoose.Schema({
    firstName : { type: String, required: true },
    lastName : { type: String, required: true},
    DateOfBirth : { type: Date, default:Date.now },
    Contact : { type: String },
    residentialAddress : { type: String },
    emergencyNumber : { type: String },
})

const Patient = mongoose.model('Patient', PatientSchema);


const PaymentSchema = new mongoose.Schema({
    fullName : { type: String },
    paymentDate : { type: Data, default: Date.now },
    amountPaid : { type: Number },
    balanceAmt : { type: Number },

});
const Payment = mongoose.model('Payment', PatientSchema);

module.exports =  { Patient, Payment };