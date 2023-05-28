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

module.exports = router;