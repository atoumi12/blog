"use strict";

const bcrypt = require("bcrypt");



exports.signupUser = (req,res,next)=>{
    console.log("SignUP ....");

    res.json({msg: "hi"});
};