const express = require('express');
const User = require('../models/user');
const router = express.Router();

//get user
router.get('/users', async(req, res) => {
    try{

    }catch(e){

    }
})

//create user
router.post('/user', async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.send(user);        
    }catch(e){
        res.status(500).send(e);
    }
})

//update user
router.patch('/user/:id', async (req, res) => {
    
    try{
        const id = req.params.id;
        const allowedUpdates = ['name', 'email', 'password'];
        const updatesRequested = Object.keys(req.body);
        const isAllowedToUpdate = updatesRequested.every((update) => {
            return allowedUpdates.includes(update);
        })
        if(!isAllowedToUpdate){
            return res.status(401).send('Invalid updates made');
        }
        const user = await User.findById({_id: id});
        if(!user){
            return res.status(404).send('No such user exists');
        }
        updatesRequested.forEach((update) => {
            user[update] = req.body[update];
        })
        await user.save();
        res.send(user);
    }catch(e){
        res.status(500).send(e);
    }
})

//delete user
router.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const user = await User.findById({_id: id});
        if(!user){
            res.status(400).send('No such user exists');
        }
        await User.findByIdAndDelete({_id: id});
        res.send(`${user}\n user deleted`);
    }
    catch{
        res.status(500).send(e);
    }
})

module.exports = router;