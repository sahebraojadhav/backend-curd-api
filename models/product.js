//importing the mongoose
const mongoose=require('mongoose')

//creating the schemas
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    
},{
    timestamps:true
});

//created model outoff schemas
const Product=mongoose.model('Product',productSchema)

module.exports=Product