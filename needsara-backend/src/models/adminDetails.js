const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const adminDetailsSchema = new mongoose.Schema({
            userName: {
                type: String,
                required: true,
                unique: true
            },
            password : {
                type: String,
                required: true
            },
            name :{
               type: String,
               default: ''
            },
            contactNumber :{
                type: String,
                default: ''
            },
            adminEmail :{
                type: String,
                default: ''
            },
            adharNumber :{
                type: String,
                default: ''
            },
            category :{
                type: String,
                default: ''
            },
            address :{
                type: String,
                default: ''
            },
            pin :{
                type: String,
                default: ''
            },
            district :{
                type: String,
                default: ''
            },
            state :{
                type: String,
                default: ''
            },
            timingsopen :{
                type: String,
                default: ''
            },
            timingsclose :{
                type: String,
                default: ''
            },
            license :{
                type: String,
                default: ''
            },
            jobdescription :{
                type: String,
                default: ''
            },
            visitingCharges: {
                type: Number,
                default: 0
            },
            pic: {
                type: String,
                default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            }
})

// Now we need to create a collection

const AdminDetails = new mongoose.model("AdminDetails", adminDetailsSchema);
module.exports = AdminDetails; 