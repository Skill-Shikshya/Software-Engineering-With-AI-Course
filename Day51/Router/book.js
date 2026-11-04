import {Router} from 'express'
import { BookHandler } from './booksHandler';

const route = Router()

route.get("/", (req,res) => {
   console.log("this is the books route");
})


route.post("/books",BookHandler);

route.get("/books/:id", (req,res) => {
   console.log("this is the books route");
})

export default route
