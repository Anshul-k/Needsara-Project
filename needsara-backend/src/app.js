const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')
const {errorHandler} = require("./middleware/errorMiddleware")
const generateToken = require("./util/generateToken")
const fast2sms = require('fast-two-sms')
const multer = require('multer')
const nodemailer = require('nodemailer')

const app = express();

app.use(bodyParser.json()); 
app.use(cors());
app.use(errorHandler)

require("./db/connect");

const UserDetails= require("./models/userDetails");
const AdminDetails= require("./models/adminDetails");
const UserRequests= require("./models/userRequests");
const Category = require("./models/Category");
const { registerHelper } = require('hbs');

const port = process.env.PORT || 3000;

// Define Storage for the Images
const storage = multer.diskStorage({
    // destination for files
    destination: function(request,file,callback){
        callback(null,'C:/Users/Anshul kasana/Desktop/needsara-app/src/Images/user');
    },

    // add back the extension
    filename: function(request,file,callback){
        callback(null, Date.now()+ file.originalname)
    }
})
// Upload parameters for multer
const upload = multer({
    storage: storage,
    limits:{
        fieldSize: 1024*1024*3
    },
})


// Route for Category
app.post('/category', async(req,res) => {
    try {
        
        const category = new Category({
                id: req.body.id,
                name: req.body.name,
                pic: req.body.pic
            }) 
            category.save().then(
                () => {
                  res.status(201).json({
                    message: 'Post saved successfully!',
                  });
                }
              )
        } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

// Getting categories Based on ID
app.get('/category/:id', function(req,res){
    Category.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            data: result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})
// getting Categories Based on Query
app.get('/category', function(req,res){
    var name = req.query;
    let post = Category.find({},{name:name})
    .then(result=>{
        res.status(200).json(post)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})




// For User to signin using credentials
app.post('/signin_user', async(req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;

        const Name = await UserDetails.findOne({userName:userName});
        if(Name.password==password){
            res.json('success');
        }else{
            res.status(400).json('Error logging in');
        }
    } catch(error) {
        res.status(400).send("Invalid Username")
        console.log(error)
    }
})

// For User Registration in the database
app.post('/register_user', async(req,res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.ConfirmPassword

        if(password===cpassword){
            const Register_User = new UserDetails({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                confirmPassword: req.body.ConfirmPassword
            }) 
            Register_User.save().then(
                () => {
                  res.status(201).json({
                    message: 'Post saved successfully!'
                  });
                }
              )
        }else{
            res.send("password are not matching");
            window.alert("Password Doesnot Match")
        }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

// For Admin/Service Provider Registration in the database (only username and password)
app.post('/register_admin', async(req,res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.ConfirmPassword

        if(password===cpassword){
            const Register_admin = new AdminDetails({
                userName: req.body.userName,
                password: req.body.password,
                confirmPassword: req.body.ConfirmPassword
            }) 
            Register_admin.save().then(
                () => {
                  res.status(201).json({
                    message: 'Post saved successfully!',
                  });
                }
              )
        }else{
            res.send("password are not matching");
            window.alert("Password Doesnot Match")
        }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

// For Admin/Service Provider Registration in the database (adding other details using update method) 
app.put('/register_admin', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        const userName = req.body.userName;
        AdminDetails.updateOne({userName:userName},{
            $set:{
                name: req.body.name,
                contactNumber: req.body.contactNumber,
                adminEmail: req.body.adminEmail,
                adharNumber: req.body.adharNumber,
                category: req.body.category,
                address: req.body.address,
                pin: req.body.pin,
                district: req.body.district,
                state: req.body.state,
                timingsopen: req.body.timingsopen,
                timingsclose: req.body.timingsclose,
                license: req.body.license,
                jobdescription: req.body.license,
            }
        })
        .then(result=>{
            res.status(200).json({
                updated_value: result 
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

// For User Requests data gathering.
app.post('/user_requests', async(req,res) => {
    try {
            const User_Request = new UserRequests({
            uniqueId: req.body.uniqueId,
            userName: req.body.userName,
            category: req.body.category,
            address: req.body.address,
            district: req.body.district,
            pin: req.body.pin,
            phoneNumber: req.body.phoneNumber,
            range: req.body.range,
            descriptionOfWork: req.body.descriptionOfWork
        }) 
        User_Request.save().then(
            () => {
                res.status(201).json({
                message: 'Request saved successfully!'
                });
            }
            )
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// Api for User Requests
app.get('/user_requests', function(req, res){
    let posts = UserRequests.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
})

// Api for Requests of the Service Provider
app.get('/user_requests_api', function(req, res){
    let posts = AdminDetails.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
})

// For updating the name of Service Provider in user's request  
app.put('/user_requests', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        // Updating the value for Service Provider in user request
        const uniqueId = req.body.uniqueId;
        UserRequests.updateOne({uniqueId:uniqueId},{
            $set:{
                serviceProviderUserName: req.body.serviceProviderUserName,
                serviceProviderName: req.body.serviceProviderName,
                serviceProviderContactNumber : req.body.serviceProviderContactNumber,
                serviceProviderAddress: req.body.serviceProviderAddress,
                serviceProviderDistrict: req.body.serviceProviderDistrict,
                serviceProviderState: req.body.serviceProviderState,
                serviceProviderPin: req.body.serviceProviderPin
            }
        })
        .then(result=>{
            res.status(200).json({
                updated_value: result 
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}) 
// For updating the value of user request to completed
app.put('/user_requests_completed', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        // Setting user Status Completed
        const userName = req.body.userName;
        UserRequests.updateOne({userName:userName},{
            $set:{
                completed: req.body.completed
            }
        })
        .then(result=>{
            res.status(200).json({
                updated_value: result 
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

// For deleting the request of the user
app.delete('/user_requests', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        // deleting the request in user request for the user
        const date = req.body.date;
        UserRequests.deleteOne({date:date})
        .then(result=>{
            res.status(200).json({
                message:'Request Deleted',
                result:result
            })
        })  
        .catch(err=>{
            res.status(500).json({
                message:'Error: Error while deleting request.',
                error: err
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// Getting All Users
app.get('/users', function(req, res){
    let posts = UserDetails.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
})
// Updating user password
app.put('/user', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        const password = req.body.password;
        const cpassword = req.body.ConfirmPassword
        const userName = req.body.userName;

        if(password===cpassword){
            UserDetails.updateOne({userName:userName},{
                $set:{
                    password: req.body.password
                }
            })
            .then(result=>{
                res.status(200).json({
                    updated_value: result 
                })
            })
            .catch(err=>{
                res.status(500).json({
                    message:'Error: Error while updating password.',
                    error: err
                })
            })
        }else{
            res.send("password are not matching");
            }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// Getting ALL Service Provider
app.get('/admin', function(req, res){
    let posts = AdminDetails.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
})
// Updating Service Provider password
app.put('/admin', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        const password = req.body.password;
        const cpassword = req.body.ConfirmPassword
        const userName = req.body.userName;

        if(password===cpassword){
            AdminDetails.updateOne({userName:userName},{
                $set:{
                    password: req.body.password
                }
            })
            .then(result=>{
                res.status(200).json({
                    updated_value: result 
                })
            })
            .catch(err=>{
                res.status(500).json({
                    message:'Error: Error while updating password.',
                    error: err
                })
            })
        }else{
            res.send("password are not matching");
            }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
//  Updating User details
app.put('/user_data', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        const userName = req.body.userName;
        UserDetails.updateOne({userName:userName},{
            $set:{
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                email: req.body.email,
                address: req.body.address,
                city: req.body.city,
                pin: req.body.pin,
                state: req.body.state,
                phoneNumber: req.body.phoneNumber
            }
        })
        .then(result=>{
            res.status(200).json({
                updated_value: result 
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:'Error: Error while updating data.',
                error: err
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// Sending SMS to the Service Provider
app.post('/send-text', async(req,res,next) => {
    try {
        fast2sms.sendMessage({authorization : 'cyva1tZX693qujCxpIPenoSRMQAVWhkNgiTU8sDHdYO2EfrwLloh2Ggz6cpnlTJEIOX14teLPAvykfsK' , message : `New Request: 
Customer phone number:- ${req.body.userPhoneNumber} 
Customer Address:-${req.body.address},${req.body.district},${req.body.Pin}
Work Description:-${req.body.description}` ,  numbers : [req.body.recipient]})
        .then(response=>{
            res.status(200).json({
                response: response
            })
          })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// To upload the user profile Images
app.post('/user_upload', upload.single('image'), async(req,res,next)=>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        const userName = req.body.userName;
        UserDetails.updateOne({userName:userName},{
            $set:{
                pic: req.file.filename
            }
        })
        .then(result=>{
            res.status(200).json({
                updated_value: result 
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:'Error: Error while updating data.',
                error: err
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

// For updating the value of Service provider request accepted
app.put('/user_requests_accepted', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        // Setting user Status Completed
        const serviceProviderUserName = req.body.serviceProviderUserName;
        UserRequests.updateOne({serviceProviderUserName:serviceProviderUserName},{
            $set:{
                accepted: req.body.accepted
            }
        })
        .then(result=>{
            res.status(200).json({
                updated_value: result 
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// Sending cancel SMS to the user 
app.post('/send-text-user', async(req,res,next) => {
    try {
        fast2sms.sendMessage({authorization : 'cyva1tZX693qujCxpIPenoSRMQAVWhkNgiTU8sDHdYO2EfrwLloh2Ggz6cpnlTJEIOX14teLPAvykfsK' , message : `New Message:
${req.body.serviceProviderName} has DECLINED your request of the job.
We suggest you to find another Service Provider.`,  numbers : [req.body.phoneNumber]})
        .then(response=>{
            res.status(200).json({
                response: response
            })
          })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// sending the Accepted SMS to the user
app.post('/send-text-userAccepted', async(req,res,next) => {
    try {
        fast2sms.sendMessage({authorization : 'cyva1tZX693qujCxpIPenoSRMQAVWhkNgiTU8sDHdYO2EfrwLloh2Ggz6cpnlTJEIOX14teLPAvykfsK' , message : `New Message:
${req.body.serviceProviderName} has ACCEPTED your request of the job.
You will be contacted by the Service Provider Soon.`,  numbers : [req.body.phoneNumber]})
        .then(response=>{
            res.status(200).json({
                response: response
            })
          })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// For Service Provider to Signin using credentials
app.post('/signin_admin', async(req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;

        const Name = await AdminDetails.findOne({userName:userName});
        if(Name.password==password){
            res.json('success');
        }else{
            res.status(400).json('Error logging in');
        }
    } catch(error) {
        res.status(400).send("Invalid Username")
        console.log(error)
    }
})
// Updating service Provider Details
app.put('/admin_data', async(req,res,next) =>{
    try{
        if(!req.body){
            return res.status(400).send({message:"Data to be updated cannot be empty"})
        }
        const userName = req.body.userName;
        AdminDetails.updateOne({userName:userName},{
            $set:{
                name: req.body.Name,
                adminEmail: req.body.email,
                address: req.body.address,
                district: req.body.District,
                pin: req.body.pin,
                state: req.body.state,
                category: req.body.Category,
                jobdescription: req.body.JobDescription,
                timingsopen: req.body.TimingsOpen,
                timingsclose: req.body.TimingsClose,
                contactNumber: req.body.phoneNumber
            }
        })
        .then(result=>{
            res.status(200).json({
                updated_value: result 
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:'Error: Error while updating data.',
                error: err
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})
// Contact us Form
app.post('/contactus', async(req,res) => {
    try {
        let data = req.body

        const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            <li>Phone Number: ${data.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `;

        let smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            port: 465, 
            auth: {
                user: 'needsara.localforvocal@gmail.com',
                pass: 'abanaspr@2021'
            }
        });

        let mailOptions={
            from: data.email,
            to: 'needsara.localforvocal@gmail.com',
            subject: `Needsara Query from ${data.name}`,
            html: output
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            if(error){
                res.send("Error: There was some error with the contact form")
                console.log(error)
            }
            else{
                res.json('success')
            }
        });
        smtpTransport.close();

    } catch(error) {
        res.status(400).send("Error: Error With Contact us from ")
        console.log(error)
    }
})


// STEP FOR PRODUCTION ON HEROKU
if(process.env.NODE_ENV == "production") {
    app.use(express.static("needsara-Frontend/build"));
    const path = require("path");
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'needsara-Frontend', 'build', 'index.html'));
    })
}



app.listen(port, function() {
    console.log(new Date().toISOString() + `: server started on port ${port}`);
});


