const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Test = mongoose.model("Test")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
const { post } = require('./test')
const Atc = mongoose.model("Atc")

router.post('/signup', (req,res)=>{
    // age, gender, address, profile pic, phoneno
    const {name,email,password,age,gender,address,phoneNo, role} = req.body
    if(!email || !name || !password || !age || !gender || !address || !phoneNo){
        return res.status(422).json({error:"Please Enter All the Fields"})
    }
    User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
                return res.status(422).json({error:"User already exists"})
            }
            bcrypt.hash(password, 12)
            .then(hashedpassword=>{
                const user = new User({
                    name:name,
                    email:email,
                    password:hashedpassword,
                    age:age,
                    gender:gender,
                    address:address,
                    phoneNo:phoneNo,
                    role:role
                })
                user.save()
                    .then(user=>{
                        res.json({message:"Registered Successfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })     
            })
            .catch(err =>{
                console.log(err)
            })
})

router.post('/signin', (req,res)=>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please Enter All Fields "})
    }
    User.findOne({email:email})
        .then(savedUser=>{
            if(!savedUser){
                return res.status(422).json({error:"Invalid Credentials"})
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch=>{
                    if(doMatch){
                        // res.json({message:"Successfully Signed In"})
                        const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                        const {_id,name,email,role} = savedUser
                        res.json({token:token,user:{_id,name,email,role}})

                    }
                    else{
                        return res.status(422).json({error:"Invalid Credentials"})
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        })
})


router.get('/profile', requireLogin, (req,res)=>{
    testDetails = 0
    Test.find({takenBy: req.user._id})
    .populate("takenBy", "_id")
    .then(testDetails=>{
        User.find({_id:req.user._id})
        .populate("_id","_id name email age gender address phoneNo")
        .then(details=>{
            res.json({details, testDetails})
        })
        .catch(err=>{
            console.log(err)    
        })
    })
    .catch(err=>{
        console.log(err)    
    })
})


router.post('/add', (req,res)=>{
    // age, gender, address, profile pic, phoneno
    const {name,email,password,age,gender,address,phoneNo, role} = req.body
    if(!email || !name || !password || !age || !gender || !address || !phoneNo){
        return res.status(422).json({error:"Please Enter All the Fields"})
    }
    User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
                return res.status(422).json({error:"User already exists"})
            }
            bcrypt.hash(password, 12)
            .then(hashedpassword=>{
                const user = new User({
                    name:name,
                    email:email,
                    password:hashedpassword,
                    age:age,
                    gender:gender,
                    address:address,
                    phoneNo:phoneNo,
                    role:role
                })
                user.save()
                    .then(user=>{
                        res.json({message:"Psychiatrist Added Successfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })     
            })
            .catch(err =>{
                console.log(err)
            })
})


router.post('/atc', requireLogin, (req,res)=>{
    // age, gender, address, profile pic, phoneno
    const {AutomaticThought, YourChallenge, AlternativeThought,  Feeling} = req.body
    if(!AutomaticThought) {
        return res.status(422).json({error:"No Text Received"})
    }
    req.user.password = undefined
    const atc = new Atc({
        AutomaticThought,
        YourChallenge,
        AlternativeThought,
        Feeling,
        takenBy: req.user
    })
    atc.save().then(result=>{
        res.json({atc:result})
    })
    .catch(err=>{
        console.log(err)
    })
    
})


router.get('/getatc', requireLogin, (req,res)=>{
    Atc.find({takenBy: req.user._id})
    .populate("takenBy", "_id")
    .then(details=>{
        res.json({details})
         })
     .catch(err=>{
          console.log(err)    
    })
})

module.exports = router