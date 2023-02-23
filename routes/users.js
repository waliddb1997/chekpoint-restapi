const express = require('express');

const userRouter = express.Router();
const user=require('../models/users');


// Post new user
userRouter.post('/add',async (req, res) => {
    try {
        const newUser = new user(req.body);
        const result = await newUser.save();
        res.send({user: result,msg:"user added successfully"});


    } catch (error) {
        console.log(error)
    }

})



// get all users
userRouter.get('/',async (req, res) => {
    try {
        
        let result = await user.find();
        
        res.send({user: result,msg:"all users retrieved successfully"});



    } catch (error) {
        console.log(error)
    }

})




// get user by id
userRouter.get('/:id',async (req, res) => {
    try {
        
        let result = await user.findById({_id:req.params.id});

        res.send({user: result,msg:"user found"});



    } catch (error) {
        console.log(error)
    }

})


// delete user by id

userRouter.delete('/:id',async (req, res) => {
    try {
        
        let result = await user.findByIdAndDelete({_id:req.params.id});

        res.send({user: result,msg:"user deleted successfully"});




    } catch (error) {
        console.log(error)
    }

})


// update user by id


userRouter.put('/:id',async (req, res) => {
    try {
        
        let result = await user.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});


        res.send({user: result,msg:"user deleted successfully"});




    } catch (error) {
        console.log(error)
    }

})



module.exports = userRouter;
