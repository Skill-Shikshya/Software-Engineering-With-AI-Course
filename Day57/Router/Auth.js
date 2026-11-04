import Router from "express"
import {db2} from "../config/db.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
const router = Router();
const jwtSecret = process.env.JWT_SECRET
const accesstoken = jwt.sign({id:1, name:"ram"}, jwtSecret, {expiresIn: "15m"});
const refreshtoken = jwt.sign({id:1, name:"ram"}, jwtSecret, {expiresIn: "7d"});

const parts = token.split('.');
console.log("Array Parts:", parts);


const partone = JSON.parse(Buffer.from(parts[0], 'base64').toString('utf8'));
const parttwo = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
//const partthree = JSON.parse(Buffer.from(parts[2], 'base64').toString('utf8'));
console.log("dcrypted parts one", partone);
console.log("dcrypted parts two", parttwo);
console.log("dcrypted parts three", parts[2]);



console.log("token", token);

const verify = jwt.verify(token, jwtSecret);

console.log("verify token", verify);

router.post("/signup", (req,res)=>{
   //validation
   
   //imp is password encryption
   //bcrypt.hash(password);

   //db entry
});

router.post("/login", (req,res) => {

 res.cookie(refreshtoken, {httpOnly: true, secure: false, strict:"strict", path: "/refresh"})
 res.json({name: "access-token", token: accesstoken});
});

export default router
 


