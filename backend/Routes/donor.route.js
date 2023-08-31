const express = require("express");
const Donor = require("../Models/donor.model");


const route = express.Router();

route.post("/donate", async(req,res) => {
//console.log(req.body)
    const{name,gender,birthyear,mobile,email,address} = req.body;
    try {
        const donorIsPresent = await Donor.findOne({email});
        if(donorIsPresent) {
            return res.status(404).send("Email Already Exist");
        }
        const donorData = new Donor({name,gender,birthyear,mobile,email,address})
        await donorData.save()
        res.status(201).send("Donor Signed Up")
    } catch (error) {
        res.status(404).send(error.message)
    }
});
module.exports = route;