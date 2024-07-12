const Seller = require('../models/seller');

exports.createSeller= async(req,res)=>{
    const {lastName,userName,email,password,confirmPassword}=req.body
    
    if(!lastName || ! userName || !email || !password || !confirmPassword )
        return res.status(400).json({message:"all fields are necessary"});

    try{
        const existingSeller=await Seller.findOne({email});
        if(existingSeller)
            return res.status(409).json({message:"user already exits"});

        const newseller=new Seller({
            lastName,
            userName,
            email,
            password,
            confirmPassword
        })

        await newseller.save();
        res.status(201).json({message:"user created succesfully"});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"server error"});
    }
}

exports.updateSeller=async(req,res)=>{
    try{
        const seller=await Seller.findByIdAndUpdate(req.params.id,req.body);
        if(!seller){
            res.status(404).json({message:"seller not founf"})
        }
        res.status(200).json({message:"updated success fully"});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"server error"});
    }
}