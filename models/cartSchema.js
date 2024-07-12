const mongoose =require('mongoose');

const cartSchema=new mongoose.Schema({
    itemsAndPrice:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    passoword:{
        type:Number,
        required:true
    }
})

const Cart=new mongoose.model('Cart',cartSchema);
module.exports=Cart;