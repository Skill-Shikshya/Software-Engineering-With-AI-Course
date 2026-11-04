import express from "express"
import "dotenv/config"
const app = express();
const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
   console.log(req.method, req.url);
   console.log("hello world");
   res.send("hi");
})

app.listen(PORT, () => console.log(`app running on ${PORT}`));

