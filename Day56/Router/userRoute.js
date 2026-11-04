import {Router} from "express"
import db from "../config/db.js"
const route = Router();

route.get("/", async (req,res) => {
   const users = await db.query("SELECT * FROM users")
   console.log("the users", users.rows);
   res.json({data: users.rows});
});

route.post("/", async (req,res) => {
   const {name,age,email,phone,address} = req.body;
   const entryArry = [name,age,email,phone,address]
   console.log(name,age,email,phone,address);
   await db.query("INSERT INTO users (name,age,email,phone,address) VALUES($1,$2,$3,$4,$5)", entryArry);
   console.log("successfully added to the db");
   res.send("data added");
})

route.patch("/:id", async (req, res) => {
   const keys = Object.keys(req.body);
   const values = Object.values(req.body);
   console.log("the req key and values", keys, values);
   const updateKeys = keys.map((e,index) => `${e}=$${index+1}`).join(",");
   const query = `UPDATE users SET ${updateKeys} WHERE id = $${keys.length + 1}`;
   await db.query(query, [...values, req.params.id]);
   console.log("this is the query", query);

   res.send("okay done");
});

route.delete("/:id", async (req,res) => {
   await db.query("DELETE FROM users WHERE id = $1", [req.params.id]);
   res.status(204).send("done");
});

export default route
