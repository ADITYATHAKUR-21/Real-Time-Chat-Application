import bcrypt from "bcryptjs"
import db from "../src/Config/db.js"
import jwt from "jsonwebtoken"


export const register = async (req,res) => {
    const {email, password, name} = req.body;

    try {

        const exitingUser = await User.findOne({email : "email"})
        
    } catch (error) {
        console.log("error creating user ", error )
        res.status(500).json({
            error: "creating user error"
        })
    }

};