const express=require('express');
const userController=require('../controllers/userController');
const router = require('./product');

router.post('/user',userController.createUsers)

module.exports=router;