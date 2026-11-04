import express from "express"
import "dotenv/config"
import {db2} from "./config/db.js"
import Auth from "./Router/Auth.js"
const PORT = process.env.PORT
const app = express()

app.get("/api", (req,res) => {
   console.log("url", req.url);
   res.send("res from api");
});

app.use("/api/auth", Auth);

app.get("/api/users", async (req,res) => {
   const users = await db2.query("SELECT * FROM users")
   console.log("the users", users.rows);
   res.json({data: users.rows});
});

app.listen(PORT, () => console.log("App is running on PORT", PORT));
