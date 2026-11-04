import Router from "express"
import {db2} from "../config/db.js"
import bcrypt from "bcrypt"
const router = Router();


router.post("/signup", (req,res)=>{
   //validation
   
   //imp is password encryption
   //bcrypt.hash(password);

   //db entry
});

router.post("/login", (req,res) => {

});

export default router
 


