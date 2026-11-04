import {Router} from 'express'
import { BookHandler } from '../Controllers/booksHandler.js';

const route = Router()

route.get("/", (req,res) => {
   console.log("this is the books route");
})


route.post("/",BookHandler);

route.get("/:id", (req,res) => {
   console.log("this is the books route");
})

export default route
