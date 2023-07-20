const express = require("express");
const User = require("../models/User")
const router = express.Router();

router.post("/login", async function (req, res) {
    try {
        const {email, password} = req.body
        const result = await User.findOne({email,password});
        if (result){
            res.status(200).json(result)
        }
    } catch (error) {
         res.status(500).json(error)
    }
})

router.post("/register", async function (req, res) {
    try {
        const newUser = await User.create(req.body);
            res.status(201).json({
                status: 200,
                data: "User Registered Successfully.."
            })
    } catch (error) {
         res.status(500).json(error)
    }
})

module.exports = router;