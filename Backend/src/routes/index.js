const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.get('/', async (req,res)=>{
    const users = await User.find();
    res.json(users);
});

router.post('/', async (req,res)=>{
    const {_id, name, email, password} = req.body;
    const user = new User({_id,name,email,password});
    await user.save();
    res.json({status: "Usuario ingresado"});

})

router.get('/:_id', async (req,res)=>{
    const user = await User.findById(req.params._id);
    res.json(user);
})


router.put('/:_id', async (req,res)=>{
    const {_id,name,email, password} = req.body;
    const newUser = {_id,name,email, password};
    await User.findByIdAndUpdate(req.params._id, newUser);
    console.log(req.params._id);
    res.json({status: 'User updated'})
})

router.delete('/:_id', async (req,res)=>{
    await User.findByIdAndRemove(req.params._id);
    res.json({status:'User Deleted'});
})

module.exports = router;