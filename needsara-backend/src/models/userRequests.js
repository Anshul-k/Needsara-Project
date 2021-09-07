const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userRequestSchema = new mongoose.Schema({
            uniqueId: {
                type: String,
                default: ''
            },
            userName: {
                type: String,
                required: true
            },
            serviceProviderUserName: {
                type: String,
                default: ''
            },
            serviceProviderName:{
                type: String,
                default: ''
            },
            serviceProviderContactNumber:{
                type: String,
                default: ''
            },
            serviceProviderAddress:{
                type: String,
                default: ''
            },
            serviceProviderDistrict:{
                type: String,
                default: ''
            },
            serviceProviderState:{
                type: String,
                default: ''
            },
            serviceProviderPin:{
                type: String,
                default: ''
            },
            category :{
                type: String,
                default: '',
                required: true
            },
            phoneNumber:{
                type: String,
                default: ''
            },
            address :{
                type: String,
                default: ''
            },
            district :{
                type: String,
                default: ''
            },
            pin :{
                type: Number,
                default: '',
                required: true
            },
            range :{
                type: String,
                default: '<2km'
            },
            descriptionOfWork :{
                type: String,
                default: ''
            },
            completed:{
                type: Boolean,
                default: false
            },
            accepted:{
                type: Boolean,
                default: false
            },
            date:{
                type: Date ,
                default: Date.now
            }
},
{
    timestamps: true
})


// userDetailsSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrpt.genSaltSync(10), null);
// }

// userDetailsSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }
// Now we need to create a collection

const UserRequests = new mongoose.model("UserRequests", userRequestSchema);
module.exports = UserRequests; 