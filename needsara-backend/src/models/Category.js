const mongoose = require("mongoose")

const category = new mongoose.Schema({
            id: {
                type: Number,
                default: null
            },
            name:{
                type: String,
                default: ''
            },
            pic: {
                type: String,
                default: ""
            }
})

const Category = new mongoose.model("Category", category);
module.exports = Category; 