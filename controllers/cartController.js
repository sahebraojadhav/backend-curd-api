const Cart=require('../models/cartSchema');

exports.createCart=async(req,res)=>{
    const {itemsAndPrice,userName,password}=req.body;

    if(!itemsAndPrice || !userName || !password)
        return res.status(400).json({message:"all fields are necessary"})

    try{
        const newCart=new Cart({
            itemsAndPrice,
            userName,
            password
        });
        const saveRes=await newCart.save();
        if(saveRes)
            return res.status(201).json({message:"user created succesfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"server error"});
    }
}