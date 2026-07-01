import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
    mongoose
    .connect (process.env.MONGO_URL)
    
    .then(() => {
        console.log ("db is connected")
    })

    .catch((error) => {
        console.error (error, "error in db connection ")
    })

    
};

export default db;