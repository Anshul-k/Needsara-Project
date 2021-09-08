const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/customerSignUp_Login",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection is successful`);
}).catch((e) => {
    console.log(`no connection ${e}`);
})