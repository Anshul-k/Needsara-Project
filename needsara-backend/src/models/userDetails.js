const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userDetailsSchema = new mongoose.Schema({
            userName: {
                type: String,
                required: true,
                unique: true
            },
            firstName:{
                type: String,
                default: ''
            },
            middleName:{
                type: String,
                default: ''
            },
            lastName:{
                type: String,
                default: ''
            },
            address:{
                type: String,
                default: ''
            },
            city:{
                type: String,
                default: ''
            },
            pin:{
                type: String,
                default: ''
            },
            state:{
                type: String,
                default: ''
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            password : {
                type: String,
                required: true
            },
            phoneNumber :{
                type: Number,
                required: true,
                unique: true
            },
            pic: {
                type: String,
                default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            },
            date: {
                type: Date ,
                default: Date.now
            }
},
{
    timestamps: true
})


userDetailsSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrpt.genSaltSync(10), null);
}

userDetailsSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
// Now we need to create a collection

const UserDetails = new mongoose.model("UserDetails", userDetailsSchema);
module.exports = UserDetails; 