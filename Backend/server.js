import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./src/Config/db.js";

dotenv.config();

const app = express();

app.use(cors( {
    origin : process.env.BASE_URL,
    credentials : "true",
    methods : ['GET', 'POST', 'DELETE', 'OPTION'], 
    allowedHeaders: ['content-type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))



const port = process.env.PORT || 4000


app.get('/', (req, res) => {
  res.send('Hello World!');
});
 // DB connection 
db();

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});