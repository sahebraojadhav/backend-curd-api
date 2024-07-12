const express=require('express');
const router=express.Router();
const sellerController =require('../controllers/sellerController')

router.post('/seller',sellerController.createSeller);
router.put('/seller/:id',sellerController.updateSeller);

module.exports=router;