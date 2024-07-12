const mongoose=require('mongoose');

const sellerModel=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
    },{
        timestamp:true
    }
)

const Seller=new mongoose.model("Seller",sellerModel);

module.exports=Seller;