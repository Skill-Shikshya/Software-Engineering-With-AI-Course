import express from "express"

const app = express()

app.get("/", (_,res) => res.send("hello"));

app.get("/books", (req,res) => {
   console.log("req on url:", req.url);
   res.send("the book in web Dev");
});

app.post("/books", (req,res) => {
   console.log("the req on url",req.url);
   console.log("the method is:", req.method);
   console.log("the data is: ", req.body);
   res.send("sorry I did not reveive the data");
});

app.listen(3000, () => {
   console.log("server is listening on 3000")
});
