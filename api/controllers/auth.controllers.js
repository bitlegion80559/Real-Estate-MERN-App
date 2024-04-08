import express from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
export const signup=async(req,res)=>{
    console.log(req.body);
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser=User({username,email,password:hashedPassword});
    try {
        await newUser.save();
    res.status(201).json("Message:Sucess");
    } catch (error) {
        res.status(501).json("Username and email must be unique")
    };
};