import express from "express"
import "dotenv/config"
import {Pool} from "pg"
const PORT = process.env.PORT
const app = express()

const db = new Pool({
   host: "localhost",
   port: 5432,
   user: "jhon",
   database: "bibek",
   password: "password"
})

db.on("connect", () => console.log("connected successfully"));
db.on("error", (err) => console.log("something went wrong", err));

app.get("/api", (req,res) => {
   console.log("url", req.url);
   res.send("res from api");
})

app.get("/users", async (req,res) => {
   const users = await db.query("SELECT * FROM users")
   console.log("the users", users.rows);
   res.json({data: users.rows});
});

app.listen(PORT, () => console.log("App is running on PORT", PORT));
