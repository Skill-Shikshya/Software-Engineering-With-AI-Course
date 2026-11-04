import express from "express"
import "dotenv/config"
import db from "./config/db.js"
const PORT = process.env.PORT
const app = express()

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
