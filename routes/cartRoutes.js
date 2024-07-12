const cartController=require("../controllers/cartController");
const express=require('express');
const router=express.Router();

router.post("/cart",cartController.createCart);

module.exports=router;