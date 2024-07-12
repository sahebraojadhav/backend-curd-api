const { response } = require("express");
const User = require("../models/userSchema");

exports.createUsers = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!email || !name || !password || !confirmPassword)
    return res.status(400).json({ message: "All fields are necessary" });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "user alredy exits" });
    }

    const newUser = new User(
        { name,
        email, 
        password, 
        confirmPassword
     });
    await newUser.save();
    return res.status(201).json({message:"user created succesfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};
