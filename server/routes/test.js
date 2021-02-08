const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Test = mongoose.model("Test")

router.post('/test1', requireLogin, (req,res)=>{
    const {score} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 1,
        score,
        takenBy: req.user
    })
    test.save().then(result=>{
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test2', requireLogin, (req,res)=>{
    const {score} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 2,
        score,
        takenBy: req.user
    })
    test.save().then(result=>{
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test3', requireLogin, (req,res)=>{
    const {score} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 3,
        score,
        takenBy: req.user
    })
    test.save().then(result=>{
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test4', requireLogin, (req,res)=>{
    const {score} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 4,
        score,
        takenBy: req.user
    })
    test.save().then(result=>{
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test5', requireLogin, (req,res)=>{
    const {score} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 5,
        score,
        takenBy: req.user
    })
    test.save().then(result=>{
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router